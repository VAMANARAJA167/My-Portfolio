import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I’m VAMANA RAJA.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'You can also call me VASANTH.',
                    1000,
                    'A Full-Stack Developer specializing in the MERN Stack.',
                    1000,
                    'Specializing in modern JavaScript with React and Node.js.',
                    1000,
                    'From backend logic to pixel-perfect frontends.',
                    1000,
                    'A frontend enthusiast building intuitive UIs.',
                    1000, 
                    'I build responsive and scalable web applications.',
                    1000,
                    "Focused on performance, scalability, and clean code.",
                    1000,
                    "I enjoy solving complex problems with elegant solutions.",
                    1000,
                    "Let's build something amazing together.",
                    1000,
                    "Have a project in mind? I can help bring it to life.",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Or perhaps you are looking for a new team member?",
                    1000,
                    "My goal is to contribute to meaningful projects.",
                    1000,
                    "Feel free to explore my portfolio and get in touch.",
                    1000,
                    "Let's connect and create something impactful.",                    
                    1000,
                    "Thank you for visiting, Catch you later! 👋🏻",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/in-Pic.png"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Swipe down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
