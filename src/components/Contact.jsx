import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="py-16 container mx-auto flex flex-col gap-4 md:gap-16">
        <h1 className="text-xl md:text-3xl font-extrabold">Contact</h1>
        <a
          className="w-fit hover:text-blue-500 transition-all"
          href="mailto:emnlc.dev@gmail.com"
        >
          emnlc.dev@gmail.com
        </a>
      </div>
    </Element>
  );
};

export default Contact;
