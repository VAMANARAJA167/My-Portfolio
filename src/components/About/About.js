import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
  Section,
  SubTitle,
  ListItem,
  ItemTitle,
  Institution,
  Location,
  Type,
  Year,
  Description,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

const educationData = [
  // {
  //   degree: "Full Stack Development",
  //   institution: "Entri Elevate",
  //   location: "Kochi.",
  //   type: "Online.",
  //   year: "March 2024 - Dec 2024",
  // },
  {
    degree: "Bachelor of Business Administration",
    institution: "Alagappa University",
    location: "Karaikudi.",
    type: "Correspondence.",
    year: "Aug 2023 - Present",
  },
  {
    degree: "Draughtsman civil",
    institution: "Government Industrial Training Institute.",
    location: "Chennai.",
    type: "Full time.",
    year: "Aug 2016 - Aug 2018",
  },
];

const CertificationData = [
  {
    title: "Full Stack Development (MERN Stack) Program",
    company: "(In collaboration with Illinois Institute of Technology, USA) - Entri Elevate.",
    type: "online.",
    location: "Kochi.",
    year: "Mar 2024 - Dec 2024",
    description:
      "Completed a comprehensive Full Stack Development program covering both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. Gained hands-on experience through real-world projects and collaborative assignments, enhancing skills in building dynamic web applications.",
  },
];

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Profile Summary</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/CoderVasanth.jpg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! Myself <strong>VAMANA RAJA </strong>. I'm originally from India and currently living in Trichy.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInRight">
            A dedicated and passionate software developer with a strong foundation in both front-end and back-end development, bringing a unique combination of business acumen and technical expertise. <b>Currently focused on the MERN stack</b>, 
            working on projects that showcase skills in building scalable and efficient web applications. Problem-solving is a key strength,
            with a continuous drive to learn new technologies and best practices. The goal is to deliver high-quality, user-friendly applications that provide real value to users.
            Whether collaborating within a team or working independently, excellence remains a top priority in every project.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Experience includes developing four impactful projects — two full-stack applications and two high-performance frontend projects — using technologies such as React, Node.js, and MongoDB.
            With a strong passion for innovation, a commitment to mastering new technologies, and a focus on delivering functional, user-friendly, and value-driven solutions,
            this skill set is well-suited for contributing effectively to any organization.
              <div className="tagline2">
                I have become confident using the following Technologies & Tools :
              </div>
            </ScrollAnimation>
            
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInRight" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
      <ContactWrapper id="education">
            <div className="Container">
              {/* <div className="SectionTitle">Education</div> */}
              <div className="BigCard">
                <div className="educationbio">
                  <ScrollAnimation animateIn="fadeInLeft">
                    <Section>
                      <SubTitle>Certification :</SubTitle>
                      <ul>
                        {CertificationData.map((exp, index) => (
                          <ListItem key={index}>
                            <ItemTitle>{exp.title}</ItemTitle>
                            <Institution>{exp.company}</Institution>
                            <Location>{exp.location}</Location>
                            <Type>{exp.type}</Type>
                            <Year>{exp.year}</Year>
                            <Description>{exp.description}</Description>
                          </ListItem>
                        ))}
                      </ul>
                    </Section>
                  </ScrollAnimation>
      
                  <ScrollAnimation animateIn="fadeInRight">
                   <Section>
                      <SubTitle>Education :</SubTitle>
                      <ul>
                        {educationData.map((edu, index) => (
                          <ListItem key={index}>
                            <ItemTitle>{edu.degree}</ItemTitle>
                            <Institution>{edu.institution}</Institution>
                            <Location>{edu.location}</Location>
                            <Type>{edu.type}</Type>
                            <Year>{edu.year}</Year>
                          </ListItem>
                        ))}
                      </ul>
                    </Section>
                     {/* <Section>
                      <SubTitle>Work Experience :</SubTitle>
                      <ul>
                        {experienceData.map((exp, index) => (
                          <ListItem key={index}>
                            <ItemTitle>{exp.title}</ItemTitle>
                            <Institution>{exp.company}</Institution>
                            <Location>{exp.location}</Location>
                            <Type>{exp.type}</Type>
                            <Year>{exp.year}</Year>
                            <Description>{exp.description}</Description>
                          </ListItem>
                        ))}
                      </ul>
                    </Section> */}
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </ContactWrapper>
    </ContactWrapper>
  );
}

export default About;
