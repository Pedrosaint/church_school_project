import AcademicDepartment from "../components/academic_department";
import AcademicSearch from "../components/academic_search";
import { useSearch } from "../../../../general/context/SearchContext";

const AcademicView = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedLevel,
    setSelectedLevel,
    selectedDept,
    setSelectedDept,
  } = useSearch();

  return (
    <section>
      <AcademicSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedDept={selectedDept}
        setSelectedDept={setSelectedDept}
      />
      <AcademicDepartment
        searchQuery={searchQuery}
        selectedLevel={selectedLevel}
        selectedDept={selectedDept}
      />
    </section>
  );
};

export default AcademicView;


