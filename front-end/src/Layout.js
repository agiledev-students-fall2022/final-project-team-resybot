import Header from './Header'
import Footer from './Footer'

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