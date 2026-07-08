import DarkSection from "../components/sections/home/DarkSection";
import Hero from "./../components/layout/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <DarkSection />
        <section className="h-screen w-full"></section>
        <section className="h-screen w-full" id="services"></section>
        <section className="h-screen w-full"></section>
        <section className="h-screen w-full"></section>
      </main>
    </div>
  );
}
