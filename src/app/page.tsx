import About from "@/components/About";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Main />
      <About />
      <Skills />
      {/* <Projects /> */}
    </main>
  );
}
