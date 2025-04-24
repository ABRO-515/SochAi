import HeroSection from '@/components/Page1/HeroSection'
import HowSoch from '@/components/Page1/HowSoch'
import SochAiDifferent from '@/components/Page1/SochAiDifferent'
import WhySochAi from '@/components/Page1/WhySochAi'
import Community from '@/components/Page1/Community'
import Test from '@/components/Page1/Test'
import Questions from '@/components/Page1/Questions'
import Test2 from '@/components/Page1/Test2'
import PhysicsBox from '@/components/UI/PhysicsBox'
import Home from '@/components/UI/Home'
import ModelViewer from '@/components/Model/ModelViewer'

export default function page() {
  return (
    <div>
      <HeroSection />
      <WhySochAi />
      <HowSoch />
      <SochAiDifferent />
      {/* <Test /> */}
      <Community />
     
      {/* <Test2 /> */}
      <Questions />
      {/* <Home/> */}

    </div>
  )
}
