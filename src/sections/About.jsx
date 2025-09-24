import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* Grid 1 */}
       <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
  {/* Coding POV Image */}
  <img
    src="assets/coding-pov.png"
    className="absolute scale-[1.25] -right-[5rem] -top-[1rem] 
               md:scale-[3] md:left-10 md:inset-y-05 lg:scale-[1.5]"
  />

  {/* Dark overlay with subtle starry/glow effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

  {/* Text (untouched) */}
  <div className="z-10">
    <p className="headtext">Hi, I'm Praveen</p>
    <p className="subtext">
      I design intuitive, engaging, and user-focused digital experiences.  
      With nearly two years of UI/UX experience, I aim to craft products
      that feel simple, seamless, and meaningful.
    </p>
  </div>

  {/* Bottom gradient (subtle dark teal) */}
  <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#062E2E]/90 via-[#093636]/70 to-transparent" />
</div>


        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-300 font-bold">
              FLOW IS DESIGN
            </p>
            <Card
              style={{ rotate: "75deg", top: "45%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Craft"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars and open to remote work across the globe.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Contact */}
        <div
          className="grid-4"
          style={{
            background: "linear-gradient(135deg, #2AA6AD, #0E0E12)",
            border: "1px solid #FF3CAC",
            boxShadow: "0 0 16px rgba(255, 60, 172, 0.25)",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            color: "#E0E0E0"
          }}
        >
          <p className="text-center headtext">
            Do you want to start a project together?
          </p>
          <CopyEmailButton />
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Design Stack</p>
            <p className="subtext">
              I work with diverse UI/UX tools and frameworks to deliver
              clean, engaging, and user-centered designs.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
