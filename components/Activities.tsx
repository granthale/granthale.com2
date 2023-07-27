import React from "react";

const Activities = () => {
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
          <p key={activity.activity} className={activity.color}>{activity.activity}</p>
        ))}
      </div>
    </>
  );
};

export default Activities;
