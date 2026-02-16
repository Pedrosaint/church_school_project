import { createContext, useContext, useState, type ReactNode } from "react";

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedLevel: string;
    setSelectedLevel: (level: string) => void;
    selectedDept: string;
    setSelectedDept: (dept: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("All Levels");
    const [selectedDept, setSelectedDept] = useState("All Departments");

    return (
        <SearchContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                selectedLevel,
                setSelectedLevel,
                selectedDept,
                setSelectedDept,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
