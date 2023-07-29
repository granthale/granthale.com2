import styles from "../styles/Layout.module.css";
import SideBar from "./SideBar";

interface Props {
    home?: boolean;
    children: React.ReactNode;
}

const MainContent = ({home, children} : Props) => {
  return (
    <div className={`${styles.container}flex flex-initial`}>
      <div className="hidden md:block sticky m-8">
        <SideBar home={home} />
      </div>
      <div className="m-8 overflow-y-auto" style={{ maxHeight: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default MainContent;
