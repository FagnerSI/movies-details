
export const createQueryParams = (params: Record<string, string>) => {
  const query = new URLSearchParams();

  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      query.append(key, params[key]);
    }
  });

  return query.toString();
};