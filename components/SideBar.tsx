import React from "react";
import Image from "next/image";

interface Props {
  home: boolean;
}

const SideBar = ({ home }: Props) => {
  const activities = [
    { activity: "learning,", color: "text-primary" },
    { activity: "thinking,", color: "text-neon-green" },
    { activity: "coding,", color: "text-reddish" },
    { activity: "writing,", color: "text-primary" },
    { activity: "podcasting", color: "text-primary" },
  ];
  return (
    <>
      <Image src="/images/boat.png" alt="journey" width="200" height="200" />
      {/* <div className="flex flex-col justify-center text-3xl items-left font-bold">
        {activities.map((activity) => (
          <p
            key={activity.activity}
            className={home ? activity.color : "text-gray"}
          >
            {activity.activity}
          </p>
        ))}
      </div> */}
    </>
  );
};

export default SideBar;
