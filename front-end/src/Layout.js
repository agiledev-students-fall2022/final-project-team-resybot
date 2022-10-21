import Header from './Header'
import Footer from './Footer'
import {useLocation} from 'react-router-dom';

const Layout =({children}) =>{
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
}

export default Layout;