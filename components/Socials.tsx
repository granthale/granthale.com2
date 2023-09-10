import { FaTwitter, FaGithub, FaLinkedin, FaRss } from "react-icons/fa";
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
    {
      name: "RSS",
      link: "/rss.xml",
      icon: <FaRss size={icon_size} />,
    },
  ];
  const classy = `hover:text-neon-green hover:scale-110 transform transition duration-500 ease-in-out m-2`;

  return (
    <>
      <div className="flex justify-end mx-2">
        {socials.map((social) => (
          <React.Fragment key={social.name}>
            <br />
            <button
              key={social.name}
              className={`hover:text-neon-green hover:scale-110 transform transition duration-500 ease-in-out m-2 ${
                menu ? "text-white" : ""
              }`}
              onClick={() => {
                if (social.name !== "RSS") {
                  window.open(social.link, "_blank");
                } else {
                  window.location.href = social.link;
                }
              }}
            >
              {social.icon}
            </button>
            <br />
            <br />
          </React.Fragment>
        ))}
      </div>
      <br />
    </>
  );
};

export default Socials;
