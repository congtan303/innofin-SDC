import { Link, useParams, useNavigate } from 'react-router-dom'
import './ListMoney.css'
import UnionTop from '../Union-top/UnionTop'
import FooterHistory from '../FooterHistory/FooterHistory'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
export default function ListMoney() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { id, lat, lng } = useParams()
    const [statement, setStateMent] = useState([])
    const [collect, setCollect] = useState({})
    const [isCheckBox, setIsCheckBox] = useState(false)
    
    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }
    // api hiển thị thông tin thu hộ
    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/app/mobile/start-collect', config)
            .then((response) => {
                setCollect(response.data)
            })

    }, [])
    // lấy danh sách bảng kê điện tử
    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/app/mobile/start-collect', config)
            .then((response) => {
                setStateMent(response.data.statement)
            })

    }, [])

    const onHandleSubmit = (e) => {
        navigate(`/image-verify/${id}/${lat}/${lng}`)

    }

    const changeColorButton = () => {
    }
    return (
        <div className='container'>
            <div className="header-history">
                <Link to={`/detail-start-collect/${id}/${lat}/${lng}`}>
                    <div className='header-history-previous-btn'>
                    </div>
                </Link>
                <div className="header-history-title">Bảng kê điện tử</div>
                <div className="header-history-notification">
                    <div className="header-history-notification-number">1</div>
                </div>
                <UnionTop />
            </div>

            {/* body */}
            <div className='list-money-content'>

                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="List-money-body">
                        <table className='list-money-table'>
                            <thead>
                                <tr>
                                    <th>Mệnh giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statement && statement.map((item, index) => (
                                    <tr key={index}>
                                        {item.quantity !== 0 ?
                                            <>
                                                <td className='denominations'>{item.denomination}đ</td>
                                                <td className='quantity'>{item.quantity}</td>
                                                <td className='total-cash'>{item.denomination * item.quantity}đ</td>
                                            </>
                                            : null}
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>

                                <tr>
                                    <td className='list-money-total'>Tổng cộng</td>
                                    <td></td>
                                    <td className='list-money-total-money'>{collect.total}đ</td>
                                </tr>
                            </tfoot>


                        </table>
                    </div >

                    <div className="confirm-money">
                        <input
                            type="checkbox"
                            value="enough-money"
                            id="money"
                            className="input-checkbox"
                            name='inputCheckbox'
                            {...register("inputCheckbox", { required: 'vui lòng bấm nút xác nhận ' })}
                            onClick={() => setIsCheckBox(!isCheckBox)}
                        />
                        <label htmlFor='money'> Tôi đã nhận đủ số tiền cần thu</label>
                        <div className='circle-checkbox'></div>
                        {errors.inputCheckbox && <span className='text-warning-msg '>{errors.inputCheckbox.message}</span>}
                    </div>

                    <button className={isCheckBox ? "btn-edit-table" : "btn-edit-table-active" } >Sửa bảng kê</button>

                    <button
                        type='submit'
                        className={isCheckBox ? "btn-complete-edit-active" : "btn-complete-edit" } 
                    >
                        {console.log(isCheckBox)}
                        Hoàn tất
                    </button>
                </form>
            </div>

            {/* footer */}
            <FooterHistory />

        </div>
    )
}