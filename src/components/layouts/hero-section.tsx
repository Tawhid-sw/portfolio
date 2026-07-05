import { FileText } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import LightRays from "@/components/ui/light-rays";
import ProfileCard from "@/components/ui/profile-card";

export function HeroSection() {
  // Logic to switch origin based on screen width[cite: 1]
  const [raysOrigin, setRaysOrigin] = useState("top");

  useEffect(() => {
    const handleResize = () => {
      setRaysOrigin(window.innerWidth >= 768 ? "left" : "top");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const easeLinear = (t: number) => t;
  const drawHorizontal = {
    hidden: { width: 0 },
    visible: {
      width: "calc(100% + 48px)",
      transition: { duration: 1.5, ease: easeLinear },
    },
  };
  const drawVertical = {
    hidden: { height: 0 },
    visible: {
      height: "calc(100% + 48px)",
      transition: { duration: 1.5, ease: easeLinear },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
  };

  return (
    <section className="relative w-full flex items-center justify-center bg-background px-4 py-8 md:mt-8 -mt-2 sm:px-8 overflow-hidden">
      <div className="relative w-full max-w-[1440px] z-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 w-full h-full relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <LightRays
              raysOrigin={raysOrigin as "top-center" | "left"}
              className="absolute inset-0"
              raysColor="#ffffff"
              raysSpeed={0.1}
              lightSpread={0.2}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.2}
              distortion={0.2}
              pulsating
              fadeDistance={0.6}
              saturation={1}
            />
          </motion.div>

          <motion.div
            variants={drawHorizontal}
            initial="hidden"
            animate="visible"
            className="absolute top-0 left-[-24px] h-px bg-border z-20"
          />
          <motion.div
            variants={drawHorizontal}
            initial="hidden"
            animate="visible"
            className="absolute bottom-0 left-[-24px] h-px bg-border z-20"
          />
          <motion.div
            variants={drawVertical}
            initial="hidden"
            animate="visible"
            className="absolute top-[-24px] left-0 w-px bg-border z-20"
          />
          <motion.div
            variants={drawVertical}
            initial="hidden"
            animate="visible"
            className="absolute top-[-24px] right-0 w-px bg-border z-20"
          />

          <motion.div
            className="md:col-span-7 relative p-4 md:p-16 flex flex-col justify-center z-10"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="max-md:text-center max-md:my-8"
            >
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 w-full">
                Hi, I'm <span className="text-blue-300">Tawhid.</span> <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/50">
                  Exploring New Tech.
                </span>
              </h1>
              <p className="md:text-lg text-base text-muted-foreground mb-8 md:max-w-xl max-w-2xl">
                I am a developer driven by curiosity, constantly diving into
                emerging technologies to build efficient, forward-thinking
                digital solutions.
              </p>
              <Button
                size="lg"
                className="rounded-none gap-2 hover:bg-primary/90 transition-all"
              >
                <FileText className="h-4 w-4" /> Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-3 relative p-0 md:p-16 flex items-center justify-center max-md:mb-12 z-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="relative flex items-center justify-center">
              {/* Architectural Brackets - Only visible on Mobile */}
              <div className="md:hidden absolute -left-6 -top-6 w-12 h-12 border-l border-t border-primary/30" />
              <div className="md:hidden absolute -right-6 -top-6 w-12 h-12 border-r border-t border-primary/30" />
              <div className="md:hidden absolute -left-6 -bottom-6 w-12 h-12 border-l border-b border-primary/30" />
              <div className="md:hidden absolute -right-6 -bottom-6 w-12 h-12 border-r border-b border-primary/30" />

              {/* The Card */}
              <ProfileCard
                className="h-80 aspect-[0.718] z-10 shadow-2xl shadow-primary/10"
                avatarUrl="a49ecbfa4d36ef33103dff743ee50ace.jpg"
                iconUrl="code.svg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
