import React from "react";

interface Props {
  home: boolean;
}

const Activities = ({ home }: Props) => {
  const activities = [
    { activity: "thinking,", color: "text-primary" },
    { activity: "learning,", color: "text-neon-green" },
    { activity: "coding,", color: "text-tealish" },
    { activity: "writing,", color: "text-primary" },
    { activity: "podcasting", color: "text-primary" },
  ];
  return (
    <>
      <div className="flex flex-col justify-center text-3xl items-left font-bold">
        {activities.map((activity) => (
          <p
            key={activity.activity}
            className={home ? activity.color : "text-gray"}
          >
            {activity.activity}
          </p>
        ))}
      </div>
    </>
  );
};

export default Activities;
