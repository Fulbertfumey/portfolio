import React from "react";
import { motion } from "framer-motion";
import { technicalSkills, softSkills } from "../data/skills";

const Competances = () => {
  return (
    <section
      id="competences"
      className="py-24 bg-white text-gray-900 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Compétences
        </motion.h2>

        {/* Hard Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {technicalSkills.map((group, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-600">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li key={i} className="text-gray-700 font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          className="bg-gray-900 text-white p-10 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Compétences Transversales
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Competances;
