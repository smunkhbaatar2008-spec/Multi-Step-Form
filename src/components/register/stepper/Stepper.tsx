import { StepLine } from "./StepLine";
import { StepIndicator } from "./StepIndicator";
import { STEPS } from "@/constants/Steps";

type StepperProps = {
  step: number;
};

export const Stepper = ({ step }: StepperProps) => {
  return (
    <div className="relative h-10 w-full">
      <div className="absolute top-5 flex bg-purple-700 h-0.5 w-full">
        <StepLine filled={step > 1} />
        <StepLine filled={step > 2} />
      </div>
      <div className="absolute inset-x-0 flex items-center justify-between">
        {STEPS.map(({ Icon, label }, index) => (
          <StepIndicator key={index} Icon={Icon} label={label} number={index + 1} step={step} />
        ))}
      </div>
    </div>
  );
};
