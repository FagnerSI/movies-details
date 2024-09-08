import { createQueryParams } from "~/utils/createQueryParams";
import HttpClient from "./HttpClient";

const ENDPOINT = [process.env.REACT_APP_BASE_URL, process.env.REACT_APP_API_VERSION].join('/') || '';
const API_KEY = process.env.REACT_APP_API_KEY || '';

export const API_KEY_PARAMS = createQueryParams({
  api_key: API_KEY,
});

export const api = new HttpClient(ENDPOINT, API_KEY_PARAMS);