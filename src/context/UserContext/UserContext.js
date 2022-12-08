import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {

    const [dataUser, setDataUser] = useState([])

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
    },[])

    return <UserContext.Provider value={{dataUser}}>
        {children}
    </UserContext.Provider>
}