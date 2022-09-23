import './BlogDetail.css'
import editor from '../assets/images/editor.png'
import BlogDHead from '../components/blogDetail/BlogDHead';
import BlogDMain from '../components/blogDetail/BlogDMain';

const BlogDetail = () => {
    return (
        <div className="blog-detail container">
            <div className="editor">
                <div className="img">
                    <img src={editor} alt="editor" />
                </div>
                <span>Editorial staff</span>
            </div>

            {/* HEAD */}
            <BlogDHead />

            {/* MAIN */}
            <BlogDMain />
        </div>
    );
}
 
export default BlogDetail;