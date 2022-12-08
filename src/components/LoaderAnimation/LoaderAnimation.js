import Spinner from 'react-bootstrap/Spinner';
import './LoaderAnimation.css'
export default function LoaderAnimation() {
    return (
        <div className='container'>
            <div className='div-spinner'>
            <Spinner animation="border" variant="info" />

            </div>
        </div>
    )
}