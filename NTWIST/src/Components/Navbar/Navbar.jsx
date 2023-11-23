
import "../Navbar/Navbar.css"
import Logo from "../../assets/favicon.png"
import { useState } from "react";
const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <>

            <div className="nav-con">

                <div >
                    <div className="nav-heading" >
                        <img src={Logo} alt="logo" />
                        <h1>NTWIST</h1>
                    </div>

                </div>

                <div className="nav-name">

                    <div>
                        <h3> Home</h3>
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


                <div className="menu-icon" onClick={toggleDrawer}>  {drawerOpen ? '✕' : '☰'}</div>

                <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
                    <div className="close-icon" onClick={toggleDrawer}> ✕</div>
                    <h3>Home</h3>
                    <h3>Industries</h3>
                    <h3>AI Software</h3>
                    <h3>Blog</h3>
                    <h3>Contact Us</h3>
                </div>

            </div>



        </>
    )
}

export default Navbar;


