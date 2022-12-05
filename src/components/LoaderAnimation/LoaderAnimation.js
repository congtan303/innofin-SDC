import { TailSpin } from 'react-loader-spinner'
export default function LoaderAnimation() {
    return (
        <div className='container'>
            <TailSpin
                height="40"
                width="40"
                radius="9"
                color="#2CD1F8"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    )
}