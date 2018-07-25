const apiUrl = "http://localhost:3001";

const handleResponse = response => {
    const promise = response.json();
    if (response.status !== 200) {
        return promise.then(error => {
            throw error;
        });
    }
    return promise;
};

export const fetchJson = (url, request, method = "POST") => {
    const body = {
        method: method,
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(request)
    };

    return fetch(url, body)
        .then(handleResponse);
};

export const predict = imageUrl => fetchJson(`${apiUrl}/predict`, { input: imageUrl });

export const updateProfile = id => fetchJson(`${apiUrl}/image`, { id }, "PUT")

export const registerUser = userInfo => fetchJson(`${apiUrl}/register`, userInfo);

export const signIn = credentials => fetchJson(`${apiUrl}/signin`, credentials);