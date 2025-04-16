

import { useState } from "react"
import SectionHeading from "../../../components/SectionHeading"
import TeamMember from "../../../components/TeamMember"

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sisan Bhattarai",
      role: "Full Stack Developer",
      bio: "Skilled full-stack developer with expertise in React, Node.js, and modern web frameworks. Expert in building scalable applications.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Bishow Chauwan",
      role: "Full Stack Developer",
      bio: "Experienced full-stack developer specializing in cloud architecture and progressive web applications.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Manish Dev",
      role: "UI/UX Designer",
      bio: "Creative UI/UX designer with a passion for creating intuitive and beautiful user experiences.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 4,
      name: "Sagar Pokherel",
      role: "UI/UX Designer",
      bio: "Award-winning designer with expertise in user research and creating accessible digital experiences.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
   
  ]

  const [hoveredMember, setHoveredMember] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFFDD] to-[#FFFFDD]/50 rounded-3xl">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Team"
          subtitle="We're a team of passionate experts dedicated to creating the best background removal technology in the world."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              member={member}
              hoveredMember={hoveredMember}
              setHoveredMember={setHoveredMember}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
