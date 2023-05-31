import ProjectBlock from "@/components/project-block"
import '../globals.css'

export default function Projects() {
  return (
    <main>
      <div className="intro-paragraph">
        <p>In the past I’ve built & launched web apps such MoonBets, DeepDive & PocketGPT.
           User-facing apps utilizing either Data Modeling or AI. In the past I’ve built
           & launched web apps such MoonBets, DeepDive & PocketGPT. User-facing apps utilizing
           either Data Modeling or AI. </p>
      </div>
      <hr style={{
        borderTop:"1px solid black",
        marginTop:"0.25rem",
        marginBottom:"1rem"}}></hr>

      <ProjectBlock
        title={"MoonBets"}
        link={"/more"}
        desc={"In the past I’ve built & launched web apps such MoonBets, DeepDive & PocketGPT. User-facing apps utilizing either Data Modeling or AI."}
        />

      <hr style={{
        borderTop:"1px solid black",
        marginTop:"1rem",
        marginBottom:"1rem"}}></hr>

      <ProjectBlock
        title={"DeepDive"}
        link={"/more"}
        desc={"In the past I’ve built & launched web apps such MoonBets, DeepDive & PocketGPT. User-facing apps utilizing either Data Modeling or AI."}
        />
      <hr style={{
        borderTop:"1px solid black",
        marginTop:"1rem",
        marginBottom:"1rem"}}></hr>

      <ProjectBlock
        title={"PocketGPT"}
        link={"/more"}
        desc={"In the past I’ve built & launched web apps such MoonBets, DeepDive & PocketGPT. User-facing apps utilizing either Data Modeling or AI."}
        />

    </main>
  )
}