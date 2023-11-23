import "../Footer/Footer.css"
import FooterImage from "../../assets/footer.png"
const Footer=()=>{

    return(
      
        <div className="container">
               
               <div className="footer-image">
                    <img src={FooterImage} alt="footer" />
               </div>

               <div className="footer-nav">
                     <h5>Home</h5>
                     <h5>About Us </h5>
                     <h5>Contact Us </h5>
                     <h5>Privacy Policy </h5>
                     <h5>Sitemap</h5>
               </div>

               <div className="footer-add">
                  <h5>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</h5>
               </div>
        </div>
      
    )
}

export default Footer