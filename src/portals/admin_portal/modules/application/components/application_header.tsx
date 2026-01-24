import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


const ApplicationHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-2 px-3">
      <button 
      onClick={() => navigate("/dashboard/application")}
      className="text-sm text-gray-600 flex gap-2 items-center cursor-pointer"> <ArrowLeft /> Back to Applications</button>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Sarah Okonkwo</h1>
          <p className="text-sm text-gray-500">APP-2024-001</p>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
          Pending
        </span>
      </div>
    </div>
  );
};

export default ApplicationHeader;
