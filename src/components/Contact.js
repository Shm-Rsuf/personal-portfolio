import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sendEmailHandler = (e) => {
    e.preventDefault();

    //emailJs integration

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
      >
        <div className=" form-control overflow-hidden">
          <input
            type="text"
            placeholder="write your name"
            name="fullname"
            required
            className="fullname bg-transparent py-8 px-16 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className=" form-control overflow-hidden">
          <input
            type="email"
            placeholder="write your email"
            name="email"
            required
            className="email bg-transparent py-8 px-16 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className=" form-control overflow-hidden">
          <textarea
            placeholder="write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent py-8 px-16 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full resize-none"
          />
        </div>
        <div className="form-control overflow-hidden">
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
