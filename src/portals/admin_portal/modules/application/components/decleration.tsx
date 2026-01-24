import { CheckCircle } from "lucide-react";

const Declaration = () => {
  return (
    <div className="flex items-center gap-3 pt-2 p-2 text-sm">
      <CheckCircle className="h-5 w-5 text-green-600" />
      <p>Applicant has declared all information to be true and accurate</p>
    </div>
  );
};

export default Declaration;
