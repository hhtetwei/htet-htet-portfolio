// import video from '../../public/image/videotest.mp4';
'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import Image from 'next/image';
import './globals.css';
import { Button, Card, Icon, LinearProgress, Typography } from '@mui/material';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import SkillTree from '@/components/SkillsTree';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Experience } from '@/components/experience';
import Recommendations from '@/components/RecSwiper';

const projects = [
  {
    image: '/image/pj1.jpg',
    url: 'https://cafes-in-town-mern.vercel.app/',
    source: 'https://github.com/hhtetwei/Cafes-In-Town-MERN',
    duration: 1.5,
    name: 'Cafe In Town MERN',
  },
  {
    image: '/image/pj2.jpg',
    url: 'https://bmi-calculator-nine-gamma.vercel.app/',
    source: 'https://github.com/hhtetwei/bmi_calculator',
    duration: 1,
    name: 'BMI Calculator',
  },
  {
    image: '/image/pj3.jpg',
    url: 'https://self-management-mern.vercel.app/',
    source: 'https://github.com/hhtetwei/Self_Management_MERN',
    duration: 2,
    name: 'Self-Management',
  },
  {
    image: '/image/pj4.jpg',
    url: 'https://nextjs-app-router-beta.vercel.app/',
    source: 'https://github.com/hhtetwei/nextjs-app-router-project',
    duration: 1,
    name: 'SEO Landing Page App Router',
  },
];

