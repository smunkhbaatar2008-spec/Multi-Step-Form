"use client";

import {  Card, CardContent } from "@/components/ui/card";
import { Stepper } from "@/components/register/stepper/Stepper";
import { useState } from "react";

export const RegisterForm = () => {
  const { step, setStep } = useState(0);

  return (
    <Card className="relative gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent py-0">
      <CardContent className="p-4 sm:p-6" >
        <Stepper step={step + 1} />
      </CardContent>
    </Card>
  );
};
