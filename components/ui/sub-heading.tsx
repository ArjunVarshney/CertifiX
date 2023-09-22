interface SubHeadingProps {
  title: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ title }) => {
  return <div className="font-semibold text-xl">{title}</div>;
};

export default SubHeading;
