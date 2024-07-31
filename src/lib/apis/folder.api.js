import { getTokenAndBaseUrl } from "$lib/components/dashboard/helper"

export const createFolder = async (payload) => {
    const headers = new Headers()
    const { token, baseUrl } = await getTokenAndBaseUrl()
    headers.set("Authorization", `Bearer ${token}`)
    const respone = await fetch(`${baseUrl}/folders`,
        { method: "POST", body: JSON.stringify(payload), headers: headers })
    return respone.json()
};

export const fetchFolders = async () => {
    const headers = new Headers()
    const { token, baseUrl } = await getTokenAndBaseUrl()
    headers.set("Authorization", `Bearer ${token}`)
    const respone = await fetch(`${baseUrl}/folders`,
        { method: "GET", headers: headers })
    return respone.json()
};
