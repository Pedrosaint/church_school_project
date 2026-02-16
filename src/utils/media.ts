export const getMediaUrl = (path?: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;

    const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
    // Remove /api from the end if it exists. 
    // Most backends serve uploads from the root, not the /api prefix.
    const rootUrl = baseUrl.replace(/\/api$/, "");

    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${rootUrl}${normalizedPath}`;
};
