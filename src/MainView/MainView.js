import './mainview.scss'
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Footer from '../footer/Footer';
import CategoriesSection from '../Categories/CategoriesSection';


const Mainview = () => {
    return (
        <>
        <Nav />
        <Banner />
        <CategoriesSection/>
        <Footer />
        </>
    )

} 

export default Mainview;