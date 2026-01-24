// components/TeamSection.jsx
export default function TeamSection() {
  const team = [
    {
      name: "Rahim Khan",
      role: "Founder & CEO",
      bio: "Passionate about making cities smarter and cleaner through technology.",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&h=800&fit=crop&crop=faces",
    },
    {
      name: "Ayesha Siddika",
      role: "Lead Developer",
      bio: "Building scalable solutions to empower citizens.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Karim Mia",
      role: "Community Manager",
      bio: "Connecting citizens with local authorities for faster resolutions.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&crop=faces",
    },
    {
      name: "Fatima Begum",
      role: "UI/UX Designer",
      bio: "Designing intuitive experiences for millions of users.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&crop=faces",
    },
  ];

  return (
    <section className="py-4 md:py-7 bg-linear-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Meet Our Team
        </h2>

        {/* Grid - 4 members, responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              {/* Circular avatar with pink border */}
              <div
                className="
                  w-48 h-48 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden
                  border-4 border-pink-500 p-2 bg-white shadow-md
                "
              >
                <img
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>

              {/* Role - pink text */}
              <p className="text-md md:text-lg font-medium text-pink-600 mb-2 md:mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xs mx-auto px-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
