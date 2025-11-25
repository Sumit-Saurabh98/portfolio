import { Terminal, Safari, Resume, Finder, Text, Image, Contact } from "@windows"
import {Navbar, Welcome, Dock} from "@components"
import gsap from "gsap"
import {Draggable} from "gsap/Draggable"
import { Home } from "@components"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
    </main>
  )
}
export default App
