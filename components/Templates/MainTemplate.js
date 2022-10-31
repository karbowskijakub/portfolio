
import Navbar from "../organisms/Navbar/Navbar"
import Footer from "../organisms/Footer/Footer"
export default function MainTemplate({children,isOpen,setOpen}){
    return(
        <div>
            <Navbar isOpen={isOpen} setOpen={setOpen}/>
            {children}
<Footer/>
        </div>
    )
}