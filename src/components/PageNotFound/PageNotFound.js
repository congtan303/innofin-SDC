import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
    let navigate = useNavigate();
    const handleClickBtn = () => {
        navigate('/home-page')
    }
    return (
        <div className="container">
            <h4>This Page Isn't Available</h4>
            <h5>The link may be broken, or the page may have been removed. Check to see if the link
                you're trying to open connect.
            </h5>
            <button className="btn btn-primary" onClick={handleClickBtn}>Go to Homepage</button>
        </div>
    )
}
export default PageNotFound