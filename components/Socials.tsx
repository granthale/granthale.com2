import React from "react";

const Socials = () => {
  const socials = {
    Twitter: "https://twitter.com/grant__hale",
    LinkedIn: "https://www.linkedin.com/in/grantrhale/",
    Github: "https://github.com/granthale",
    Podcast: "https://podcasters.spotify.com/pod/show/surfacetensionpod",
  };
  return (
    <div className="flex flex-row justify-space-between">
        {Object.keys(socials).map((key) => (
          <a className="m-2 text-gray-300" key={key} href={socials[key]}>
            {key}
          </a>
        ))}
    </div>
  );
};

export default Socials;
