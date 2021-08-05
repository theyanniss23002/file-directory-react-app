import axios from 'axios';
import apiUrls from './api.urls';

const instance = axios.create({ timeout: '15000' });

const ApiMainMethods = {
    getContent: async () => {
        const response = await instance.get(apiUrls.getContent());
        return response?.data;
    }
};

export default ApiMainMethods;
