import axios from "axios";

const API = import.meta.env.VITE_API_URL!;
const API_KEY = import.meta.env.VITE_API_KEY!;

export interface Email {
    name: string;
    email: string;
    message: string;
}

export async function sendEmail(email: Email) {
    const response = await axios.post(`${API}/api/v1`, email, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-KEY": API_KEY,
      },
    });

    return response.data;
}