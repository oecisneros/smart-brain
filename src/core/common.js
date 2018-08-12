import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById('modal-root');

export const onPropertyChange = (obj, name) => ({ target }) => {
    const state = {};
    state[name || target.name] = target.value;
    obj.setState(state);
};

export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const createModal = (promise) => {
    promise
        .then(x => x.default || x)
        .then(Modal => {
            ReactDOM.render(<Modal />, root);
        });
};