import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

const Layout =({children}) =>{
    const location = useLocation();
    if(location.pathname === "/Login")
    return (
        <>
        <main>{children}</main>
        </>
    )
    else
    return (
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;