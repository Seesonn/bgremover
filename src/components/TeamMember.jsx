const TeamMember = ({ member, hoveredMember, setHoveredMember }) => {
  const isHovered = hoveredMember === member.id;
  
  
  const SocialIcons = ({ className = "" }) => (
    <div className={`flex space-x-3 ${className}`}>
      {member.social.facebook && (
        <a
          href={member.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-[#016A70] flex items-center justify-center hover:bg-[#016A70]/80 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#016A70]"
          aria-label={`Visit ${member.name}'s Facebook`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="text-white"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </a>
      )}
      {member.social.linkedin && (
        <a
          href={member.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-[#016A70] flex items-center justify-center hover:bg-[#016A70]/80 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#016A70]"
          aria-label={`Visit ${member.name}'s LinkedIn`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="text-white"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
      )}
      {member.social.github && (
        <a
          href={member.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-[#016A70] flex items-center justify-center hover:bg-[#016A70]/80 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#016A70]"
          aria-label={`Visit ${member.name}'s GitHub`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="text-white"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      )}
    </div>
  );

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
      onFocus={() => setHoveredMember(member.id)}
      onBlur={() => setHoveredMember(null)}
      role="article"
      aria-labelledby={`member-${member.id}-name`}
    >
      <div className={`relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 transform ${isHovered ? "-translate-y-2" : ""} bg-white p-6 h-full`}>
        <div className="flex flex-col items-center">
          {/* Circular image with border */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#A2C579] mb-4 shadow-lg relative">
            <img
              src={member.image || "/placeholder-member.jpg"}
              alt={`Portrait of ${member.name}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              width={128}
              height={128}
            />
            {member.joinDate && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#016A70] text-white text-xs px-2 py-1 rounded-full whitespace-nowrap shadow-md">
                Since {member.joinDate}
              </div>
            )}
          </div>

          <h3 id={`member-${member.id}-name`} className="text-xl font-bold text-[#016A70] text-center">{member.name}</h3>
          <p className="text-[#A2C579] font-medium text-center mb-2">{member.role}</p>
          
          {member.expertise && (
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {member.expertise.map((skill, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-[#D2DE32]/20 text-[#016A70] px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <SocialIcons className="mt-3" />
        </div>

        {/* Bio overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#016A70] to-[#016A70]/90 flex items-center justify-center p-6 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          } rounded-xl`}
          aria-hidden={!isHovered}
        >
          <div className="text-white text-center">
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-[#D2DE32] font-medium mb-3">{member.role}</p>
            <p className="text-white/90 text-sm max-h-32 overflow-y-auto">
              {member.bio || `${member.name} is a valued member of our team.`}
            </p>
            <SocialIcons className="justify-center mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;