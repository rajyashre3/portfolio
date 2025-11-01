import { useEffect, useMemo, useRef } from "react";
import "./App.css";
import paperVideo from "./paper.mp4";
import phoneMask from "./assets/phone-mask.png";
import temple from "./assets/temple.png";
import script from "./assets/script.png";
import shoot from "./assets/shoot.png";
import QRlink from "./assets/insta-qr.jpg";
import mail from "./assets/gmail.png";
import phone from "./assets/phone.png";

import posters from "./constants/posters";

import Posters from "./components/posters";

import samples from "./constants/samples";
import links from "./constants/links";

import tools from "./constants/tools";
import experience from "./constants/experience";
import keySkills from "./constants/keyskills";

import Resizer from "./components/common/resizer";
import Video from "./components/common/video";
import TimeLine from "./components/timeline";
import Marquee from "./components/common/marquee";

import Slide from "./components/wrappers/slide";
import Fade from "./components/wrappers/fade";
import VisiblilityGuard from "./components/guards/visiblility";

function App() {
  const player = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (player.current) {
      player.current.addEventListener("loadeddata", () => {
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
        }
      });
      player.current.setAttribute("width", "1200px");
      player.current.setAttribute("height", "951px");
      player.current.playbackRate = 0.25;
    }
  }, []);

  const freelanceHighlights = useMemo(() => {
    return links.map((link, id) => {
      return (
        <div key={id} className="flex items-center gap-4">
          <a
            className="text-blue-500 border-b-2 hover:text-red-600"
            href={link.url}
            target="_blank"
          >
            {link.title}
          </a>
          <div>
            <link.icon />
          </div>
        </div>
      );
    });
  }, []);

  const contactCardRenderer = (props: { height: string; width: string }) => {
    return (
      <div
        className="overflow-hidden flex-col items-center justify-between md:flex-row flex relative text-3xl rounded-md w-max mx-auto shadow-2xl shadow-blue-500"
        style={{ ...props, backdropFilter: "blur(10px)" }}
      >
        <div className="relative p-4 min-w-[300px]">
          <h1 className="font-bold">Rajyashree Shahi</h1>
          <h1 className="text-xl">Content Director, Digital Marketer</h1>
          <div className="text-sm">
            <div className="flex items-center gap-2">
              <img src={mail} className="object-contain h-[2em] w-[2em]" />
              <p>
                <a href="mailto://rajyashree2000@gmail.com">
                  rajyashree2000@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={phone} className="object-contain h-[2em] w-[2em]" />
              <p>9828716094</p>
            </div>
          </div>
        </div>
        <div className="min-w-[300px]">
          <img
            src={QRlink}
            className="ml-auto"
            style={{
              width: props.height,
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative duration-1000 transition-opacity opacity-0"
    >
      <div className="-z-40 absolute inset-0 background blur-[3px]" />
      <div className="max-w-[1200px] mx-auto h-screen relative z-0 md:bg-none bg-[url(assets/paper-still.png)] bg-no-repeat bg-cover">
        <video
          className="-z-10 md:block hidden absolute left-0 top-0 max-w-full mx-auto h-full object-cover"
          ref={player}
          muted
          playsInline
          autoPlay
          loop
        >
          <source src={paperVideo} type="video/mp4"></source>
        </video>
        <div className="relative z-999">
          <div className="translate-y-[30px] h-[40px] w-full bg-linear-to-r from-cyan-500 to-blue-500" />
          <div className="absolute w-[200px] left-1/2 -translate-x-1/2">
            <Resizer
              aspectRatio={20 / 20}
              render={(props) => {
                return (
                  <img
                    src={temple}
                    style={{ ...props }}
                    className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 object-cover"
                  />
                );
              }}
            />
          </div>
        </div>
        <div className="overflow-auto h-screen">
          <div className="pt-8">
            <div className="mt-8">
              <h1 className="kantipur-font font-extrabold text-5xl md:text-8xl whitespace-nowrap mx-auto mr-0">
                राज्यश्री शाही
              </h1>
              <h3 className="md:text-3xl relative">Content Director</h3>

              <div className="relative">
                <div className="overflow-hidden relative h-5 bg-[linear-gradient(90deg,#FF6600,#FFD633,#FF6600)]">
                  <div className="md:hidden block relative">
                    <Marquee items={keySkills} height="20px" />
                  </div>

                  <div className="md:flex hidden justify-between items-center md:px-8 px-2">
                    <ul className="flex w-max text-sm gap-x-8 justify-center items-center">
                      {keySkills.map((item, i) => {
                        return (
                          <li
                            style={{ lineHeight: "20px" }}
                            key={i}
                            className={`text-inherit ${
                              i === 0 ? "" : "list-disc"
                            }`}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                    <div
                      className="hidden md:block"
                      style={{ lineHeight: "20px" }}
                    >
                      DOB: २०५९/१२/१४
                    </div>
                  </div>
                </div>

                <div className="absolute -z-10 md:w-[250px] w-[120px] top-1/2 -translate-x-1/6 md:-translate-y-[calc(100%-50px)] -translate-y-[calc(100%-20px)]">
                  <Resizer
                    aspectRatio={1 / 1}
                    render={(props) => {
                      return (
                        <>
                          <img
                            className="absolute top-0 left-0"
                            src={script}
                            style={{ ...props }}
                          />
                        </>
                      );
                    }}
                  />
                </div>

                <div className="absolute -z-10 md:w-[230px] w-[100px] top-1/2 right-0 translate-x-1/7 md:-translate-y-[calc(100%-40px)] -translate-y-[calc(100%-10px)]">
                  <Resizer
                    aspectRatio={1 / 1}
                    render={(props) => {
                      return (
                        <>
                          <img
                            className="absolute top-0 right-0 object-cover -z-50"
                            src={shoot}
                            style={{ ...props }}
                          />
                        </>
                      );
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="md:p-8 p-4">
              <div className="md:flex justify-center gap-x-4 mb-12">
                <div className="flex justify-center">
                  <Resizer
                    aspectRatio={9 / 16}
                    width="300px"
                    render={({ ...props }) => {
                      return (
                        <VisiblilityGuard>
                          <Slide
                            direction="left"
                            delay="xs"
                            className="relative"
                            speed="lg"
                          >
                            <div
                              style={{ ...props }}
                              className="bg-[url(assets/author.png)] bg-position-[bottom_center] bg-no-repeat bg-contain object-contain"
                            />
                            <p className="rounded-sm md:text-3xl text-2xl px-2 absolute -z-10 poppins-font w-max mx-auto bg-linear-to-r from-cyan-500 to-blue-500">
                              Ms. RajyaShree Shahi
                            </p>
                          </Slide>
                        </VisiblilityGuard>
                      );
                    }}
                  />
                </div>
                <div className="flex mt-auto flex-col gap-y-3.5">
                  <h1 className="text-5xl mt-[100px] text-left">
                    About Me: Meet the editor behind lens
                  </h1>
                  <h2 className="text-justify indent-12">
                    <span className="font-bold text-4xl">Rajyashree Shahi</span>
                    <span className="text-xl">
                      , a creative Video Editor and Digital Marketing Officer,
                      brings experience in crafting engaging reels, TikTok
                      content, promotional videos, and Meta Ads for brands and
                      events. With a strong mix of marketing knowledge and
                      visual storytelling, she knows how to capture attention
                      and deliver results. From planning ideas to final edits,
                      Rajyashree ensures every project connects with its
                      audience and strengthens brand presence. Her blend of
                      creativity, adaptability, and detail-oriented work makes
                      her a reliable editor who brings stories to life.
                    </span>
                  </h2>
                </div>
              </div>

              <div className="text-left flex gap-y-3.5 flex-col mt-14">
                <h1 className="text-4xl">
                  The Creator’s Toolkit: Software Proficiency
                </h1>
                <h1 className="text-xl">
                  Each project I create blends creativity with technical
                  precision. These are the tools I rely on to design, edit, and
                  bring visual stories to life.
                </h1>
                <div className="flex mx-auto md:flex-wrap gap-4 md:flex-row flex-col text-justify">
                  {tools.map((tool) => {
                    return (
                      <VisiblilityGuard
                        key={tool.title}
                        className="md:max-w-[48.5%] self-stretch"
                      >
                        <Slide
                          direction="top"
                          delay="xs"
                          className="max-w-full h-full"
                        >
                          <Fade
                            direction="in"
                            delay="sm"
                            className="max-w-full h-full"
                          >
                            <div
                              style={{ backdropFilter: "blur(10px)" }}
                              className="rounded-2xl h-full p-4 max-w-full text-xl flex gap-3 shadow-2xl bg-[rgba(255,255,255,0.5)]"
                            >
                              <img
                                className="rounded-full bg-black w-[40px] h-[40px] object-contain"
                                src={tool.icon}
                              />
                              <div>
                                <h1>
                                  <span className="font-extrabold">
                                    {tool.title}
                                  </span>
                                </h1>
                                <div>{tool.desc}</div>
                              </div>
                            </div>
                          </Fade>
                        </Slide>
                      </VisiblilityGuard>
                    );
                  })}
                </div>
              </div>

              {/* work experience */}
              <div className="text-left mt-14">
                <h3 className="text-4xl mb-4">Career Highlights</h3>
                <div className="pl-[30px]">
                  <TimeLine entries={experience} />
                </div>
              </div>

              <div
                className="mt-14 text-left flex flex-col gap-y-12"
                style={{ counterReset: "item-counter" }}
              >
                <h3 className="text-4xl">My Skills</h3>
                <div style={{ counterIncrement: "item-counter" }}>
                  <h3 className="text-2xl font-bold mb-4 relative before:content-[counter(item-counter)]">
                    . Content Direction
                  </h3>
                  <p className="mb-8">
                    The following highlights the samples of my work as a content
                    creator:
                  </p>
                  <div className="flex gap-4 flex-wrap justify-center">
                    {samples.map((sample) => {
                      return (
                        <div key={sample.id}>
                          <div className="max-w-[300px] relative">
                            <Resizer
                              aspectRatio={9 / 16}
                              width="300px"
                              render={(props) => {
                                return (
                                  <VisiblilityGuard
                                    onVisibile={() =>
                                      console.log("sample", sample.id, "loaded")
                                    }
                                  >
                                    <Slide
                                      direction={
                                        (sample.className as unknown as "left") ||
                                        ""
                                      }
                                      speed="md"
                                      delay="xs"
                                    >
                                      <Fade
                                        direction="in"
                                        delay="sm"
                                        speed="md"
                                      >
                                        <div className="cursor-pointer">
                                          <img
                                            src={phoneMask}
                                            {...props}
                                            style={{ pointerEvents: "none" }}
                                            className="absolute top-0 left-0 h-full w-full -z-10"
                                          />
                                          <div
                                            style={{ ...props }}
                                            className="scale-[0.85]"
                                          >
                                            <Video
                                              icon={sample.icon}
                                              src={sample.url}
                                              muted={false}
                                            />
                                          </div>
                                        </div>
                                      </Fade>
                                    </Slide>
                                  </VisiblilityGuard>
                                );
                              }}
                            />
                          </div>
                          <div className="flex gap-2 flex-wrap justify-center">
                            {sample.links.map((link, i) => {
                              return (
                                <VisiblilityGuard key={i}>
                                  <Fade direction="in" delay="lg">
                                    <a href={link.url} target="_blank">
                                      <link.icon fontSize={"3em"} />
                                    </a>
                                  </Fade>
                                </VisiblilityGuard>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ counterIncrement: "item-counter" }}>
                  <h3 className="text-2xl font-bold mb-4 relative before:content-[counter(item-counter)]">
                    . Graphic Design
                  </h3>
                  <p className="mb-8">
                    The following highlights the samples of my work as a graphic
                    designer:
                  </p>
                  <div className="relative z-20 bg-[url(assets/green-velvet.jpeg)]">
                    <Posters items={posters} />
                  </div>
                </div>

                <div style={{ counterIncrement: "item-counter" }}>
                  <h3 className="text-2xl font-bold mb-4 relative before:content-[counter(item-counter)]">
                    . Freelance
                  </h3>
                  <p className="mb-8">
                    The following links highlights my additional works as a
                    freelancer in my roles:
                  </p>
                  <div className="text-2xl">
                    <TimeLine entries={freelanceHighlights} />
                  </div>
                </div>

                <div style={{ counterIncrement: "item-counter" }}>
                  <h3 className="text-2xl font-bold mb-4 relative before:content-[counter(item-counter)]">
                    . Ads Strategy & Campaign Management
                  </h3>
                  <p className="text-justify">
                    Beyond creating videos and stories, I make sure they are
                    seen by right audience. I handle ad planning targeting and
                    performance tracking, turning creating ideas into Campaign
                    that actually performs.
                  </p>
                </div>
              </div>

              {/* contact details */}
              <div className="mt-14 relative text-left md:w-[600px] w-[300px] mx-auto my-12 mb-16">
                <div className="sm:hidden block w-full">
                  <Resizer
                    aspectRatio={1 / 2}
                    width="100%"
                    render={contactCardRenderer}
                  />
                </div>
                <div className="sm:block hidden">
                  <Resizer
                    aspectRatio={19.5 / 9}
                    width="100%"
                    render={contactCardRenderer}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
