import './Faq.css'
import HeadFaq from '../components/faq/HeadFaq'
import GenQus from '../components/faq/GenQus'
import Ask from '../components/faq/Ask'


const Faq = () => {
    return (
        <div className='faq container'>
            {/* HEAD */}
            <HeadFaq />

            {/* GENERAL QUESTION */}
            <GenQus />

            {/* ASK */}
            <Ask />
        </div>
    );
}
 
export default Faq;