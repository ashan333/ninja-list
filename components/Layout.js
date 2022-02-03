import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="">
     <div className="content">
 <Navbar/>
 {children}
 
 <Footer/>
     </div>
     </div>
     );
}
 
export default Layout;