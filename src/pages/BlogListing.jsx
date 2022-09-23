import './BlogListing.css'
import HeadBlogList from '../components/blogList/HeadBlogList';
import MainBlogList from '../components/blogList/MainBlogList';


const BlogListing = () => {
    return (
        <div className='blog-list container'>
            {/* HEAD */}
            <HeadBlogList />

            {/* MAIN */}
            <MainBlogList />
            {/* <div className="btn">
                <button>See More</button>
            </div> */}
        </div>
    );
}
 
export default BlogListing;