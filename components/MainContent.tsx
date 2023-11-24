interface Props {
  home?: boolean;
  children: React.ReactNode;
}

const MainContent = ({ home, children }: Props) => {
  return <div className="mt-8 mx-2">{children}</div>;
};

export default MainContent;
