import HttpClient from "./HttpClient";

const ENDPOINT = [process.env.REACT_APP_BASE_URL, process.env.REACT_APP_API_VERSION].join('/') || '';

export const api = new HttpClient(ENDPOINT);