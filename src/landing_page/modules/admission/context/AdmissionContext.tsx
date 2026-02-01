import React, { createContext, useContext, useState } from "react";

interface AdmissionContextType {
  formData: Record<string, any>;
  updateFormData: (step: string, data: any) => void;
  getFormData: () => Record<string, any>;
  resetForm: () => void;
}

const AdmissionContext = createContext<AdmissionContextType | undefined>(
  undefined,
);

export const STORAGE_KEY = "admission_application";

export const AdmissionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const loadSaved = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          programmeInfo: parsed.programmeInfo ?? {},
          personalInfo: parsed.personalInfo ?? {},
          contactDetails: parsed.contactDetails ?? {},
          guardianInfo: parsed.guardianInfo ?? {},
          education: parsed.education ?? [],
          financialReference: parsed.financialReference ?? {},
        } as Record<string, any>;
      }
    } catch {
      // ignore
    }

    return {
      programmeInfo: {},
      personalInfo: {},
      contactDetails: {},
      guardianInfo: {},
      education: [],
      financialReference: {},
    } as Record<string, any>;
  };

  const [formData, setFormData] = useState<Record<string, any>>(loadSaved);

  const updateFormData = (step: string, data: any) => {
    setFormData((prev) => {
      const next = {
        ...prev,
        [step]: data,
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const getFormData = () => formData;

  const resetForm = () => {
    setFormData({
      programmeInfo: {},
      personalInfo: {},
      contactDetails: {},
      guardianInfo: {},
      education: [],
      financialReference: {},
    });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  // persist when entire formData changes (fallback for any direct set)
  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  return (
    <AdmissionContext.Provider
      value={{ formData, updateFormData, getFormData, resetForm }}
    >
      {children}
    </AdmissionContext.Provider>
  );
};

export const useAdmissionContext = () => {
  const context = useContext(AdmissionContext);
  if (!context) {
    throw new Error(
      "useAdmissionContext must be used within AdmissionProvider",
    );
  }
  return context;
};
