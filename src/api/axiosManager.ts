import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const baseUrl = process.env.REACT_APP_API_ENDPOINT;

async function generateFinalUrl(path: string): Promise<string> {
    return  `${baseUrl}${path}`;
}

export async function axiosGet<ResponseType = unknown>(path: string, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<ResponseType>> {
    const finalUrl = await generateFinalUrl(path);
    return axios.get(finalUrl, config);
}

export async function axiosPut<DataType = unknown, ResponseType = DataType>(path: string, data?: DataType, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<ResponseType>> {
    const finalUrl = await generateFinalUrl(path);
    return axios.put(finalUrl, data, config);
}

export async function axiosPost<DataType = unknown, ResponseType = DataType>(path: string, data?: DataType, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<ResponseType>> {
    const finalUrl = await generateFinalUrl(path);
    return axios.post(finalUrl, data, config);
}

export async function axiosDelete<ResponseType = unknown>(path: string, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<ResponseType>> {
    const finalUrl = await generateFinalUrl(path);
    return axios.delete(finalUrl, config);
}