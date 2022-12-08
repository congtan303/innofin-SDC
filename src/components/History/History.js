import { Link } from 'react-router-dom'
import './History.css'
import UnionTop from '../Union-top/UnionTop'
import HeaderHistory from '../HeaderHistory/HeaderHistory'
import FooterHistory from '../FooterHistory/FooterHistory'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { element } from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'

export default function History() {

    const [historyData, setHistoryData] = useState([]);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);

    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token

        }
    }

    useEffect(() => {
        if(page <= 3) {
            setLoader(true)
        } else {
            setLoader(false)
        }
        axios.get(`https://home-dev.innofin.vn/api/app/mobile/list-cash-collection/${page}`, config)
            .then((response) => {
                setHistoryData([...historyData, ...response.data.cashCollection])
                console.log([...historyData, ...response.data.cashCollection]);
                setLoader(false)
            })
    }, [page])


    const onscroll = (e) => {
        let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 50
        if (bottom) {
            setPage(page + 1)
            setLoader(false)

        }
        
    }
    
    // console.log(historyData);
    return (

        <div className='container'>
            <HeaderHistory />

            <div >
                <ul className='history-list' onScroll={onscroll} >
                    
                        { historyData.map((item) => (
                            <li className='history-list-description' key={item.id}>
                                <div className='history-list-title'>{item.storeName}</div>
                                <div className='history-list-address'>{item.storeAddress}</div>
                                <div className='history-list-money'>Số tiền đã thu: {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                                <div className='history-list-trading-code'>Mã giao dịch: {item.tripId.substring(0,6)}</div>
                                
                            </li>
                            
                        ))}
                        {loader && <LoaderAnimation />}
                  

                </ul>
            </div>

            <FooterHistory />


        </div>
    )
}