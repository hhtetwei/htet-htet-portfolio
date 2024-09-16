// import video from '../../public/image/videotest.mp4';
'use client';
import { useEffect, useState } from 'react';
import {
  animate,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import './globals.css';
import { Card, Icon } from '@mui/material';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

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
export default function Home() {
  const controls = useAnimation();
  const controlsTitle = useAnimation(); // Controls for "My Experience" title animation
  const controlsPara1 = useAnimation(); // Controls for first paragraph animation
  const controlsPara2 = useAnimation(); // Controls for second paragraph animation
  const controlsPara3 = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsFlipped(true);
      setShowTitle(true);
    } else {
      setIsFlipped(false);
      setShowTitle(false);
    }
  }, [controls, inView]);

  // const cursorVariants = {
  //   blinking: {
  //     opacity: [0, 0, 1, 1],
  //     transition: {
  //       duration: 1,
  //       repeat: Infinity,
  //       repeatDelay: 0,
  //       ease: 'linear',
  //       times: [0, 0.5, 0.5, 1],
  //     },
  //   },
  // };

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="relative xxs:hidden xs:hidden s:hidden ss:hidden overflow-hidden">
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
          <div className="w-[45%] mt-20 p-5">
            <span className="text-basetextClr text-2xl flex justify-center">
              Hello! This is Htet Htet Wai.
            </span>
            <span className="text-basetextClr text-lg flex justify-center text-justify ml-10 mt-5">
              I am a passionate Full-Stack Web Developer with a strong
              foundation in both front-end and back-end technologies. With solid
              experience in these areas, I excel in working within teams and
              possess strong communication skills. I am also multilingual,
              proficient in English, Chinese, and Burmese.
            </span>
            <span className="text-basetextClr text-lg flex justify-center text-justify ml-10 mt-5">
              If you’re looking for a developer who gets things done, I am the
              one you can trust. I deliver high-quality work and can be relied
              upon to handle tasks skillfully and efficiently.
            </span>

            <div className="flex justify-start ml-10 mt-5">
              <Link
                href="./files/Htet-Htet-Resume.pdf"
                passHref
                target="_blank"
              >
                <button className="bg-boxBClr w-32 p-2 rounded-full">
                  View My CV
                </button>
              </Link>
            </div>
          </div>

          <div className="w-[45%] absolute z-100 inset-0 bottom-0 left-1/2 ml-24">
            <img
              src="/image/hhw.jpg"
              alt="Your Image"
              className="w-[80%] h-[70%] mt-24 lg:mt-24 p-2 m-5"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-80 relative hidden s:block xs:block ss:block">
        {/* First Box */}
        <div className="bg-boxAClr w-[70%] md:w-4/5 xl:w-3/5 h-60 absolute "></div>

        {/* Second Box */}
        <div className="bg-boxBClr w-[60%] md:w-3/5 xl:w-2/5 h-52 s:h-60 md:h-60 ss:h-64 xl:h-80 absolute top-40 right-5 md:right-10 xl:right-20 z-20"></div>

        {/* Image Overlapping Both Boxes */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] xl:w-[50%] z-30">
          <img
            src="/image/hhw.jpg"
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="xxs:hidden xs:hidden s:hidden ss:hidden block p-[2rem]">
        <div className="w-full justify-between flex mt-20 p-[1rem]">
          <div className="w-[45%] flex justify-center relative">
            <div className="bg-baseClr rounded-3xl w-[70%]">
              <Image
                src="/image/lofi.webp"
                alt=""
                width={500}
                height={500}
                className="rounded-xl w-full flex justify-end mt-4"
              />
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

            <div className="absolute -right-5 top-2/3 transform translate-y-0">
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
                    1Y 5M
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex justify-start p-[1rem]">
            <div className="flex flex-col mr-10" id="myexp">
              <motion.div className="font-bold lg:text-3xl text-baseClr ">
                My Experience
              </motion.div>
              <div className="mt-5 lg:text-lg text-justify">
                <motion.span>
                  During my undergraduate studies, commencing in 2019, I
                  actively engaged in numerous projects, assignments, and
                  presentations. My professional journey took a significant step
                  forward in December 2023 when I secured an internship at
                  MyanCare Telemedicine.
                </motion.span>
              </div>
              <div className="mt-5 lg:text-lg text-justify">
                <span>
                  At MyanCare, I played a key role in developing the company's
                  landing page, managing servers, and primarily focusing on
                  front-end tasks. This experience was instrumental in shaping
                  my abilities and resilience, evident when I was promoted from
                  intern to junior web developer within three months.
                </span>
              </div>
              <div className="mt-5 lg:text-lg text-justify">
                <span>
                  I excel both as a team player and working independently,
                  leveraging strong communication skills to effectively
                  collaborate with colleagues. I take pride in my capacity to
                  explain technical concepts to team members and thrive in
                  environments where teamwork is valued.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xs:block xxs:block s:block ss:block">
        <div className="w-full flex flex-col mt-5 p-[1rem]">
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
          <div className="w-full flex justify-center relative">
            <div className="bg-baseClr rounded-3xl w-full h-full">
              <Image
                src="/image/lofi.webp"
                alt=""
                width={500}
                height={500}
                className="rounded-xl w-full flex justify-end"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-40 h-20 bg-buttontxtClr mb-4 rounded-lg mt-2 ">
              <div className="flex flex-col justify-center p-2">
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
                  <span className="text-grey">Experience</span>
                </span>
                <span className="font-bold text-xl flex justify-center text-textClr">
                  1Y 5M
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <span className="flex justify-center font-bold text-buttontxtClr">
              My Experiences
            </span>
            <span className="text-justify mt-3">
              During my undergraduate studies, commencing in 2019, I actively
              engaged in numerous projects, assignments, and presentations. My
              professional journey took a significant step forward in December
              2023 when I secured an internship at MyanCare Telemedicine.
            </span>

            <span className="text-justify mt-3">
              At MyanCare, I played a key role in developing the company's
              landing page, managing servers, and primarily focusing on
              front-end tasks. This experience was instrumental in shaping my
              abilities and resilience, evident when I was promoted from intern
              to junior web developer within three months.
            </span>

            <span className="text-justify mt-3">
              I excel both as a team player and working independently,
              leveraging strong communication skills to effectively collaborate
              with colleagues. I take pride in my capacity to explain technical
              concepts to team members and thrive in environments where teamwork
              is valued.
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col p-[2rem]">
          <span className="lg:mt-20 lg:text-3xl flex lg:justify-center text-3xl">
            Here are some additional projects I have completed, aside from my
            work at MyanCare
          </span>

          <div className="flex mt-10 mb-10 ss:flex-col s:flex-col xs:flex-col">
            <div className="w-full flex flex-wrap justify-around lg:m-5 gap-10">
              {projects &&
                projects.map((p, idx) => {
                  return (
                    <Card
                      className="w-[30%] p-5 border border-grey xs:w-full s:w-full ss:w-full"
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

      <div className="xxs:hidden xs:hidden s:hidden ss:hidden block">
        <div className="bg-buttontxtClr  flex flex-col">
          <div className="flex flex-col items-center mt-10 mb-10">
            <span className="flex justify-center lg:text-3xl text-textClr">
              <span className="text-boxBClr">My Skills,</span> I am striving to
              never stop learning and improving.
            </span>
            <motion.div
              ref={ref}
              className="w-64 h-32 bg-textClr rounded-lg shadow-md cursor-pointer relative mt-10"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{
                transformStyle: 'preserve-3d', // Ensure 3D space for proper rotation
              }}
            >
              <div className="absolute inset-0 flex justify-center items-center backface-hidden">
                <div className={`text-center  ${isFlipped ? 'hidden' : ''}`}>
                  {/* Front Side Content */}
                  <div className="flex flex-col items-center justify-center h-28">
                    <div className="">
                      <img
                        src="/image/monitor.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 mt-3"
                      />
                    </div>
                    <div className="text-buttontxtClr">Web Development</div>
                    <div className="text-buttontxtClr">JS-REACT-NODE</div>
                  </div>
                </div>

                <div
                  className={`text-center  ${!isFlipped ? 'hidden' : ''}`}
                  style={{
                    transform: 'rotateY(180deg)', // Flip back side content
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-28">
                    <div className="">
                      <img
                        src="/image/monitor.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 mt-3"
                      />
                    </div>
                    <div className="text-buttontxtClr">Web Development</div>
                    <div className="text-buttontxtClr">JS-REACT-NODE</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center gap-32 mt-10 mb-10 p-[2rem]">
            <div className="w-28 h-20">
              <div className="rounded-full flex justify-center">
                <Image
                  src="/image/js4.webp"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr p-3 w-20 h-20"
                />
              </div>
              <div className="mt-5 lg:text-3xl flex justify-center text-textClr">
                JavaScript
              </div>
            </div>
            <div className="w-28 h-20">
              <div className="rounded-full flex justify-center ">
                <Image
                  src="/image/next2.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr p-3 w-20 h-20"
                />
              </div>
              <div className="flex justify-center mt-5 lg:text-3xl text-textClr">
                Next JS
              </div>
            </div>
            <div className="w-32 h-20">
              <div className="rounded-full flex justify-center">
                <Image
                  src="/image/node.png"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="flex justify-center mt-5 lg:text-3xl text-textClr">
                Node JS
              </div>
            </div>
            <div className="w-28 h-20">
              <div className="rounded-full  flex justify-center">
                <Image
                  src="/image/react2.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="flex justify-center mt-5 lg:text-3xl text-textClr">
                React
              </div>
            </div>

            <div className="w-32 h-20">
              <div className="rounded-full  flex justify-center">
                <Image
                  src="/image/mongo.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="flex justify-center mt-5 lg:text-3xl text-textClr">
                MongoDB
              </div>
            </div>

            <div className="w-32 h-20">
              <div className="rounded-full flex justify-center">
                <Image
                  src="/image/github-logo.png"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="flex justify-center mt-5 lg:text-3xl text-textClr">
                GitHub
              </div>
            </div>

            <div className="mr-5">
              <div className="rounded-full bg-textClr w-20 h-20 flex justify-center items-center overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/image/ts2.png"
                    alt=""
                    width={80}
                    height={80}
                    className="absolute inset-0 bg-textClr p-4"
                    style={{ borderRadius: 'none' }}
                  />
                </div>
              </div>
              <div className="mt-5 lg:text-3xl lg:-mx-5 text-textClr">
                TypeScript
              </div>
            </div>
          </div>
          <div>
            <hr className="border-textClr" />
          </div>

          <div className="w-full flex flex-wrap justify-between p-[3rem]">
            <div className="w-[45%] text-textClr">
              <div>Developed By Htet Htet</div>
            </div>
            <div className="w-[45%] flex gap-20 justify-end text-textClr">
              <Link href={'http://linkedin.com/in/wei-wei-4238662b3'}>
                <div className="text-textClr flex gap-2">
                  <Image
                    src="/image/linkedin.svg"
                    alt="Linkedin"
                    width={25}
                    height={25}
                  />
                  <div className="mt-1">Linkedin</div>
                </div>
              </Link>
              <Link href={'https://t.me/@nabiweii'}>
                <div className="text-textClr flex gap-2">
                  <Image
                    src="/image/telegram.svg"
                    alt="Linkedin"
                    width={25}
                    height={25}
                  />
                  <div className="mt-1">Telegram</div>
                </div>
              </Link>
              <Link href={'https://github.com/hhtetwei'}>
                <div className="text-textClr flex gap-2">
                  <Image
                    src="/image/github.svg"
                    alt="Linkedin"
                    width={30}
                    height={30}
                  />
                  <div className="mt-1">Github</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xs:block xxs:block s:block ss:block">
        <div className="bg-baseClr p-3">
          <div className="flex justify-center">
            <span className="text-boxBClr">My Skill,</span>
            <span>I'm thriving to never stop learning</span>
          </div>

          <div className="flex justify-center mt-5 mb-5">
            <motion.div
              ref={ref}
              className="w-40 bg-textClr rounded-lg shadow-md cursor-pointer relative"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{
                transformStyle: 'preserve-3d', // Ensure 3D space for proper rotation
              }}
            >
              <div className="flex flex-col justify-center items-center backface-hidden p-3">
                <div className={`text-center  ${isFlipped ? 'hidden' : ''}`}>
                  <img
                    src="/image/monitor.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="w-8"
                  />
                  <div className="text-buttontxtClr">Web Development</div>
                  <div className="text-buttontxtClr">JS-REACT-NODE</div>
                </div>
              </div>

              <div
                className={`text-center mb-3 ${!isFlipped ? 'hidden' : ''}`}
                style={{
                  transform: 'rotateY(180deg)', // Flip back side content
                }}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="">
                    <img
                      src="/image/monitor.svg"
                      alt=""
                      width={10}
                      height={10}
                      className="w-8"
                    />
                  </div>
                  <div className="text-buttontxtClr">Web Development</div>
                  <div className="text-buttontxtClr">JS-REACT-NODE</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full h-full flex justify-center flex-wrap mt-10">
            {/* First Image and Text */}
            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-textClr p-3">
                <Image
                  src="/image/js4.webp"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="text-xl mt-2 text-textClr">JavaScript</div>
            </div>

            {/* Second Image and Text */}
            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-textClr p-3">
                <Image
                  src="/image/next2.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr p-3 w-20 h-20"
                />
              </div>
              <div className="text-xl mt-2 text-textClr">Next</div>
            </div>

            {/* Third Image and Text */}
            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-textClr p-3">
                <Image
                  src="/image/node.png"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="text-xl mt-2 text-textClr">Node JS</div>
            </div>

            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-textClr p-3">
                <Image
                  src="/image/react2.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="text-xl mt-2 text-textClr">React</div>
            </div>

            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-textClr p-3">
                <Image
                  src="/image/mongo.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="text-xl mt-2 text-textClr">MongoDB</div>
            </div>

            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-textClr p-3">
                <Image
                  src="/image/github-logo.png"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="text-xl mt-2 text-textClr">GitHub</div>
            </div>

            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-textClr p-3">
                <Image
                  src="/image/ts2.png"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full bg-textClr w-20 h-20 p-3"
                />
              </div>
              <div className="text-xl mt-2 text-textClr">TypeScript</div>
            </div>

            <div className="w-full mt-8">
              <hr className="border-textClr border-solid border-t-1 w-full" />
            </div>

            <div className="w-full h-full flex flex-wrap justify-between p-[1rem] mt-5 mb-5">
              <div className="w-[45%] text-textClr">
                <div>
                  Developed By Htet Htet <FavoriteBorderIcon />
                </div>
              </div>

              <div className="w-[45%] flex flex-col justify-end items-end">
                <Link href={'http://linkedin.com/in/wei-wei-4238662b3'}>
                  <div className="text-textClr flex gap-2 ">
                    <Image
                      src="/image/linkedin.svg"
                      alt="Linkedin"
                      width={25}
                      height={25}
                    />
                    <div className="mt-1">Linkedin</div>
                  </div>
                </Link>

                <Link href={'https://t.me/@nabiweii'}>
                  <div className="text-textClr flex gap-2 mt-2">
                    <Image
                      src="/image/telegram.svg"
                      alt="Linkedin"
                      width={25}
                      height={25}
                    />
                    <div className="mt-1">Telegram</div>
                  </div>
                </Link>

                <Link href={'https://github.com/hhtetwei'}>
                  <div className="text-textClr flex gap-2 mt-2 mr-3">
                    <Image
                      src="/image/github.svg"
                      alt="Linkedin"
                      width={30}
                      height={30}
                    />
                    <div className="mt-1">Github</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
