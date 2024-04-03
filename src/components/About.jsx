import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import { SectionWrapper } from "../hoc";
import { educations } from "../constants";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        My name is Siddharth Yadav, and I am a skilled software developer with
        experience in Web Development and Machine Learning. I possess expertise
        in tech stacks including JavaScript, ReactJS, C++, Node.js, Pandas,
        Matplotlib, and Seaborn. I am responsible, organized, and a problem
        solver. I excel in teamwork and am a quick learner. I am enthusiastic
        about the opportunity to contribute my skills and dedication to
        meaningful projects that push the boundaries of what technology can
        achieve.
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mt-5`}>Education</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[17px] max-w-4xl leading-[30px] text-bold"
      >
        <ul className="mt-3 list-disc ml-5 space-y-2">
          {educations.map((education, index) => (
            <li
              key={index}
              className="text-secondary text-[18px] pl-1 font-bold"
            >
              {education.institution}{" "}
              <p className="font-light text-secondary">
                {" "}
                {education.degree}{" "}
                <span className="font-bold">{education.result}</span>{" "}
              </p>
            </li>
          ))}
        </ul>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
