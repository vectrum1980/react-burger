export interface RequestOptions {
    endpoint: string,
    params?: any
}

export const getRequest = <T extends any = null>(options: RequestOptions): Promise<T> => {
    return performRequest("GET", options);
};

const performRequest = async <T extends any = null>(method: string, options: RequestOptions): Promise<T> => {
    return fetch(options.endpoint, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' }
    }).then(async response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json();
        return data.data as T;
    })
};

