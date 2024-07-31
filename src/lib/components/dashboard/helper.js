export const getTokenAndBaseUrl = async () => {
    // const [token, baseUrl] = await Promise.all([
    //     localStorage.getItem("token"),
    //     localStorage.getItem("baseUrl")
    // ]);
    return { token: localStorage.getItem("token"), baseUrl:localStorage.getItem("baseUrl") };
}

