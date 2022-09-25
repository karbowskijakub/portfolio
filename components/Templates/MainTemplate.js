
import Navbar from "../Navbar/Navbar"
export default function MainTemplate({children}){
    return(
        <div>
            <Navbar/>
            {children}

        </div>
    )
}