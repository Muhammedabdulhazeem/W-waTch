import './Category.css'
import HeadCategory from '../components/category/HeadCategory';
import MainCategory from '../components/category/MainCategory';

const Category = () => {
    return (
        <div className="container category">
            {/* HEAD */}
            <HeadCategory />
            {/* MAIN */}
            <MainCategory />
        </div>
    );
}
 
export default Category;