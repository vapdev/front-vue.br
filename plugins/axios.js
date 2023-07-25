import axios from 'axios';
import { useAuth } from '@/stores/auth';

export default defineNuxtPlugin(() => {
    let token =  useAuth().tokenCookie

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token || ''
        }
    });
    
    return {
        provide: {
            axios: axiosInstance
        }
    }
});