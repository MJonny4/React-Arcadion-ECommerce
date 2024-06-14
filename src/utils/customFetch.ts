import axios from "axios";

export const customFetch = axios.create({
    baseURL: `https://api.airtable.com/v0/${import.meta.env.VITE_BASE}`,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
})