interface Props {
  children: React.ReactNode;
}

const Unity = ({ children }: Props) => {
  return <div className="border rounded-lg bg-sky-100 p-4">{children}</div>;
};

export default Unity;
