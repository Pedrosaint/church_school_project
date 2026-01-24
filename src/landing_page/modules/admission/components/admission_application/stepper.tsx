import { Check } from "lucide-react";

interface Step {
  num: number;
  label: string;
  completed: boolean;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="bg-[#0B2545] rounded-lg p-5 mb-8 font-inter">
      {/* Desktop: horizontal | Mobile: vertical */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {steps.map((step, idx) => {
          const isActive = currentStep === step.num;
          const isCompleted = step.num === 1 || step.completed;

          return (
            <div
              key={step.num}
              className="flex md:flex-1 md:flex-col md:items-center relative"
            >
              {/* Step Row for Mobile */}
              <div className="flex items-center gap-3 md:flex-col md:gap-0">
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center 
                  font-semibold transition-all duration-300
                  ${
                    isCompleted || isActive
                      ? "bg-[#D4A34A] text-[#0A2342]"
                      : "bg-[#FFFFFF] text-[#0A2342]"
                  }`}
                >
                  {isCompleted || isActive ? <Check size={20} /> : step.num}
                </div>

                {/* Label */}
                <span
                  className={`text-xs mt-0 md:mt-2 ${
                    isCompleted || isActive ? "text-[#D4A34A]" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Triangle (Only Desktop) */}
              {isActive && (
                <div
                  className="hidden md:block absolute -bottom-5 w-0 h-0 
                  border-l-8 border-r-8 border-b-8 
                  border-l-transparent border-r-transparent border-b-yellow-500"
                />
              )}

              {/* Connector */}
              {/* Desktop: horizontal | Mobile: vertical */}
              {idx < steps.length - 1 && (
                <div
                  className={`
                  absolute md:top-5 md:right-[-55%]
                  left-5 top-10 md:left-auto 
                  h-6 md:h-1 w-1 md:w-full 
                  ${isCompleted || isActive ? "bg-[#D4A34A]" : "bg-white"}
                `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
