interface Props {
  home?: boolean;
  children: React.ReactNode;
}

const MainContent = ({ home, children }: Props) => {
  return <div className="m-8 overflow-y-auto">{children}</div>;
};

export default MainContent;
