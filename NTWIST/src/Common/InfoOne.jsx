
import "../Common/InfoOne.css"

const InfoOne = ({Heading,Details,Image}) => {

    return (

        <>

            <div className="main-conatiner">

                <div className="heading-con">
                    <h1>{Heading}</h1>

                    <div className="details-con">
                        <h5>{Details}</h5>
                    </div>

                    <div className="btn-con">
                        <button>Read More</button>
                    </div>
                </div>

                <div className="img-con">
                    <img src={Image} alt="" />
                </div>

            </div>

        </>
    )

}

export default InfoOne;