import Header from './Header'
import Footer from './Footer'
import LoginSignUpHeader from './LoginSignUpHeader'
import {useLocation, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import './Layout.css'

const Layout =({children}) =>{
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
    if(localStorage.getItem('user') === null){
        localStorage.removeItem("resyUser")
    }
    if((location.pathname !== "/signup") && (localStorage.getItem('user') === null)){
        navigate("/login")
    }
    else if((location.pathname !== "/signup") && (localStorage.getItem('resyUser') === null)){
        navigate("/settings")
    }
    },[]) 
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