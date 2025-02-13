import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import img from "./Image.png";

const Logout =   () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const [activeForm, setActiveForm] = useState("admin"); 
  const [isHoveredAdmin, setIsHoveredAdmin] = useState(false);
  const [isHoveredUser, setIsHoveredUser] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("adminAccounts")) localStorage.setItem("adminAccounts", JSON.stringify([]));
    if (!localStorage.getItem("userAccounts")) localStorage.setItem("userAccounts", JSON.stringify([]));
  }, []);

  const register = (type) => {
    setMessage("");  
    const data = type === "admin" ? adminData : userData;

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      setMessage("All fields are required!");
      return;
    }
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const key = type === "admin" ? "adminAccounts" : "userAccounts";
    let accounts = JSON.parse(localStorage.getItem(key)) || [];
    
    if (accounts.some((acc) => acc.email === data.email)) {
      setMessage(`${type === "admin" ? "Admin" : "User"} already registered! Click Sign In.`);
      return;
    }

    accounts.push(data);
    localStorage.setItem(key, JSON.stringify(accounts));
    setMessage("Registration successful! You can now sign in.");

    navigate(type === "admin" ? "/login" : "/loginuser");
  };

  const handleFormSwitch = (type) => {
    setMessage("");  
    setActiveForm(type);
  };

  const guestLogin = () => {
    navigate("/home");  // Ensure the route is correctly set in your Router
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h3 style={styles.header}>{activeForm === "admin" ? "ADMIN REGISTER ACCOUNT" : "USER REGISTER ACCOUNT"}</h3>
        
        <input type="text" placeholder="Name" style={styles.input} 
          onChange={(e) => activeForm === "admin" ? setAdminData({ ...adminData, name: e.target.value }) : setUserData({ ...userData, name: e.target.value })} />
        
        <input type="email" placeholder="Email..." style={styles.input} 
          onChange={(e) => activeForm === "admin" ? setAdminData({ ...adminData, email: e.target.value }) : setUserData({ ...userData, email: e.target.value })} />
        
        <input type="password" placeholder="Password" style={styles.input} 
          onChange={(e) => activeForm === "admin" ? setAdminData({ ...adminData, password: e.target.value }) : setUserData({ ...userData, password: e.target.value })} />
        
        <input type="password" placeholder="Confirm-password" style={styles.input} 
          onChange={(e) => activeForm === "admin" ? setAdminData({ ...adminData, confirmPassword: e.target.value }) : setUserData({ ...userData, confirmPassword: e.target.value })} />
        
        <button style={activeForm === "admin" ? (isHoveredAdmin ? styles.buttonHover : styles.button) : (isHoveredUser ? styles.buttonHover : styles.button)}
          onClick={() => register(activeForm)}
          onMouseEnter={() => activeForm === "admin" ? setIsHoveredAdmin(true) : setIsHoveredUser(true)}
          onMouseLeave={() => activeForm === "admin" ? setIsHoveredAdmin(false) : setIsHoveredUser(false)}
        >
          REGISTER
        </button>

        <div style={styles.formSwitchButtons}>
          <button style={styles.switchButton} onClick={() => handleFormSwitch("admin")}>Switch Admin</button>
          <button style={styles.switchButton} onClick={() => handleFormSwitch("user")}>Switch User</button>
        </div>

        <button style={styles.guestButton} onClick={guestLogin}>Guest Login</button>

        <p style={styles.signInText}>
          Already have an account?{" "}
          <span onClick={() => navigate(activeForm === "admin" ? "/login" : "/loginuser")} style={styles.link}>
            Sign In
          </span>
        </p>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    // backgroundImage: "linear-gradient(to bottom right, red, yellow)",
    backgroundImage: `url("http://localhost:3000/banking-image.avif")`,
  },
  container: {
    // backgroundColor: "#a84517",
    backgroundColor:"lightblue",
    borderRadius: "20px",
    padding: "30px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  header: {
    color: "white",
    fontSize: "20px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "85%",
    borderRadius: "10px",
    border: "none",
    height: "35px",
    backgroundColor: "white",
    outline: "none",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    width: "90%",
    height: "40px",
    backgroundColor: "#d5249a",
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    width: "90%",
    height: "40px",
    backgroundColor: "green",
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    transform: "scale(1.05)",
  },
  formSwitchButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  switchButton: {
    width: "48%",
    height: "40px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "green",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  guestButton: {
    width: "100%",
    height: "40px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  signInText: {
    marginTop: "15px",
    color: "black",
  },
  link: {
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  message: {
    color: "white",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Logout;
