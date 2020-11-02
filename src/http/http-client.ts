import axios, { AxiosInstance } from 'axios'

const DEBUG: boolean = process.env.REACT_APP_DEBUG as any as boolean;

abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    protected constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL
        });

        this.instance.interceptors.request.use(
            value => {
                DEBUG && console.log(value);
                return value;
            }, error => {
                DEBUG && console.log(error);
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            response => {
                DEBUG && console.log(response);
                return response;
            }, error => {
                DEBUG && console.log(error);
                return Promise.reject(error);
            }
        );
    }
}

export default HttpClient;
