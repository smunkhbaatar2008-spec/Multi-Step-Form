import { StepLine } from "./StepLine";
import { StepIndicator } from "./StepIndicator";
import { STEPS } from "@/constants/Steps";

type StepperProps = {
  step: number;
};

export const Stepper = ({ step }: StepperProps) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-x-4 top-4 flex h-0.5 bg-purple-900">
        <StepLine filled={step > 1} />
        <StepLine filled={step > 2} />
      </div>
      <div className="absolute inset-x-0 w-full flex items-center justify-between">
        {STEPS.map(({ Icon, label }, index) => (
          <StepIndicator key={index} Icon={Icon} label={label} number={index + 1} step={step} />
        ))}
      </div>
    </div>
  );
};
