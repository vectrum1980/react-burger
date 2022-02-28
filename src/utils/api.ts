export interface RequestOptions {
    endpoint: string,
    params?: any,
    data?: any
}

export const getRequest = <T extends any = null>(options: RequestOptions): Promise<T> => {
    return performRequest<T>("GET", options);
};

export const postRequest = <T extends any>(options: RequestOptions): Promise<T> => {
    return performPostRequest<T>("POST", options);
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

const performPostRequest = async <T extends any = null>(method: string, options: RequestOptions): Promise<T> => {
    debugger
    const ingredients = options.data;
    console.log(JSON.stringify({ ingredients }))
    return fetch(options.endpoint, {
        method: method,
        body: JSON.stringify({ ingredients }),         
        headers: { 'Content-Type': 'application/json' }
    }).then(async response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json();
        return data.data as T;
    })
};

