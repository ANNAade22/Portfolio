export const getPath = (path: string) => {
    const basePath = '';
    // Ensure we don't double slash if path starts with /
    return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};
