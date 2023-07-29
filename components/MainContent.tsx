import styles from "../styles/Layout.module.css";
import SideBar from "./SideBar";

interface Props {
  home?: boolean;
  children: React.ReactNode;
}

const MainContent = ({ home, children }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="hidden md:block sticky m-8 flex-none">
        <SideBar home={home} />
      </div>
      <div className="m-8 overflow-y-auto">{children}</div>
    </div>
  );
};

export default MainContent;
