import React from "react";
import ReactDOM from "react-dom";

export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const clearSession = () =>
    sessionStorage.removeItem("session");
    
export const getSession = () => {
    const payload = sessionStorage.getItem("session");
    return payload ? JSON.parse(payload) : null;
};

export const saveSession = session => {
    const payload = JSON.stringify({
        id: session.id,
        token: session.token
    });
    sessionStorage.setItem("session", payload);
};

export const onPropertyChange = (obj, name) => ({ target }) => {
    const state = {};
    state[name || target.name] = target.value;
    obj.setState(state);
};

const root = document.getElementById('modal-root');

export const createModal = (promise, props) =>
    promise
        .then(x => x.default || x)
        .then(Modal => {
            ReactDOM.render(<Modal {...props} />, root);
        })
        .catch(alert);