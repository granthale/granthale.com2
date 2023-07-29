import React from "react";
import Image from "next/image";

interface Props {
  home: boolean;
}

const SideBar = ({ home }: Props) => {
  return (
    <>
      <Image
        src="/images/boat.png"
        alt="boat"
        width={200}
        height={200}
        priority={true}
      />
    </>
  );
};

export default SideBar;
