import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { login } from "../server/Server";
const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {

    // }
  };

  useEffect(() => {
    const handleLogin = async () => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(user);
        const result = await login(
          user.email, 
          user.password
        );
        console.log(result);
       
        if (result.message === 'Login successfully') {
          alert('Логин прошел успешно!');
          
          //const loggedInUser = getUser();
          //setUser(loggedInUser);
          console.log(result)
          setUserState(result.user);
    
          navigate('/',{ replace: true });
        } else {
          alert(result.message);
        }
        // axios.post("http://localhost:9002/login", user).then((res) => {
        //   alert(res.data.message);
        //   setUserState(res.data.user);
        //   navigate("/", { replace: true });
        // });
      }
    };
    handleLogin();
  }, [formErrors]);
  return (
    <div className={loginstyle.container}>
      <div className={loginstyle.login}>
        <form>
          <h1>Login</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
          <p className={basestyle.error}>{formErrors.email}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className={basestyle.error}>{formErrors.password}</p>
          <button className={basestyle.button_common} onClick={loginHandler}>
            Login
          </button>
        </form>
        <NavLink to="/signup">Not yet registered? Register Now</NavLink>
      </div>
    </div>
  );
};

export default Login;
