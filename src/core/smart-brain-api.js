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

const fetchJson = (url, request, method = "POST") => {
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

    return fetch(`${apiUrl}/${url}`, requestData).then(handleResponse);
};

export const predict = imageUrl => fetchJson("predict", { input: imageUrl });

export const registerUser = user => fetchJson("register", user);

export const signIn = credentials => fetchJson("signin", credentials);

export const updateImage = id => fetchJson("image", { id }, "PUT");

export const getProfile = id => fetchJson(`profile/${id}`, null, "GET");

export const updateProfile = profile => fetchJson(`profile/${profile.id}`, { inputForm: profile }, "PUT");