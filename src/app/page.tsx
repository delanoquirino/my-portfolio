import { AboutSection } from '@/components/AboutSection'
import { Footer } from '@/components/Footer'
import { FormSection } from '@/components/FormSection'
import { HeroSection } from '@/components/HeroSection'
import { MySkills } from '@/components/MySkills'
import { Navbar } from '@/components/Navbar'
import { ProjectsSection } from '@/components/ProjectsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection/>
        <MySkills/>
        <AboutSection/>
        <ProjectsSection/>
        <FormSection/>
        <Footer/>
      </div>
    </main>
  )
}
