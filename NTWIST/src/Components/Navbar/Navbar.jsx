
import "../Navbar/Navbar.css"
import Logo from  "../../assets/favicon.png"

const Navbar=()=>{

       return(
        <>

                   <div className="nav-con">
                          
                          <div >
                            <div className="nav-heading" >
                               <img src={Logo} alt="logo"/>
                               <h1>NTWIST</h1>
                            </div>
                              
                          </div>

                           <div className="nav-name">

                                 <div>
                                     <h3 className="name"> Home</h3>
                                 </div>

                                 <div>
                                     <h3 > Industries</h3>
                                 </div>

                                 <div>
                                     <h3 > AI Software</h3>
                                 </div>

                                 <div>
                                     <h3> Blog</h3>
                                 </div>

                                 <div>
                                     <h3 >Contact Us</h3>
                                 </div>
                           </div>
                        
                   </div>

           

        </>
       )
}

export default Navbar;


