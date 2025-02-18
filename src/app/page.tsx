'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import Image from 'next/image';
import './globals.css';
import { Button, Card, LinearProgress } from '@mui/material';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import SkillTree from '@/components/SkillsTree';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Experience } from '@/components/experience';

const projects = [
  {
    image: '/image/pj1.jpg',
    url: 'https://cafes-in-town-mern.vercel.app/',
    source: 'https://github.com/hhtetwei/Cafes-In-Town-MERN',
    duration: [1.5, 0],
    name: 'Cafe In Town MERN',
    description:
      'Cafes in Town is a web application that helps users discover and explore cafes in different locations. Built with Next.js for the frontend, it ensures fast performance and server-side rendering, while the backend is powered by Node.js and Express.js for a scalable and efficient architecture. MongoDB is used as the database to manage and store cafe-related data, and the platform is deployed on Vercel for seamless hosting and deployment. This project demonstrates my expertise in developing full-stack applications using the MERN stack with a focus on performance and user experience.',
  },
  {
    image: '/image/pj2.jpg',
    url: 'https://bmi-calculator-nine-gamma.vercel.app/',
    source: 'https://github.com/hhtetwei/bmi_calculator',
    duration: [1, 0],
    name: 'BMI Calculator',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'BMI Calculator is a web application that allows users to calculate their Body Mass Index (BMI) based on height and weight inputs. Developed using Next.js, it offers a fast and responsive user experience with server-side rendering for optimal performance. The application is deployed on Vercel, ensuring seamless accessibility and scalability. This project highlights my ability to build interactive and efficient web applications with a focus on usability and accuracy.',
  },
  {
    image: '/image/pj3.jpg',
    url: 'https://self-management-mern.vercel.app/',
    source: 'https://github.com/hhtetwei/Self_Management_MERN',
    duration: [2, 0],
    name: 'Self-Management',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'Self Management is a web application designed to help users track and manage their personal tasks and goals efficiently. Built with Next.js for the frontend, it ensures a smooth and responsive user experience, while the backend, powered by Node.js and Express.js, provides a robust and scalable architecture. MongoDB is used as the database to store and manage user data, and the platform is deployed on Vercel for seamless hosting. This project demonstrates my ability to develop full-stack applications using the MERN stack with a focus on productivity and user engagement.',
  },
  {
    image: '/image/pj4.jpg',
    url: 'https://nextjs-app-router-beta.vercel.app/',
    source: 'https://github.com/hhtetwei/nextjs-app-router-project',
    duration: [1, 0],
    name: 'SEO Landing Page App Router',
    tags: ['Next.js', 'Express.js', 'MongoDB'],
    description:
      'Next.js App Router Beta is a web application built using Next.js, leveraging the latest app router features for improved performance and scalability. It offers a seamless and dynamic user experience with optimized routing and server-side rendering. Deployed on Vercel, the platform ensures fast loading times and efficient resource management. This project highlights my expertise in modern Next.js development, focusing on performance, flexibility, and best practices.',
  },

  {
    image: '/image/books2.jpg',
    source: 'https://github.com/hhtetwei/books-api',
    duration: [2, 0],
    name: 'Books-Api',
    tags: ['Nest.js', 'Prisma', 'Jest', 'PostgreSQL'],
    description:
      'Books API is a backend application built using NestJS, leveraging Docker for containerized deployment and Prisma as the TypeORM-like ORM for PostgreSQL. It provides a robust API for managing books, including create, update, and delete operations, along with user authentication. The project follows best practices with Jest for unit testing and includes end-to-end (E2E) testing for reliability. Designed for scalability and maintainability, this API showcases my expertise in modern backend development with NestJS, Prisma, and Docker.',
  },

  {
    image: '/image/flag.png',
    url: 'https://flag-guessing-game-oy4f.vercel.app/',
    source: 'https://github.com/hhtetwei/Flag-Guessing-Game',
    duration: [0, 2],
    name: 'Flag-Guessing-Game',
    tags: ['Next.js', 'Chakra UI', 'Typescript'],
    description:
      'Flag Game is an interactive web application built with Next.js and TypeScript, designed to test and enhance user knowledge of country flags. It leverages a RESTful API as the backend data source, dynamically fetching flag data for each round. The application features a real-time timer for each round, ensuring a competitive and engaging experience, along with a score-tracking system that records and displays user performance. The project follows modern front-end best practices, utilizing Tailwind CSS and Chakra UI for responsive styling and efficient UI design',
  },
];

