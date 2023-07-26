import React from "react";

const Activities = () => {
  const activities = [
    { activity: "thinking,", color: "text-white" },
    { activity: "learning,", color: "text-neon-green" },
    { activity: "coding,", color: "text-tealish" },
    { activity: "writing,", color: "text-white" },
    { activity: "podcasting", color: "text-white" },
  ];
  return (
    <>
      <div className="m-8 mt-20 box-border h-64 w-32 mt-8 p-4 bg-primary rounded-3xl flex flex-col justify-center items-left font-bold">
        {activities.map((activity) => (
          <p className={activity.color}>{activity.activity}</p>
        ))}
      </div>
    </>
  );
};

export default Activities;
