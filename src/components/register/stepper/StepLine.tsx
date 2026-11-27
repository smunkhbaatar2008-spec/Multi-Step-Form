import { cn } from "cn";

type StepLineProps = {
  filled: boolean;
};

export const StepLine = ({ filled }: StepLineProps) => {
  return <div className={cn("flex-1 origin-left h-1 bg-purple-500 transition-transform duration-300 ", filled ? "scale-x-100" : "scale-x-0")} />;
};
