import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, connect } from "./MongoConnect";
import bcrypt from "bcrypt";
// const users = [{ email: "welcome@gmail.com", password: "Welcome123" }];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await connect(collections.Users).findOne({ email });

        if (!user) {
          return null;
        }

        const isMatched = await bcrypt.compare(password, user.password);
        // console.log(isMatched);
        if (isMatched) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log({ user, account, profile, email, credentials });
      try {
        const { id, ...safeUser } = user;
        const payload = {
          ...safeUser,
          role: "user",
          provider: account.provider,
          createdAt: new Date().toISOString(),
        };
        if (!user?.email) {
          return false;
        }
        const isExist = await connect(collections.Users).findOne({
          email: user.email,
        });

        if (!isExist) {
          const result = await connect(collections.Users).insertOne(payload);
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, token, user }) {
      if (token) {
        session.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
