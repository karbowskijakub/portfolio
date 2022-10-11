
import Navbar from "../organisms/Navbar/Navbar"
import Footer from "../organisms/Footer/Footer"
export default function MainTemplate({children}){
    return(
        <div>
            <Navbar/>
            {children}
<Footer/>
        </div>
    )
}