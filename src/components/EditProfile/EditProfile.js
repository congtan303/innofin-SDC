import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { getMonth, getYear } from 'date-fns';
import { useForm } from 'react-hook-form'
import range from "lodash/range";
import './EditProfile.css'
import ReactDatePicker from 'react-datepicker';
import Union from '../Union/Union';

export default function EditProfile() {
    const navigate = useNavigate()

    const [dataUser, setDataUser] = useState({})

    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }

    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/mobile/my-profile/get-profile', config)
            .then((response) => {
                setDataUser(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // date picker
    const [DateOfBirth, setDateOfBirth] = useState(new Date());
    const [DateOfIdentity, setDateOfIdentity] = useState(new Date());
    const years = range(1950, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // submit EditProfile 
    const [cities, setCities] = useState([]);
    const [cityId, setCityId] = useState('');
    const [districts, setDistricts] = useState([]);
    const [districtId, setDistrictId] = useState('');
    const [wards, setWards] = useState([]);
    const [wardsId, setWardsId] = useState('');

    // Tỉnh/ Thành phố
    useEffect(() => {
        const getCities = async () => {
            const resCities = await fetch("https://home-dev.innofin.vn/api/app/cities");
            const resCi = await resCities.json()
            // console.log(resCi.items);
            setCities(resCi.items)
        }
        getCities()
    }, [])
    const handleCities = (e) => {
        const getCity = e.target.value;
        const findCityId = cities.find((c) => c.name === getCity)
        const getCityId = findCityId.id
        setCityId(getCityId)
    }

    // Quận/Huyện
    useEffect(() => {
        const getDistricts = async () => {
            const resDistricts = await fetch(`https://home-dev.innofin.vn/api/app/districts?CitieId=${cityId}`);
            const resDistrictsCount = await resDistricts.json()
            setDistricts(await resDistrictsCount.items)
        }
        getDistricts()
    }, [cityId])

    const handleDistricts = (e) => {
        const getDistrict = e.target.value;
        const findDistrictId = districts.find((c) => c.district.name === getDistrict)
        const districtId = findDistrictId.district.id;
        setDistrictId(districtId)
    }

    // Phường/Xã

    useEffect(() => {
        const getWards = async () => {
            const resWards = await fetch(`https://home-dev.innofin.vn/api/app/wards?CitieId=${cityId}&DistrictId=${districtId}`);
            const resWardCount = await resWards.json();
            setWards(await resWardCount.items)
        }

        getWards();
    }, [districtId])

    const handleWards = (e) => {
        const getWards = e.target.value;
        const findWards = wards.find((c) => c.ward.name === getWards)
        const wardsId = findWards.ward.id
        setWardsId(wardsId);
    }


    // Validate form
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (e) => {
        const params = {
            surName: e.surName,
            name: e.name,
            dateOfBirth: DateOfBirth.toISOString(),
            identityDate: DateOfIdentity.toISOString(),
            identityNumber: e.identityNumber,
            phoneNumber: e.phoneNumber,
            identityAddress: e.identityAddress,
            email: e.email,
            cityId: cityId,
            districtId: districtId,
            wardId: wardsId
        }

        axios({
            url: 'https://home-dev.innofin.vn/api/mobile/my-profile/update-profile',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            data: params
        })
            .then((response) => {
                console.log(response.data);
                setDataUser(response.data)
                navigate('/information-user')
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className="container">
            <Link to="/information-user">
                <button className="previous-button">
                    <i className="fal fa-chevron-left icon-back"></i>
                </button>
            </Link>
            <div className="title">
                Cập nhật thông tin
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='edit-profile-card'>
                    <div className='edit-profile-card-wrap'>
                        <div className='edit-profile-information'>
                            <div className='edit-profile-name'>
                                Họ:
                            </div>
                            <div className='edit-profile-content'>
                                <input
                                    type="text"
                                    name='surName'
                                    placeholder={dataUser.surname}
                                    className="input-edit-profile" {...register("surName", { required: 'Vui lòng nhập "Họ" của bạn' })}
                                />

                                {errors.surName && <span className='text-warning-msg '>{errors.surName.message}</span>}
                            </div>
                            
                        </div>
                        <div className='edit-profile-information'>
                            <div className='edit-profile-name'>
                                Tên:
                            </div>
                            <div className='edit-profile-content'>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder={dataUser.name}
                                    className="input-edit-profile" {...register("name", { required: 'Vui lòng nhập "Tên" của bạn' })}
                                />
                                
                                {errors.name && <span className='text-warning-msg '>{errors.name.message}</span>}

                            </div>
                            
                        </div>
                        <div className='edit-profile-information'>
                            <div className='edit-profile-name'>
                                Ngày sinh:
                            </div>

                            <div className='edit-profile-content'>
                                <ReactDatePicker
                                    renderCustomHeader={({
                                        date,
                                        changeYear,
                                        changeMonth,
                                        decreaseMonth,
                                        increaseMonth,
                                        prevMonthButtonDisabled,
                                        nextMonthButtonDisabled,
                                    }) => (
                                        <div
                                            style={{
                                                margin: 10,
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                                {"<"}
                                            </button>
                                            <select
                                                value={getYear(date)}
                                                onChange={({ target: { value } }) => changeYear(value)}
                                            >
                                                {years.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>

                                            <select
                                                value={months[getMonth(date)]}
                                                onChange={({ target: { value } }) =>
                                                    changeMonth(months.indexOf(value))
                                                }
                                            >
                                                {months.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>

                                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                                {">"}
                                            </button>
                                        </div>
                                    )}
                                    selected={DateOfBirth}
                                    onChange={(date) => setDateOfBirth(date)}
                                    dateFormat="dd/MM/yyyy"
                                    className="input-edit-profile"
                                />
                            </div>
                            
                        </div>
                        <div className='edit-profile-information'>
                            <div className='edit-profile-name'>
                                Số điện thoại:
                            </div>
                            <div className='edit-profile-content'>
                                <input
                                    type="text"
                                    name='phoneNumber'
                                    placeholder={dataUser.phoneNumber}
                                    className="input-edit-profile" {...register("phoneNumber", { required: 'Vui lòng nhập "số điện thoại"', minLength: 10 })}
                                />
                                
                                {errors.phoneNumber && <span className='text-warning-msg '>{errors.phoneNumber.message}</span>}
                            </div>
                            
                        </div>
                        <div className='edit-profile-information'>
                            <div className='edit-profile-name'>
                                Số CCCD:
                            </div>
                            <div className='edit-profile-content'>
                                <input
                                    type="number"
                                    name='identityNumber'
                                    placeholder={dataUser.identityNumber}
                                    className="input-edit-profile" {...register("identityNumber", { required: true, minLength: 12, maxLength: 12 })}
                                />
                                {Object.keys(errors).length !== 0 && (
                                    <>
                                        <span>
                                            {errors.identityNumber?.type === "required" && <span className='text-warning-msg'>Vui lòng nhập số CCCD</span>}
                                        </span>
                                        <span>
                                            {errors.identityNumber?.type === "minLength" && <span className='text-warning-msg'>số CCCD phải tối thiểu 12 ký tự</span>}

                                        </span>
                                        <span>
                                            {errors.identityNumber?.type === "maxLength" && <span className='text-warning-msg'>số CCCD phải tối đa 12 ký tự</span>}

                                        </span>
                                    </>


                                )}
                            </div>
                            
                        </div>
                        <div className='edit-profile-information'>
                            <div className='edit-profile-name'>
                                Ngày cấp:
                            </div>
                            <div className='edit-profile-content'>
                                <ReactDatePicker
                                    renderCustomHeader={({
                                        date,
                                        changeYear,
                                        changeMonth,
                                        decreaseMonth,
                                        increaseMonth,
                                        prevMonthButtonDisabled,
                                        nextMonthButtonDisabled,
                                    }) => (
                                        <div
                                            style={{
                                                margin: 10,
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                                {"<"}
                                            </button>
                                            <select
                                                value={getYear(date)}
                                                onChange={({ target: { value } }) => changeYear(value)}
                                            >
                                                {years.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>

                                            <select
                                                value={months[getMonth(date)]}
                                                onChange={({ target: { value } }) =>
                                                    changeMonth(months.indexOf(value))
                                                }
                                            >
                                                {months.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>

                                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                                {">"}
                                            </button>
                                        </div>
                                    )}
                                    selected={DateOfIdentity}
                                    onChange={(date) => setDateOfIdentity(date)}
                                    dateFormat="dd/MM/yyyy"
                                    className="input-edit-profile"
                                />
                            </div>
                            
                        </div>
                        <div className='edit-profile-information'>
                            <div className='edit-profile-name'>
                                Nơi cấp:
                            </div>
                            <div className='edit-profile-content'>
                                <input
                                    type="text"
                                    placeholder={dataUser.identityAddress}
                                    className="input-edit-profile"
                                    {...register("identityAddress", { required: 'Vui lòng nhập "Nơi cấp"' })}
                                />
                                {errors.identityAddress && <span className='text-warning-msg '>{errors.identityAddress.message}</span>}
                            </div>
                            
                        </div>
                        <div className='edit-profile-information'>
                            <div className='edit-profile-name'>
                                Email:
                            </div>
                            <div className='edit-profile-content'>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder={dataUser.email}
                                    className="input-edit-profile"
                                    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}
                                />
                                {Object.keys(errors).length !== 0 && (
                                    <>
                                        <span>
                                            {errors.email?.type === "required" && <span className='text-warning-msg'>Vui lòng nhập "email"</span>}
                                        </span>
                                        <span>
                                            {errors.email?.type === "pattern" && <span className='text-warning-msg'></span>}
                                        </span>
                                    </>


                                )}
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-5">
                            <label htmlFor='cities' className='edit-profile-name'>Tỉnh/Thành phố:</label>

                            <select name='cities' className='form-control p-2' onChange={(e) => handleCities(e)}>
                                <option value="abc">--Vui lòng chọn Tỉnh/Thành phố</option>
                                {
                                    cities.map((city, index) => (
                                        <option key={index} value={city.cities_name}>{city.name}</option>
                                    ))
                                }
                            </select>

                            <label htmlFor='districts' className='edit-profile-name'>Quận/Huyện</label>

                            <select name='districts' className='form-control p-2' onChange={(e) => handleDistricts(e)}>
                                <option value="abc">--Vui lòng chọn Quận/Huyện</option>
                                {
                                    districts.map((district, index) => (
                                        <option key={index} value={district.districts_id}>{district.district.name}</option>
                                    ))
                                }

                            </select>
                            <label htmlFor='wards' className='edit-profile-name'>Phường/Xã:</label>


                            <select name='wards' className='form-control p-2' onChange={(e) => handleWards(e)} >
                                <option value="abc">--Vui lòng chọn Phường/Xã</option>
                                {
                                    wards.map((ward, index) => (
                                        <option key={index} value={ward.ward_id}>{ward.ward.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div className='edit-profile-button'>
                    <button className='button-submit-edit' type='submit'>Cập nhật thông tin</button>

                </div>


            </form>
            <Union />

        </div>
    )
}