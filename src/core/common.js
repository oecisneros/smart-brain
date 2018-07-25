export const onPropertyChange = (obj, name) => ({ target }) => {
    const state = {};
    state[name || target.name] = target.value;
    obj.setState(state);
};