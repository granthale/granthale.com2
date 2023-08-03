import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import React from "react";

interface Props {
  menu?: boolean;
}

const Socials = ({ menu }: Props) => {
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
  const classy = `hover:text-neon-green hover:scale-110 transform transition duration-500 ease-in-out m-2`;

  return (
    <div className="flex justify-end">
      {socials.map((social) => (
        <React.Fragment key={social.name}>
          <br />
          <button
            key={social.name}
            className={classy}
            onClick={() => window.open(social.link, "_blank")}
          >
            {social.icon}
          </button>
          <br />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Socials;
