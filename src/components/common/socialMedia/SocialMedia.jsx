import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const socialIcons = [
  { icon: <FaFacebookF />, link: "#!" },
  { icon: <FaDribbble />, link: "#!" },
  { icon: <FaInstagram />, link: "#!" },
  { icon: <FaLinkedinIn />, link: "#!" },
  { icon: <FaBehance />, link: "#!" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      key={index}
      className="text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md flex justify-center items-center transition-all duration-300"
    >
      <span className="text-xl">{item.icon}</span>
    </a>
  ));
};

export default SocialMedia;
