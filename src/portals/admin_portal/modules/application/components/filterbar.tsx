import { useState } from "react";
import { Filter, Download } from "lucide-react";
import type { DropdownOption } from "./dropdown";
import Dropdown from "./dropdown";

const FiltersBar = ({
  status,
  onStatusChange,
}: {
  status: string;
  onStatusChange: (s: string) => void;
}) => {
  const statusOptions: DropdownOption[] = [
    { label: "All Statuses", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

  const programmeOptions: DropdownOption[] = [
    { label: "All Programmes", value: "all" },
    { label: "Bachelor", value: "bachelor" },
    { label: "Masters", value: "masters" },
    { label: "Doctorate", value: "doctorate" },
  ];

  const financeOptions: DropdownOption[] = [
    { label: "All Types", value: "all" },
    { label: "Self Sponsored", value: "self" },
    { label: "Scholarship", value: "scholarship" },
  ];

  const selectedStatusOption =
    statusOptions.find((o) => o.value === status) ?? statusOptions[0];
  const [programme, setProgramme] = useState(programmeOptions[0]);
  const [finance, setFinance] = useState(financeOptions[0]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 font-medium">
          <Filter className="h-4 w-4" />
          Filters
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Dropdown
          label="Status"
          value={selectedStatusOption}
          options={statusOptions}
          onChange={(opt) => onStatusChange(opt.value)}
        />
        <Dropdown
          label="Programme Level"
          value={programme}
          options={programmeOptions}
          onChange={setProgramme}
        />
        <Dropdown
          label="Financing Type"
          value={finance}
          options={financeOptions}
          onChange={setFinance}
        />

        <div>
          <label className="block text-sm font-medium mb-2">Date Range</label>
          <input
            type="date"
            className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm text-left"
            placeholder="Select date"
          />
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
