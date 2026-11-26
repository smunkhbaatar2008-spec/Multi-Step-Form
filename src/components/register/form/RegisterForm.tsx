"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Stepper } from "@/components/register/stepper/Stepper";
import { useState } from "react";
import { RegisterActions } from "./RegisterActions";

export const RegisterForm = () => {
  const [step, setStep] = useState<FormStep>(0);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextStep = step === 0 ? 1 : 2;
    setStep(nextStep);
  };

  return (
    <Card className="relative gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent py-0">
      <CardContent className="p-4 sm:p-6">
        <form className="w-103 flex flex-col" onSubmit={handleSubmit}>
          <Stepper step={step + 1} />

          <RegisterActions step={step} />
        </form>
      </CardContent>
    </Card>
  );
};
