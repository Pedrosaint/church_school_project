import { useState } from "react";
import ApplicationsTable from "./application_table";
import FiltersBar from "./filterbar";

const AdminApplication = () => {
  const [status, setStatus] = useState<string>("all");

  return (
    <section className="space-y-6">
      <FiltersBar status={status} onStatusChange={setStatus} />
      <ApplicationsTable status={status} />
    </section>
  );
};

export default AdminApplication;
