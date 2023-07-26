import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import personalInfo from "../data/personal";

const Contract = () => {
  const form = useRef();

  const success = () => {
    toast(
      "The message was sent successfully! We will respond as soon as possible!"
    );
    form.current.reset();
  };

  const failed = () => toast("Message sending failed! Please try again!");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            success();
          } else {
            failed();
          }
        },
        (error) => {
          console.error(error);
          failed();
        }
      );
  };
  return (
    <section className="container mx-auto my-10 p-5" id="contract">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-3xl text-center my-4">Send Message</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              className="rounded-md text-xl w-full my-2 text-black"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="rounded-md text-xl w-full my-2 text-black"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              className="rounded-md text-xl w-full my-2 text-black"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="bg-slate-700 w-full p-3 text-xl font-medium text-center rounded-lg hover:bg-slate-800"
            />
          </form>
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-3xl text-center my-4">Contract Me</h1>
            <div className="text-2xl space-y-4">
              <p className="flex flex-col gap-5 items-center">
                <span className="relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full text-2xl">
                    <FaPhone></FaPhone>
                  </span>
                </span>
                {personalInfo.phone}
              </p>
              <p className="flex flex-col gap-5 items-center">
                <span className="relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full text-2xl">
                    <FaEnvelope></FaEnvelope>
                  </span>
                </span>
                <a href="mailto:mfarhad.dev@gmail.com">{personalInfo.email}</a>
              </p>
              <p className="flex flex-col gap-5 items-center">
                <span className="relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full text-2xl">
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                  </span>
                </span>
                {personalInfo.location}
              </p>
            </div>
            <div className="flex gap-12 text-3xl">
              <a
                href={personalInfo.github}
                className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] p-2 rounded-full animate-bounce"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                href={personalInfo.linkedin}
                className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] p-2 rounded-full animate-bounce"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                href={personalInfo.facebook}
                className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] p-2 rounded-full animate-bounce"
              >
                <FaFacebook></FaFacebook>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
