import person from "/kaung_htet_zaw_full_stack_developer_profile.png";
import "./introduction.css";


const currentYear = new Date().getFullYear();
const experienceYear = 8 + (currentYear - 2025);

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-5 lg:pt-25.5 lg:mb-10.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Kaung Htet Zaw
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            <span className="bg-highlight">Full-Stack Developer</span> with <span className="bg-highlight">{experienceYear}+ years</span> of experience building and optimizing end-to-end web applications and APIs. 
            Expert in <span className="bg-highlight">Laravel</span>, <span className="bg-highlight">PHP</span>, and modern JavaScript frameworks, with a strong focus on clean, maintainable code, scalable architecture, and high-performance systems. 
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
               href="#contact"
            >
              Say Hello!
            </a>
          </p>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-536/600 relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
