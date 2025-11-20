import {
  FaFacebookF,
  FaLinkedinIn,
  FaViber,
  FaGithub
} from "react-icons/fa";

const socialIcons = [
  { icon: <FaGithub />, link: "https://github.com/kaung199", newTab: true },
  { icon: <FaFacebookF />, link: "https://www.facebook.com/kaunghtetzaw.pg", newTab: true },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/kaung-htet-zaw-dev/", newTab: true },
  
  // ✅ Correct Viber deep link
  { icon: <FaViber />, link: "viber://chat?number=%2B959770904260", newTab: false }
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      key={index}
      target={item.newTab ? "_blank" : undefined}
      rel={item.newTab ? "noopener noreferrer" : undefined}
      className="text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md flex justify-center items-center transition-all duration-300"
    >
      <span className="text-xl">{item.icon}</span>
    </a>
  ));
};

export default SocialMedia;
