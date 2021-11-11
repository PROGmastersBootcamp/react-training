import {CategoryList} from '../../components/CategoryList/CategoryList';
import {useEffect,useState} from 'react';
import {getCategories} from '../../services/categoryService';

export const CategoryListPage = props => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then(setCategories);
    }, []);

    return (
        <div>
            <CategoryList
                categories={categories}
            />
        </div>
    );
};
