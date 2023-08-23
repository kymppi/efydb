import { getToken } from "./token";
import { env } from "$env/dynamic/public";

const fetchJson = async (path: string, options: any) => {
    let response = await fetch(new URL(path, env.PUBLIC_API_URL), {
        ...options,
        headers: {
            "Authorization": getToken(),
            "Content-Type": "application/json",
        }
    });
    return await response.json();
}

export const fetchFormJson = async (path: string, options: any) => {
    let response = await fetch(new URL(path, env.PUBLIC_API_URL), {
        ...options,
        headers: {
            "Authorization": getToken(),
        }
    });
    return await response.json();
}

export default fetchJson;