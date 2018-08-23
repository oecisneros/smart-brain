import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById('modal-root');

const render = (root, props) => component => {
    const Default = component.default || component;
    ReactDOM.render(<Default {...props} />, root);
};

export const createModal = (promise, props) =>
    promise.then(render(root, props));

export const alert = (text = "") =>
    import("../components/AppModal")
        .then(render(root, { children: text.toString() }))
        .catch(console.log);