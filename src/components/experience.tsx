import Image from 'next/image';
import React from 'react';

export const Experience = () => {
  return (
    <>
      <div className="font-bold text-2xl text-baseClr flex justify-center">
        My Experience
      </div>
      <div className="relative rounded-3xl w-full flex justify-center mt-5">
        <Image
          src="/image/lofi.webp"
          alt=""
          width={500}
          height={500}
          className="rounded-xl bg-baseClr w-[80%] s:w-full mt-4"
        />
        <div className="absolute -left-3 top-36 s:top-64 transform -translate-y-28">
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

      <div className="relative rounded-3xl">
        <Image
          src="/image/experience.gif"
          alt=""
          width={500}
          height={500}
          className="rounded-xl w-full flex justify-end mt-20"
        />

        <div className="absolute left-3/4 top-2/3 s:left-2/4 transform translate-x-10">
          <div className="w-40 h-20 bg-buttontxtClr mb-4 rounded-lg">
            <div className="flex flex-col justify-center p-2">
              <span className="mt-2 font-bold flex gap-1">
                <div>
                  <Image src="/image/star.svg" alt="" width={20} height={20} />
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

      <div className="mt-5 text-lg text-justify">
        <div className="text-md font-bold">Full-Stack Software Engineer</div>
        <span className="mt-2">
          I designed and developed RESTful APIs using Node.js, Express.js, and
          NestJS for mobile and web applications. Specializing in front-end
          development with React.js and Next.js, I created SEO-focused landing
          pages and dynamic admin dashboards for call centers. My work included
          implementing OAuth authentication with Google, Facebook, and Firebase,
          as well as managing CI/CD pipelines to streamline development and
          deployment processes.
        </span>
      </div>
      <div className="mt-5 text-lg text-justify">
        <span>
          I migrated a legacy vanilla JavaScript application to React.js using
          the Remix framework, enhanced user experience by designing intuitive
          interfaces with Shadcn, and managed the &quot;User&quot; module for
          the admin dashboard. I also conducted software testing with Jest to
          ensure secure and reliable authentication workflows. Combining
          front-end expertise with strong communication skills, I consistently
          deliver seamless user experiences and efficient development processes.
        </span>
      </div>
      <div className="mt-5 text-lg text-justify">
        <span>
          I excel as both an independent contributor and a team player, using
          strong communication skills to simplify technical concepts and foster
          collaboration. As a fast learner and hard worker, I bring innovative
          solutions to projects and manage multiple tasks effectively,
          consistently delivering high-quality results on time. I’m proficient
          in a wide range of scripting languages and tools, always seeking to
          expand my web development knowledge and design skills.
        </span>
      </div>
    </>
  );
};
