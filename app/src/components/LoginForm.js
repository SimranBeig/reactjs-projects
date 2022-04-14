import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import AllEvents from "./AllEvents";

export default function LoginForm() {
  const [Phone, setPhone] = useState("");

  let loginValid = {'login': false};

  const history = useHistory();

  const apiKey = 'SEdRYnN6ZFFFRjpuc0oySXQ0NWt5';
  const apiUrl = 'http://139.59.63.178:5454';

  async function login() {
    console.log("login");
    let item = { Phone };
    //working axios code
      axios({
        method: "POST",
        url: `http://139.59.63.178:5454/api/customer/iscustomerpresent`,
        headers: {
          "Content-Type": "application/json",
          Authorization: 'SEdRYnN6ZFFFRjpuc0oySXQ0NWt5',
          AppVersion: '1.0.0'
        },
        data: {Phone: Phone}
      })
      .then((res) => {
        console.log(res.data, "check");
        localStorage.setItem("data", JSON.stringify(res.data));
        loginValid.login = true
        if (loginValid.login === true){
            console.log(loginValid.login)
            history.push('/AllEvents')
        }
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