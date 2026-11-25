import { LucideIcon } from "lucide-react";

type StepIndicatorProps = {
  label: string;
  Icon: LucideIcon;
};

export const StepIndicator = ({ Icon, label }: StepIndicatorProps) => {
  return (
    <div className="flex flex-col items-center text-white">
      <span>{label}</span>
      <Icon/>
    </div>
  );
};
