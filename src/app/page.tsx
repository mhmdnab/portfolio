import About from "@/components/About";
import Hero from "@/components/Main";
import ProjectsGrid from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-19 mx-4"
      id="top"
    >
      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
    </main>
  );
}
