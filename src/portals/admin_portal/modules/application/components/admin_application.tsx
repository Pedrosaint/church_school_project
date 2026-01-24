import ApplicationsTable from "./application_table";
import FiltersBar from "./filterbar";

const AdminApplication = () => {
  return (
    <section className="space-y-6">
      <FiltersBar />
      <ApplicationsTable />
    </section>
  );
}

export default AdminApplication;
