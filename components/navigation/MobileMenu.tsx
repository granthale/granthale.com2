import Socials from "../Socials";
import Pages from "./Pages";

const Menu = () => {
  return (
    <>
      <div className="fixed top-23 left-0 w-full h-full bg-primary bg-opacity-100">
        <div className="flex flex-col justify-between">
          <Pages></Pages>
          <div className="fixed bottom-0 right-0 m-12">
            <Socials menu></Socials>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
