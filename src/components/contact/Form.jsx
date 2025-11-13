import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // success/error message
  const [sending, setSending] = useState(false); // sending state

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_s0y09vb",
        "template_2felxwn",
        form.current,
        "gGE9Ko7f16PH6OlhF"
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setSending(false);
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send email: " + error.text);
          setSending(false);
        }
      );
  };

  const commonClass =
    "input input-lg border-0 border-b-2 focus:outline-none placeholder:text-gray-400 focus:border-picto-primary w-full rounded-none px-0 py-2 transition-all duration-300";

  return (
    <div>
      <p className="text-sm md:text-base text-soft-dark mb-4 text-center md:text-left">
        I’m always excited to <span className="font-semibold text-picto-primary">connect</span>! 
        Let’s discuss opportunities, collaborations, or innovative projects together.
      </p>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name*" className={commonClass} required />
        <input type="email" name="email" placeholder="Email*" className={commonClass} required />
        <input type="text" name="title" placeholder="Subject*" className={commonClass} required />
        <input type="text" name="time" placeholder="Location" className={commonClass} />
        <textarea name="message" placeholder="Message*" className={commonClass} rows={5} required />

        <button
          type="submit"
          className="btn btn-primary gap-2 w-fit mx-auto lg:mx-0 px-5 py-2 rounded-md font-semibold hover:scale-105 transition-transform duration-300"
          disabled={sending}
        >
          {sending ? "Sending..." : "Submit"}
        </button>
      </form>

      {status && (
        <p className={`mt-2 text-sm ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default Form;
