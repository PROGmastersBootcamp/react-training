import axios from 'axios';

export const saveCategory = (categoryForm) => {
    return axios.post('/api/categories', categoryForm);
};

export const getCategories = () => {
    return axios.get('/api/categories')
        .then(response => response.data);
};
