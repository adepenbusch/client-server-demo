export const fetchHelper = async (endpoint: string, options: any = {}) => {
  const body =
    typeof options.body === 'string'
      ? options.body
      : JSON.stringify(options.body);

  const response = await fetch(endpoint, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
    body,
  });

  return response.json();
};
