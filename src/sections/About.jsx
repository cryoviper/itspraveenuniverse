import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        About Me
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden rounded-lg p-6">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.25] -right-[5rem] -top-[1rem] 
                      md:scale-[3] md:left-10 md:inset-y-05 lg:scale-[1.5]"
            alt="Coding POV"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none rounded-lg" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05)_0%,transparent_80%)] pointer-events-none rounded-lg" />

          <div className="z-10">
            <p className="text-xl md:text-2xl font-medium text-white mb-2">
              Hi, I'm Praveen
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-md">
              I design intuitive, engaging, and user-focused digital experiences.
              With nearly two years of UI/UX experience, I aim to craft products
              that feel simple, seamless, and meaningful.
            </p>
          </div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#073636]/90 via-[#0c4a4a]/60 to-transparent rounded-b-lg" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2 rounded-lg p-6">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p
              className="flex items-end text-4xl md:text-5xl font-semibold select-none bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              style={{
                letterSpacing: "0.02em",
              }}
            >
              FLOW IS DESIGN
            </p>

            <Card
              className="hidden md:block"
              style={{ rotate: "75deg", top: "45%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              className="hidden md:block"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              className="hidden md:block"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Craft"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3 relative rounded-lg p-6 bg-gradient-to-tr from-[#1c1c1c] to-[#303030]">
          <div className="z-10 w-[50%]">
            <p className="text-xl md:text-2xl font-medium text-white mb-2">Time Zone</p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm based in Mars and open to remote work across the globe.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Contact */}
        <div
          className="grid-4 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-4"
          style={{
            background: "linear-gradient(135deg, #100d27, #41307a, #2b2940)",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            boxShadow: "0 0 20px rgba(255, 60, 172, 0.2)",
            color: "#F0F0F0",
          }}
        >
          <p className="text-xl md:text-2xl font-medium">
            Ready to launch your next idea into orbit?
          </p>
          <CopyEmailButton />
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative rounded-lg p-6">
          <div className="z-10 w-[50%]">
            <p className="text-xl md:text-2xl font-medium text-white mb-2">Design Stack</p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
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
