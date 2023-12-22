interface Props {
  children: React.ReactNode;
}

const Unity = ({ children }: Props) => {
  return <div className="border rounded-md p-4 text-xl">{children}</div>;
};

export default Unity;
