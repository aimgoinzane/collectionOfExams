import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"
import Keyboard from "./Keyboard"
import Spec from "./Specifications"
import FAQ from "./FAQ"

export default function App(){
  return(
    <>
    <Header />
    <Keyboard />
    <Body name="Customizable RGB Backlighting" description="Personalize the keyboard’s illumination with a wide range of colors and lighting effects. " icon="https://placehold.co/100x100"/>
    <Body name="Mechanical Switches" description="Cherry MX Red switches for a responsive and smooth typing experience. " icon="https://placehold.co/100x100"/>
    <Body name="Programmable Keys" description="Assign macros and custom functions to any key with the included software. " icon="https://placehold.co/100x100"/>
    <Body name="Anti-Ghosting & N-Key Rollover" description="Ensure accurate keypress registration during intense gaming sessions. " icon="https://placehold.co/100x100"/>
    <Body name="Dedicated Media Controls" description="Easily control music and videos with dedicated media keys. " icon="https://placehold.co/100x100"/>
    <Spec />
    <FAQ />
    <Footer />
    </>
    /* image="https://static.wikia.nocookie.net/streetsofrogue_gamepedia_en/images/c/c3/Zombie.png" name="Zombie" endurance="" speed='1' melee="3" firearms='1'/ */
  )
}