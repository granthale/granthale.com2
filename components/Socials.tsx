import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail} from "react-icons/ai";
import React from "react";

const Socials = () => {
  const icon_size = 30;
  const socials = [
    {
      name: "Twitter",
      link: "https://twitter.com/grant__hale",
      icon: <FaTwitter size={icon_size} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/grantrhale/",
      icon: <FaLinkedin size={icon_size} />,
    },
    {
      name: "Github",
      link: "https://github.com/granthale",
      icon: <FaGithub size={icon_size} />,
    },
    {
      name: "Email",
      link: "mailto:g@granthale.com",
      icon: <AiTwotoneMail size={icon_size} />,
    },
  ];
  return (
    <div className="flex justify-end">
      {Object.keys(socials).map((key) => (
        <>
          <br />
          <Link
            className="text-black hover:text-primary mr-2"
            key={key}
            href={socials[key].link}
            target="_blank"
          >
            {socials[key].icon}
          </Link>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default Socials;
