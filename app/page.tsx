import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CollegeProject from "@/components/CollegeProject";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Experience />
        <Skills />
        <Projects />
        <CollegeProject />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
