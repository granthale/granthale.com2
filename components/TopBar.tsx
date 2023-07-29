import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";
import Title from "./Title";

interface Props {
    home?: boolean;
    menuStatus: boolean;
    setMenuStatus: (menuStatus: boolean) => void;
}


const TopBar = ({home, menuStatus, setMenuStatus} : Props) => {
  return (
    <div className="sticky flex border-b-2 justify-between">
      <Title home={home} />
      <div className="hidden md:flex">
        <Navbar home={home} />
      </div>
      <div className="md:hidden">
        <MenuButton menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
        {menuStatus && <Menu />}
      </div>
    </div>
  );
}

export default TopBar