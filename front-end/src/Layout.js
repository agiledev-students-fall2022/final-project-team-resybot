import Header from './Header'
import Footer from './Footer'
import LoginSignUpHeader from './LoginSignUpHeader'
import {useLocation} from 'react-router-dom'
import './Layout.css'

const Layout =({children}) =>{
    const location = useLocation();
    if(location.pathname === "/login" || location.pathname === "/signup")
    return (
        <>
        <LoginSignUpHeader/>
            <div className="mainControl">
                <main>{children}</main>
            </div>
        <Footer/>
        </>
    )
    else
    return (
        <>
        <Header/>
            <div className="mainControl">
                <main>{children}</main>
            </div>
        <Footer/>
        </>
    )
}

export default Layout;