const skills = [
  { name: 'JavaScript', level: 90, image: '/image/javascript.png' },
  { name: 'React', level: 85, image: '/image/react.svg' },
  { name: 'Next Js', level: 85, image: '/image/next.png' },
  { name: 'Node Js', level: 80, image: '/image/node.svg' },
  { name: 'Nest Js', level: 65, image: '/image/nest.svg' },
  { name: 'TypeScript', level: 85, image: '/image/tsc.png' },
  { name: 'MongoDB', level: 85, image: '/image/mongodb.svg' },
  { name: 'SQL/Prisma', level: 55, image: '/image/prisma2.png' },
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
      <div className="relative md:hidden s:hidden xxs:hidden lg:hidden block overflow-hidden">
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
              Hi, I am Htet Htet Wai - Turning Ideas Into Code!
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
              <Link
                href="./files/HtetHtetWai-CvForm.pdf"
                passHref
                target="_blank"
              >
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

      <div className="w-full h-full top-20 relative md:block sm:block s:block xs:block lg:block hidden overflow-hidden">
        <div className="absolute md:-top-10 md:left-20 md:w-80 md:h-80 lg:w-80 lg:h-80 lg:top-12 lg:left-32 bg-boxAClr s:w-60 s:h-60 s:-top-5 s:left-5 z-0"></div>

        <div className="absolute md:top-52 md:right-24 md:w-80 md:h-80 lg:w-80 lg:h-80 lg:top-1/3 lg:mt-10 lg:right-32 bg-boxBClr s:w-60 s:h-60 s:right-3 s:top-24 z-0 "></div>
        <div className="md:w-[60%] s:w-[80%] lg:w-[60%] lg:translate-x-56 mt-20 md:translate-x-40  s:translate-x-11 z-50">
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
              efficiency, and dedication.Let&apos;s build something amazing
              together!
            </span>
          </div>

          <div className="flex justify-center mt-5 gap-2">
            <Link
              href="./files/HtetHtetWai-CvForm.pdf"
              passHref
              target="_blank"
            >
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

      <div className="hidden xl:block twoXL:block threeXL:block fourXL:block fiveXL:block">
        <div className="w-full justify-between flex mt-20 p-[1rem]">
          <div className="flex flex-col w-[45%]">
            <div className="w-full flex justify-center relative">
              <div className="bg-baseClr rounded-3xl">
                <Image
                  src="/image/lofi.webp"
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-xl w-full flex justify-end mt-4"
                />
              </div>

              <div className="absolute -left-3 top-36 transform -translate-y-28 threeXL:translate-x-36">
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

            <div className="relative rounded-3xl w-full flex justify-center">
              <Image
                src="/image/experience.gif"
                alt=""
                width={500}
                height={500}
                className="rounded-xl flex justify-end mt-20"
              />

              <div className="absolute left-3/4 top-2/3 transform translate-x-10 threeXL:-translate-x-10">
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

      <div className="">
        <div id="projects" className="w-full flex flex-col p-[2rem] mt-10">
          <span className="lg:text-3xl flex lg:justify-center text-3xl">
            Here&apos;s my recent work projects
          </span>

          <div className="flex mt-10 mb-10 ss:flex-col s:flex-col xs:flex-col">
            <div className="w-full grid xl:grid-cols-3 twoXL:grid-cols-3 lg:m-5 lg:grid lg:grid-cols-2 threeXL:grid-cols-3 fourXL:grid-cols-3 fiveXL:grid-cols-3 gap-5">
              {projects &&
                projects.map((p, idx) => {
                  return (
                    <Card
                      className="w-full lg:w-full p-5 border border-grey s:w-full sm:w-full md:w-full"
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
                        Project Duration -{' '}
                        {p.duration[0] > 0 ? `${p.duration[0]} weeks ` : ''}
                        {p.duration[1] > 0 ? `${p.duration[1]} days` : ''}
                      </div>
                      <div className="mt-3 text-justify">{p.description}</div>
                      <div className="mt-3">
                        <Link href={p.source} passHref target="_blank">
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
                      {p.url && (
                        <div className="mt-3">
                          <Link href={p.url} passHref target="_blank">
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
                      )}
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block twoXL:block threeXL:block fourXL:block fiveXL:block lg:block">
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
                      <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-md"></div>

                      <motion.div
                        initial={{ width: '0%' }}
                        animate={inView ? { width: '100%' } : { width: '0%' }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="absolute top-0 left-0 h-full w-full"
                      >
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            width: '100%',
                            backgroundColor: '#586069',
                            '& .MuiLinearProgress-bar': {
                              width: `${skill.level}%`,
                              backgroundColor: '#2d333b',
                            },
                          }}
                          className="rounded-md h-2"
                        />
                      </motion.div>

                      <span
                        className="absolute text-sm text-gray-500"
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
