import BlackContainer from "./components/containers/BlackContainer"
import FeaturesSection from "./components/partials/FeaturesSection"
import HeaderSection from "./components/partials/HeaderSection"
import HeroSection from "./components/partials/HeroSection"
import LatestSalesSection from "./components/partials/LatestSalesSection"
import MeetThePunksSection from "./components/partials/MeetThePunksSection"
import NFTsCarouselSection from "./components/partials/NFTsCarouselSection"
import RecentTransactionsSection from "./components/partials/RecentTransactionsSection"

function App() {
  return (
    <div className="font-fixel">
      <BlackContainer>
        <HeaderSection />
        <HeroSection />
        <NFTsCarouselSection />
        <FeaturesSection />
        <MeetThePunksSection />
      </BlackContainer>

      <LatestSalesSection />
      <RecentTransactionsSection />
    </div>
  )
}

export default App