import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const addressData = [
  {
    icon: FaEnvelope,
    title: "Email",
    description: "kaunghtetzaw.khz9@gmail.com",
  },
  { icon: FaLocationDot, title: "Location", description: "Yangon, Myanmar" },
  { icon: FaPhone, title: "Call Me", description: "+95 9770904260" },
  { icon: FaPhone, title: "Call Me", description: "+95 9422268436" },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-6 md:p-10 lg:p-16 bg-white rounded-2xl shadow-[0_0_90px_9px_rgba(0,0,0,0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:flex-row lg:gap-10 xl:gap-20">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#132238] mb-3">
              Let’s <span className="text-picto-primary">discuss</span>
            </h2>
            <p className="text-sm md:text-base text-soft-dark mb-6 max-lg:text-center">
              I'm available for freelance and full-time opportunities. Drop me a
              line if you have a project you think I'd be a good fit for.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {addressData.map((item, index) => (
                <Address key={index} item={item} />
              ))}
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <SocialMedia />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 overflow-y-auto py-4">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
