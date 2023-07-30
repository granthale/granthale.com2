import Link from "next/link";
import React from "react";

const Socials = () => {
  const socials = {
    Twitter: "https://twitter.com/grant__hale",
    LinkedIn: "https://www.linkedin.com/in/grantrhale/",
    Github: "https://github.com/granthale",
    Email: "mailto:g@granthale.com",
  };
  return (
    <div className="flex flex-col sticky">
      {Object.keys(socials).map((key) => (
        <>
          <br />
          <Link
            className="text-gray hover:text-primary"
            key={key}
            href={socials[key]}
            target="_blank"
          >
            {key}
          </Link>
        </>
      ))}
    </div>
  );
};

export default Socials;
