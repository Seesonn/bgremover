import HeroSection from "./components/HeroSection"
import StatsSection from "./components/StatsSection"
import HowItWorksSection from "./components/HowItWorksSection"

import TeamSection from "./components/TeamSection"
import CTASection from "./components/CTASection"

const HomePage = () => {
  return (
    <div className="space-y-24">
      <HeroSection />
      {/* <StatsSection /> */}
      <HowItWorksSection />
    
      <TeamSection />
      <CTASection />
    </div>
  )
}

export default HomePage
