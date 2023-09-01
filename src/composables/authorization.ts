export const ACCESS_TOKEN = 'token';

export const useAuthorization = createGlobalState(() =>
    useStorage<Nullable<string>>(ACCESS_TOKEN, null)
);


