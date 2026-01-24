import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  value: DropdownOption;
  options: DropdownOption[];
  onChange: (option: DropdownOption) => void;
}

const Dropdown = ({ label, value, options, onChange }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm"
      >
        {value.label}
        <ChevronDown className="h-4 w-4 opacity-60" />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
