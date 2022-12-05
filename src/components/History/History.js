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
        fetchData(page)
    }, [])

    const fetchData = (page) => {
        fetch(`https://home-dev.innofin.vn/api/app/mobile/list-cash-collection/${page}`, {config} )
            .then((res) => {
                
                if (res.ok) {
                    return res.json() ;
                   
                } else {
                    return Promise.reject({
                        status: res.status,
                        statusText: res.statusText
                    });
                }
            })
            .then((res) => {
                console.log(res);
                if (page > 1) {
                    let resultAr = [...historyData, ...res.data.cashCollection];
                    setHistoryData(resultAr);
                } else {
                    setHistoryData(res.data.cashCollection);
                }
                setLoader(false);
            })
            .catch((err) => console.log("Error, with message:", err.statusText));
           
    }


    const loadMoreHandle = (e) => {
        console.log(e);
        let bottom =
            e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 50;
        if (bottom) {
            let page_ = page + 1;
            fetchData(page_);
            setLoader(true);
            setPage(page_);
        }
    }

    return (

        <div className='container'>
            <HeaderHistory />

            <div >
                <ul className='history-list' onScroll={loadMoreHandle}>

                    {historyData.map((item) => (
                        <li className='history-list-description' key={item.id}>
                            <div className='history-list-title'>{item.storeName}</div>
                            <div className='history-list-address'>{item.storeAddress}</div>
                            <div className='history-list-money'>Số tiền đã thu: {item.total}</div>
                            <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                            <div className='history-list-trading-code'>Mã giao dịch: {item.tripId}</div>
                        </li>
                    ))}




                </ul>
            </div>

            <FooterHistory />


        </div>
    )
}