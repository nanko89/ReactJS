const request = async (method, url, data) => {
    try {
        let buildRequest;

        if (method === "GET") {
            buildRequest = fetch(url);
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
        }

        const response = await buildRequest;

        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
