import styles from "./Navbar.module.css";

interface Props {
  className: any;
}

const Navbar = ({ className }: Props): JSX.Element => {
  return (
    <div className={`component ${className}`}>
      <div className="about">about</div>
      <img className="line" alt="Line" src="line-1.svg" />
      <div className="writing">writing</div>
      <img className="line" alt="Line" src="line-2.svg" />
      <div className="influences">influences</div>
    </div>
  );
};

export default Navbar;
