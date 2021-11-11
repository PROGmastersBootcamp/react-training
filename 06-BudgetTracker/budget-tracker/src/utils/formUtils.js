export const globalChangeHandler = (form, setForm) => {
    return (event) => {
        const updatedForm = {...form};
        const newInputValue = event.currentTarget.value;
        const currentInputName = event.currentTarget.name;

        updatedForm[currentInputName] = newInputValue;

        setForm(updatedForm);
    };
};

export const clearForm = (form, setForm) => {
    const updatedForm = {...form};
    const formKeys = Object.keys(form);
    formKeys.forEach(key => {
        updatedForm[key] = '';
    });
    setForm(updatedForm);

};
