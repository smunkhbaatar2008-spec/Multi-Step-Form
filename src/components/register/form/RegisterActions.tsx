import { Button } from "../../ui/button";

type RegisterActionsProps = {
  step: FormStep;
  onBack: () => void;
};

export const RegisterActions = ({ step, onBack }: RegisterActionsProps) => {
  return (
    <div>
      {step > 0 && <Button type="button" onClick={onBack} className="h-11">Back</Button>}

      <Button type="submit" className="h-11">Continue</Button>
    </div>
  );
};
