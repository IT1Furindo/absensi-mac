import axios from "axios";
const SERVER_URL = process.env.SERVER_ERP_URL;
const TOKEN = process.env.SERVER_ERP_TOKEN;

export const instance = axios.create({
  baseURL: SERVER_URL,

  headers: {
    "Content-Type": "application/json",
    token: TOKEN,
  },
});
