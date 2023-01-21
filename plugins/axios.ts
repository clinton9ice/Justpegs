import axios from "axios";
import {useStorage} from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
    let default_url = import.meta.env.VITE_API_BASE_URL as string | undefined;
    const Storage = useStorage('TK', "", localStorage)

    let instance = axios.create({
        baseURL: default_url,
        headers: {
            credentials: true,
        },
    });

    instance.defaults.headers.common['Authorization'] = `Bearer ${Storage.value}`;
    instance.defaults.headers.post["Accept"] = 'application/json, text/plain, */*'
    instance.defaults.headers.post["Content-Type"] = 'application/json'

    let accepted_header = ['https://api-staging.mycovergenius.com/v1/', 'localhost:3000']

    instance.interceptors.request.use(function (config) {
        config.headers["Authorization"] = Storage.value ? 'Bearer' + Storage.value : false
        config.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
        config.headers['Access-Control-Allow-Credentials'] = true;
        config.headers['Access-Control-Allow-Origin'] = accepted_header;
        config.headers["Access-Control-Allow-Headers"] = accepted_header;
        config.headers["Access-Control-Expose-Headers"] = accepted_header;
        return config
    }, (error) => {
        return Promise.reject(error);
    })

    return {
        provide: {axios: instance},
    }
})
