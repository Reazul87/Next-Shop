import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const privateRoutes = ["/add-item"];

export async function proxy(req) {
  const token = await getToken({ req });
  const isAuthenticated = Boolean(token);
  // const isAuthenticated = !!token;
  const reqPath = req.nextUrl.pathname;

  const isPrivate = privateRoutes.some((route) => reqPath.startsWith(route));
  if (!isAuthenticated && isPrivate) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", reqPath);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item/:path*"],
};
