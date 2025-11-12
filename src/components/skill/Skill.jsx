import { motion } from "framer-motion";
import skillsData from "./skills.json";

const Skills = () => {
  return (
    <section
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 
      rounded-2xl bg-linear-to-r from-green-100  via-pink-50 to-purple-200
      xl:p-18 lg:p-15 md:p-16 sm:p-10 p-4"
      id="skills"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900" >
          My Skills
        </h2>

        <div className="space-y-12">
          {skillsData.skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-linear-to-r from-blue-50 via-white to-pink-50  p-6 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
            >
              {/* Category Title */}
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold inline-block relative pb-2 text-gray-900">
                  {skillCategory.category}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"></span>
                </h3>
              </div>

              {/* Skill Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skillCategory.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-md rounded-xl p-3 
                      flex flex-col justify-center items-center border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <div className="text-5xl flex justify-center items-center mb-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
