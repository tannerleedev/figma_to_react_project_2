import FeaturesSection from "./components/partials/FeaturesSection"
import HeaderSection from "./components/partials/HeaderSection"
import HeroSection from "./components/partials/HeroSection"
import NFTsCarouselSection from "./components/partials/NFTsCarouselSection"

function App() {
  return (
    <div className="font-fixel bg-zinc-900 text-white">
      <HeaderSection />
      <HeroSection />
      <NFTsCarouselSection />
      <FeaturesSection />
    </div>
  )
}

export default App