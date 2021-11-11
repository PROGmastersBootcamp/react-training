import {useState} from 'react';
import {clearForm, globalChangeHandler} from '../../utils/formUtils';
import {saveCategory} from '../../services/categoryService';

export const CategoryForm = (props) => {

    const [categoryForm, setCategoryForm] = useState({
        name: ''
    });

    const saveHandler = () => {
        saveCategory(categoryForm)
            .then(() => clearForm(categoryForm, setCategoryForm));
    };

    const handleKeypress = e => {
        if (e.charCode === 13) {
            saveHandler();
        }
    };

    return (
        <div className='container'>
            <div className='mb-3'>
                <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                >
                    Category name
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    name='name'
                    value={categoryForm.name}
                    onChange={globalChangeHandler(categoryForm, setCategoryForm)}
                    onKeyPress={handleKeypress}
                />
            </div>
            <button
                className='btn btn-success'
                onClick={saveHandler}
            >
                Push me
            </button>
        </div>
    );
};
