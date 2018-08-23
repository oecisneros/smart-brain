/*eslint no-extend-native: ["error", { "exceptions": ["Function"] }]*/
Function.prototype.close = function () {
    const fn = this, args = Array.prototype.slice.call(arguments);
    return function () {
        return fn.apply(this, args);
    };
};

export const pipe = (...fns) => x =>
    fns.filter(fn => typeof fn === "function").reduce((acc, fn) => fn(acc), x);

export const onPropertyChange = (obj, name) => ({ target }) => {
    const state = {};
    state[name || target.name] = target.value;
    obj.setState(state);
};

export const clearSession = () =>
    sessionStorage.removeItem("session");

export const getSession = () => {
    const payload = sessionStorage.getItem("session");
    return payload ? JSON.parse(payload) : {};
};

export const saveSession = session => {
    const payload = JSON.stringify({
        id: session.id,
        token: session.token
    });
    sessionStorage.setItem("session", payload);
};