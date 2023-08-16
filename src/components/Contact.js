import { useRef } from "react";
import { useGsapInputReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const inputArr = [input1Ref, input2Ref, input3Ref, input4Ref];

  useGsapInputReveal(inputArr);

  const sendEmailHandler = (e) => {
    e.preventDefault();

    //emailJs integration
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("message sent");
        },
        (error) => {
          console.log({ error });
        }
      );

    //reset value
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"Let's Talk"} />

      <form
        onSubmit={sendEmailHandler}
        className="mt-40 grid grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className=" form-control overflow-hidden" ref={input1Ref}>
          <input
            type="text"
            placeholder="write your name"
            name="fullname"
            required
            className="fullname bg-transparent py-8 px-16 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className=" form-control overflow-hidden" ref={input2Ref}>
          <input
            type="email"
            placeholder="write your email"
            name="email"
            required
            className="email bg-transparent py-8 px-16 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className=" form-control overflow-hidden" ref={input3Ref}>
          <textarea
            placeholder="write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent py-8 px-16 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full resize-none"
          />
        </div>
        <div className="form-control overflow-hidden" ref={input4Ref}>
          <input
            type="submit"
            value="send message"
            className=" py-8 px-16 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full uppercase cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
