import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LinearProgress from '@mui/material/LinearProgress';

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

const SkillBar = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <div className="bg-buttontxtClr flex flex-col">
      <div className="flex flex-col flex-wrap mt-10 mb-10">
        <span className="flex justify-center text-boxBClr text-2xl">
          My skills
        </span>
        <span className="flex justify-center">
          I am striving to never stop learning and improving
        </span>

        <div>
          <div ref={ref} className="w-full p-[2rem] m-5">
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
  );
};

export default SkillBar;
