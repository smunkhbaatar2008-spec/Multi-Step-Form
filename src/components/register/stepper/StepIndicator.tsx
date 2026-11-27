import { cn } from "cn";
import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

type StepIndicatorProps = {
  label: string;
  step: number;
  number: number;
  Icon: LucideIcon;
};

export const StepIndicator = ({ Icon, label, number, step }: StepIndicatorProps) => {
  return (
    <div className="flex flex-col items-center gap-2.5 first:items-start last:items-end text-white">
      <span className={cn("relative z-10 grid size-8 place-items-center rounded-full border border-[#49375c] text-xs font-semibold", step > number ? "bg-purple-600" : "bg-purple-950")}>
        {step > number ? <Check size={15} /> : number}
      </span>
      <span className="flex gap-x-1.5 justify-center items-center">
        <Icon size={12} />
        <span>{label}</span>
      </span>
    </div>
  );
};
