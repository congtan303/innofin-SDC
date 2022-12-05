import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [dataCustomer, setDataCustomer] = useState([]);

  const access_token = localStorage.getItem("access_token");

  const config = {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://home-dev.innofin.vn/api/app/mobile/my-request-collection?cityId&districtId&wardId&merchantId&page=1",
        config
      )
      .then((response) => {
        setDataCustomer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AppContext.Provider value={{ dataCustomer }}>
      {children}
    </AppContext.Provider>
  );
};
