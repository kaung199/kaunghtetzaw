import React, { useEffect, useRef } from "react";

const data = [
  {
    title: "Senior Frontend Developer",
    company: "TechVision Inc.",
    date: "2022 – Present",
    desc:
      "Leading a team to create immersive web experiences with React and Three.js. Improved performance and cut load times by 40%."
  },
  {
    title: "Frontend Developer",
    company: "Digital Creations",
    date: "2020 – 2022",
    desc:
      "Developed interactive web apps for entertainment clients. Built custom WebGL components that increased engagement by 35%."
  },
  {
    title: "gg Frontend Developer",
    company: "gg Digital Creations",
    date: "2018 – 2020",
    desc:
      "Developed interactive web apps for entertainment clients. Built custom WebGL components that increased engagement by 35%."
  },
  {
    title: "tt Junior Web Developer",
    company: "tt WebCraft Studios",
    date: "2016 – 2018",
    desc:
      "Built responsive sites, learned modern web fundamentals, and contributed to open-source projects."
  }
];

export default function Experience() {
  const items = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-6");
            e.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-linear-to-br from-slate-50 via-white to-teal-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Work <span className="text-teal-600">Experience</span>
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve worked with.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-teal-300 to-teal-600 rounded" />
          {data.map((exp, i) => {
            const right = i % 2 === 1;
            return (
              <div key={i} className="relative mb-14">
                <div className="absolute md:left-1/2 md:ml-0.5 left-12 -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full shadow-md" />
                <div
                  ref={(el) => (items.current[i] = el)}
                  className={`transition-all duration-700 ease-out opacity-0 translate-y-6
                    md:w-5/12 w-full bg-white border border-slate-100 shadow-sm rounded-xl p-6
                    ${right ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"}`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {exp.title}
                      </h3>
                      <p className="text-teal-600 text-sm mt-1 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
    </section>
  );
}