const skills = [
  { name: 'JavaScript', level: 80, image: '/image/javascript.png' },
  { name: 'React', level: 80, image: '/image/react.svg' },
  { name: 'Next Js', level: 80, image: '/image/next.png' },
  { name: 'Node Js', level: 80, image: '/image/node.svg' },
  { name: 'Nest Js', level: 50, image: '/image/nest.svg' },
  { name: 'TypeScript', level: 80, image: '/image/tsc.png' },
  { name: 'MongoDB', level: 80, image: '/image/mongodb.svg' },
  { name: 'SQL/Prisma', level: 50, image: '/image/prisma2.png' },
];
export default function Home() {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    initialInView: true,
    rootMargin: '0px 0px -100px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <div className="w-full h-full overflow-hidden dark:text-basetextClr dark:bg-black">
      <div className="relative md:hidden s:hidden lg:hidden xxs:hidden block overflow-hidden">
        <video
          controls
          preload="none"
          autoPlay
          loop
          muted
          className="blur-sm w-full"
        >
          <source src="/image/coding.MP4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>

        <div className="z-100 w-full inset-0 absolute flex justify-between">
          <div className="w-[45%] mt-40 p-5">
            <span className="text-basetextClr text-2xl flex justify-center">
              Hi, I am Htet Htet Wai – Turning Ideas Into Code!
            </span>
            <span className="text-basetextClr text-lg flex justify-center text-justify ml-10 mt-5">
              I am an enthusiastic and passionate Full-Stack Web Developer with
              a solid foundation in both front-end and back-end technologies. My
              experience spans a wide range of projects, where I have honed my
              skills and built a strong reputation for delivering high-quality
              work.
            </span>
            <span className="text-basetextClr text-lg flex justify-center text-justify ml-10 mt-5">
              Fluent in English, Chinese, and Burmese, I bring a global
              perspective to my work, ensuring smooth interactions across
              diverse teams and clients. If you&apos;re looking for a developer
              who not only meets but exceeds expectations, I&apos;m the one you
              can count on. With a proven track record of tackling complex
              challenges and delivering results, I handle tasks with precision,
              efficiency, and dedication.Let&apos;s build something amazing
              together!
            </span>

            <div className="flex justify-start ml-10 mt-5 gap-5">
              <Link href="./files/HtetHtetWai-CV.pdf" passHref target="_blank">
                <Button
                  className="relative px-6 py-3 font-bold bg-boxBClr text-black 
             rounded-xl shadow-md transform transition-all duration-300
             hover:translate-y-1 hover:shadow-lg hover:bg-boxBClr hover:text-black"
                >
                  <span className="relative flex items-center gap-2">
                    Download CV
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 5, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </span>
                </Button>
              </Link>

              <Link href="./files/Bachelor-Degree.pdf" passHref target="_blank">
                <Button
                  className="relative px-6 py-3 font-bold bg-boxBClr text-black 
             rounded-xl shadow-md transform transition-all duration-300
             hover:translate-y-1 hover:shadow-lg hover:bg-boxBClr hover:text-black"
                >
                  <span className="relative flex items-center gap-2">
                    Check My Degree
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 5, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-[45%] h-full absolute z-100 inset-0 bottom-0 left-1/2 ml-24 top-10">
            <img
              src="/image/hhw.jpg"
              alt="Your Image"
              className="w-[80%] h-[70%] mt-24 lg:mt-24 p-2 m-5"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full top-20 relative md:block sm:block s:block xs:block hidden overflow-hidden">
        <div className="absolute md:-top-10 md:left-20 md:w-80 md:h-80 bg-boxAClr s:w-60 s:h-60 s:-top-5 s:left-5 z-0"></div>

        <div className="absolute md:top-52 md:right-24 md:w-80 md:h-80 bg-boxBClr s:w-60 s:h-60 s:right-3 s:top-24 z-0 "></div>
        <div className="md:w-[60%] s:w-[80%] mt-20 md:translate-x-40  s:translate-x-11 z-50">
          <img
            src="/image/hhw.jpg"
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full flex flex-col mt-20 p-[1rem]">
          <div id="home">
            <span className="text-black text-2xl flex justify-center dark:text-basetextClr">
              Hi, I am Htet Htet Wai – Turning Ideas Into Code!
            </span>
            <span className="text-black text-lg flex justify-center text-justify mt-5 dark:text-basetextClr">
              I am an enthusiastic and passionate Full-Stack Web Developer with
              a solid foundation in both front-end and back-end technologies. My
              experience spans a wide range of projects, where I have honed my
              skills and built a strong reputation for delivering high-quality
              work.
            </span>
            <span className="text-black text-lg flex justify-center text-justify mt-5 dark:text-basetextClr">
              Fluent in English, Chinese, and Burmese, I bring a global
              perspective to my work, ensuring smooth interactions across
              diverse teams and clients. If you&apos;re looking for a developer
              who not only meets but exceeds expectations, I&apos;m the one you
              can count on. With a proven track record of tackling complex
              challenges and delivering results, I handle tasks with precision,
              efficiency, and dedication.Let’s build something amazing together!
            </span>
          </div>

          <div className="flex justify-center mt-5 gap-2">
            <Link href="./files/HtetHtetWai-CV.pdf" passHref target="_blank">
              <Button
                className="group relative px-4 py-2 font-bold bg-boxBClr text-black text-xs
             rounded-lg shadow-md transform transition-all duration-300
             hover:translate-y-1 hover:shadow-lg hover:bg-boxBClr hover:text-black
             w-auto min-w-[120px] max-w-[200px] flex items-center justify-center"
              >
                <span className="relative flex items-center gap-2 whitespace-nowrap">
                  Download CV
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </span>
              </Button>
            </Link>

            <Link href="./files/Bachelor-Degree.pdf" passHref target="_blank">
              <Button
                className="group relative px-4 py-2 font-bold bg-boxBClr text-black text-xs
             rounded-lg shadow-md transform transition-all duration-300
             hover:translate-y-1 hover:shadow-lg hover:bg-boxBClr hover:text-black
             w-auto min-w-[120px] max-w-[200px] flex items-center justify-center"
              >
                <span className="relative flex items-center gap-2 whitespace-nowrap">
                  Check My Degree
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden xl:block lg:block twoXL:block">
        <div className="w-full justify-between flex mt-20 p-[1rem]">
          <div className="w-[45%] h-72 flex justify-center relative">
            <div className="bg-baseClr rounded-3xl w-[70%]">
              <Image
                src="/image/lofi.webp"
                alt=""
                width={500}
                height={500}
                className="rounded-xl w-full flex justify-end mt-4"
              />

              <div className="relative bg-baseClr rounded-3xl">
                <Image
                  src="/image/experience.gif"
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-xl w-full flex justify-end mt-20"
                />

                <div className="absolute left-3/4 top-2/3 transform translate-x-10">
                  <div className="w-40 h-20 bg-buttontxtClr mb-4 rounded-lg">
                    <div className="flex flex-col justify-center p-2">
                      <span className="mt-2 font-bold flex gap-1">
                        <div>
                          <Image
                            src="/image/star.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="text-grey">Experience</span>
                      </span>
                      <span className="font-bold text-xl flex justify-center text-textClr">
                        2 Years
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-36 transform -translate-y-28">
              <div className="w-40 h-20 bg-buttontxtClr mb-4 rounded-lg">
                <div className="flex flex-col justify-center p-2 ">
                  <span className="mt-2 font-bold flex gap-1">
                    <div>
                      <Image
                        src="/image/star.svg"
                        alt=""
                        width={20}
                        height={20}
                        className=""
                      />
                    </div>
                    <span className="text-grey">Project Count</span>
                  </span>
                  <span className="font-bold text-xl flex justify-center text-textClr">
                    10+ Done
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50%] flex justify-start p-[1rem]">
            <div className="flex flex-col mr-10" id="myexp">
              <div className="font-bold text-2xl text-baseClr ">
                My Experience
              </div>

              <div className="mt-5 lg:text-lg text-justify">
                <div className="text-md font-bold">
                  Full-Stack Software Engineer
                </div>
                <span>
                  I designed and developed RESTful APIs using Node.js,
                  Express.js, and NestJS for mobile and web applications.
                  Specializing in front-end development with React.js and
                  Next.js, I created SEO-focused landing pages and dynamic admin
                  dashboards for call centers. My work included implementing
                  OAuth authentication with Google, Facebook, and Firebase, as
                  well as managing CI/CD pipelines to streamline development and
                  deployment processes.
                </span>
              </div>
              <div className="mt-5 lg:text-lg text-justify">
                <span>
                  I migrated a legacy vanilla JavaScript application to React.js
                  using the Remix framework, enhanced user experience by
                  designing intuitive interfaces with Shadcn, and managed the
                  &quot;Users&quot; module for the admin dashboard. I also
                  conducted software testing with Jest to ensure secure and
                  reliable authentication workflows. Combining front-end
                  expertise with strong communication skills, I consistently
                  deliver seamless user experiences and efficient development
                  processes.
                </span>
              </div>
              <div className="mt-5 lg:text-lg text-justify">
                <span>
                  I excel as both an independent contributor and a team player,
                  using strong communication skills to simplify technical
                  concepts and foster collaboration. As a fast learner and hard
                  worker, I bring innovative solutions to projects and manage
                  multiple tasks effectively, consistently delivering
                  high-quality results on time. I’m proficient in a wide range
                  of scripting languages and tools, always seeking to expand my
                  web development knowledge and design skills.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="block xl:hidden twoXL:hidden threeXL:hidden fourXL:hidden fiveXL:hidden mt-28 p-[1rem]"
      >
        <Experience />
      </div>

      <div className="xl:mt-20">
        <div id="projects" className="w-full flex flex-col p-[2rem]">
          <span className="lg:mt-20 lg:text-3xl flex lg:justify-center text-3xl">
            Here&apos;s my recent work projects
          </span>

          <div className="flex mt-10 mb-10 ss:flex-col s:flex-col xs:flex-col">
            <div className="w-full flex flex-wrap justify-around lg:m-5 gap-10">
              {projects &&
                projects.map((p, idx) => {
                  return (
                    <Card
                      className="w-[30%] p-5 border border-grey s:w-full sm:w-full md:w-full"
                      key={idx}
                    >
                      <div>
                        <Image
                          src={p.image}
                          alt=""
                          width={500}
                          height={500}
                          className="w-full rounded-lg"
                        />
                      </div>
                      <div className="mt-5">
                        Project Duration - {p.duration} weeks
                      </div>
                      <div className="mt-3">
                        This full-stack application was created mainly using
                        Next Js for the front end and Node.js for the back end.
                        You can look up cafes and provide reviews. Used UI
                        libraries such as MUI and tailwind.
                      </div>
                      <div className="mt-3">
                        <Link href={p.source}>
                          <button className="text-buttontxtClr flex rounded-lg gap-2">
                            <div className="font-bold">Source Code</div>
                            <div>
                              <Image
                                src="/image/arrow.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="rounded-xl mt-0.5"
                              />
                            </div>
                          </button>
                        </Link>
                      </div>
                      <div className="mt-3">
                        <Link href={p.url}>
                          <button className="text-buttontxtClr flex rounded-lg gap-2">
                            <div className="font-bold">View Demo</div>
                            <div>
                              <Image
                                src="/image/arrow.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="rounded-xl mt-0.5"
                              />
                            </div>
                          </button>
                        </Link>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block twoXL:block threeXL:block fourXL:block fiveXL:block">
        <div className="bg-buttontxtClr flex flex-col">
          <div className="flex flex-col mt-10 mb-10">
            <span className="flex s:flex-wrap justify-center text-2xl s:text-xl text-textClr">
              <span className="text-boxBClr s:w-full s:flex s:justify-center">
                My Skills,
              </span>
              I am striving to never stop learning and improving.
            </span>

            <div>
              <div
                ref={ref}
                className="grid grid-cols-2 gap-6 w-full p-[2rem] m-5"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="flex flex-col mb-4"
                  >
                    <div className="flex items-center mb-2 text-gray-700">
                      <img
                        src={skill.image}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 mr-2"
                      />
                      <span>{skill.name}</span>
                    </div>

                    <div className="relative w-full bg-gray-200 rounded-md h-2">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={
                          inView
                            ? { width: `${skill.level}%` }
                            : { width: '0%' }
                        }
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="absolute top-0 left-0 h-full rounded-md bg-blue-500"
                      >
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            backgroundColor: '#2d333b',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: '#586069',
                            },
                          }}
                          className="rounded-md h-2"
                        />
                      </motion.div>

                      <span
                        className={`absolute text-sm text-gray-500`}
                        style={{
                          top: '-20px',
                          left:
                            skill.level > 10
                              ? `calc(${skill.level}% - 15px)`
                              : '10px',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <hr className="border-textClr" />
          </div>
        </div>
      </div>

      <div className="hidden md:block sm:block s:block xs:block">
        <SkillTree />
      </div>

      <div className="">
        <Contact />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
