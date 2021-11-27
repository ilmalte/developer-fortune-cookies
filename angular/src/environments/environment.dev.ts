import * as dev from '../assets/config/config.dev.json';
const config = dev;

export const environment = {
    production: config.production,
    fileUrl: config.fileUrl
};