import * as prod from '../assets/config/config.prod.json';
const config = prod;

export const environment = {
    production: config.production,
    fileUrl: config.fileUrl
};