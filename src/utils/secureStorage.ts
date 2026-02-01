/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import SecureLS from "secure-ls";

const secureStorage = new SecureLS({ encodingType: "des" });

export const getSecureItem = (key: string) => {
  try {
    const item = secureStorage.get(key);
    return item || null;
  } catch (error) {
    console.warn(`Item '${key}' not found in secure storage`);
    return null;
  }
};

export const setSecureItem = (key: string, value: any) => {
  try {
    secureStorage.set(key, value);
  } catch (error) {
    console.error(`Error storing ${key} in secure storage:`, error);
  }
};

export const removeSecureItem = (key: string) => {
  try {
    secureStorage.remove(key);
  } catch (error) {
    console.error(`Error removing ${key} from secure storage:`, error);
  }
};

export const clearSecureStorage = () => {
  try {
    secureStorage.clear();
  } catch (error) {
    console.error("Error clearing secure storage:", error);
  }
};
