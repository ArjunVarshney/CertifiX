import { Separator } from "./separator";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="py-2">
      <div className="px-2">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground pb-2">{description}</p>
      </div>
      <Separator />
    </div>
  );
};

export default Heading;
