import Header from './Header'
import Footer from './Footer'
import LoginSignUpHeader from './LoginSignUpHeader'
import {useLocation} from 'react-router-dom'

const Layout =({children}) =>{
    const location = useLocation();
    if(location.pathname === "/login" || location.pathname === "/signup")
    return (
        <>
        <LoginSignUpHeader/>
        <main>{children}</main>
        </>
    )
    else
    return (
        <>
        <Header/>
        <main>{children}</main>
        </>
    )
}

export default Layout;