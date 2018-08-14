import { getSession } from "./common";

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
    const session = getSession() || {};
    const requestData = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Authorization": session.token
        }
    };

    if (request) {
        requestData.body = JSON.stringify(request);
    }

    return fetch(url, requestData).then(handleResponse);
};

export const predict = imageUrl => fetchJson(`${apiUrl}/predict`, { input: imageUrl });

export const registerUser = user => fetchJson(`${apiUrl}/register`, user);

export const signIn = credentials => fetchJson(`${apiUrl}/signin`, credentials);

export const updateImage = id => fetchJson(`${apiUrl}/image`, { id }, "PUT");

export const getProfile = id => fetchJson(`${apiUrl}/profile/${id}`, null, "GET");

export const updateProfile = profile => fetchJson(`${apiUrl}/profile/${profile.id}`, { inputForm: profile }, "PUT");