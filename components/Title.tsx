interface Props {
  color: string;
}

const Title = ({ color }: Props) => {
  const class_details = `text-${color} m-8 text-5xl font-bold flex-none`;
  return (
    <a href="/" className={`text-primary m-8 text-5xl font-bold flex-none`}>
      grant hale
    </a>
  );
};

export default Title;
