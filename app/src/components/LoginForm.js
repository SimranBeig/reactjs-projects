import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AllEvents from "./AllEvents";

export default function LoginForm() {
  const [Phone, setPhone] = useState("");

  let loginValid = {'login': false};

  const navigate = useNavigate();

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  async function login() {
    console.log("login");
    // let token = apiKey;
    let item = { Phone };
    axios
      .post(`${apiUrl}/customer/iscustomerpresent`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
          AppVersion: "1.0.1",
          Accept: "application/json",
        },
        body: item,
      })
      .then((res) => {
        console.log(res.data.Details);
        localStorage.setItem("data", JSON.stringify(res.data));
        loginValid.login = true
        if (loginValid.login === true){
            console.log(loginValid.login)
            if(localStorage.getItem('data')){
                console.log('data')
                return <AllEvents/>
            }
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container my-3" style={{ width: "30%" }}>
      <div className="container my-3">
        <div className="mb-3 row my-3">
          <h1>LOGIN FORM</h1>
          <div className="col-sm-10">
            <label htmlFor="phone" className="col-sm-2 col-form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone Number"
            />
          </div>
        </div>
        <button className="btn btn-dark" onClick={login}>
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
}
