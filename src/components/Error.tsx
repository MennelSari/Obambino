import Error from "../assets/error.png";
import HeaderPublic from "./HeaderPublic";

const Error = () => {
  return (
    <div>
        <HeaderPublic />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src={Error} alt="Error" className="img-fluid" />
                </div>
            </div>
    </div>
  )
}

export default Error