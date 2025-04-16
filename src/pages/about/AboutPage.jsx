import SectionHeading from "../../components/SectionHeading"
import TeamSection from "./components/TeamSection"
import MissionSection from "./components/MissionSection"
import StorySection from "./components/StorySection"

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About BackgroundPro"
          subtitle="We're on a mission to make professional image editing accessible to everyone."
        />

        <StorySection />
        <MissionSection />
        <TeamSection />
      </div>
    </div>
  )
}

export default AboutPage
