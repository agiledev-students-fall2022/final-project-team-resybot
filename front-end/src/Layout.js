import Header from './Header'
import Footer from './Footer'
import LoginSignUpHeader from './LoginSignUpHeader'
import {useLocation} from 'react-router-dom'

const Layout =({children}) =>{
    const location = useLocation();
    if(location.pathname === "/login")
    return (
        <>
        <LoginSignUpHeader/>
        <main>{children}</main>
        <Footer/>
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