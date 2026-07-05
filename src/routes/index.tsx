import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/layouts/hero-section";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="">
      <HeroSection />
    </main>
  );
}
