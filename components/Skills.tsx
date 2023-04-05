import { motion } from "framer-motion";
import { skills } from "./Skill";

function Skills() {
  return (
    <div className="flex flex-col items-center space-y-10 h-screen relative overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto  z-0">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        My Skills
      </h2>
      <div className="grid grid-cols-4 gap-4 ">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={skill.directionLeft ? { x: -1000 } : { x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
            className="mx-5 relative"
          >
            <motion.img
              src={skill.src}
              alt={skill.alt}
              whileHover={{ scale: 1.5, opacity: 0.2 }}
              className="w-20 h-20 rounded-full shadow-lg"
            />
            <motion.div
              className="absolute rounded-full top-0 left-0 w-full h-full flex items-center justify-center opacity-0 z-10"
              style={{ background: "rgba(255, 255, 255, 0.6)" }}
              whileHover={{ opacity: 1, scale: 1.2 }}
            >
              <span className="text-lg font-bold text-gray-900">
                {skill.proficiency}
              </span>
            </motion.div>
          </motion.div>
        ))}
        <div className="w-full absolute top-[30%] bg-[#1f4b99]/10 left-0 h-[500px] -skew-y-12"></div>
      </div>
    </div>
  );
}

export default Skills;
