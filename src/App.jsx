import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Join from './components/Join.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#050505] font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Join />
      </main>
      <Footer />
    </div>
  )
}
