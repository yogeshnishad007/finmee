
import "../InfoTwo/InfoTwo.css"

const InfoTwo = ({ Heading, Details, Image }) => {

    return (

        <>

            <div className="main-div">

                <div className="heading-div">
                    <h1>{Heading}</h1>

                    <div className="details-div">
                        <h5>{Details}</h5>
                    </div>

                    <div className="btn-div">
                        <button>Read More</button>
                    </div>
                </div>

                <div className="img-div">
                    <img src={Image} alt="" />
                </div>

            </div>

        </>
    )

}

export default InfoTwo;