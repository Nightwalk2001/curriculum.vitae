import Profile from "./app/Profile"
import Projects from "./app/Projects"
import Awards from "./app/Awards"
import Skill from "./app/Skill"
import Research from "./app/Research"

const App = () => {
    return <article className={"prose-2xl max-w-[1680px] mx-auto"}>
        <Profile/>

        <Projects/>

        <Research/>

        <Skill/>

        <Awards/>
    </article>
}

export default App
