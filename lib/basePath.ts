export const getPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
    // Ensure we don't double slash if path starts with /
    return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};
