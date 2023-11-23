
import Ind from "../../assets/indus.png"
import Icon from "../../assets/image-icons.png"
import "../Header/Header.css"
const Header =()=>{

     return(

        <>
                <div className="poster-div">

                    <div className="poster">
                        <div>
                            <h2>Data-powered Solution</h2>
                            <h2 className="text-lower">for industrial Excellence </h2>
                        </div>

                        <div className="btn">
                            <button>Read More</button>
                        </div>
                        
                    </div>
                    
                    <div className="icon-div">
                        <img src={Icon} alt="icon" />
                    </div>
                </div>

   
        </>
     )
}

export default Header;