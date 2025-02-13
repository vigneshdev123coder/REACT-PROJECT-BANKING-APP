// import React, { useState ,useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import img from "./Image.png";

// const Logout =  () => {
//   const navigate = useNavigate();
//   const [adminData, setAdminData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
//   const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
//   const [message, setMessage] = useState("");
//   const [activeForm, setActiveForm] = useState("admin"); 
//   const [isHoveredAdmin, setIsHoveredAdmin] = useState(false);
//   const [isHoveredUser, setIsHoveredUser] = useState(false);

//   useEffect(() => {
//     if (!localStorage.getItem("adminAccounts")) localStorage.setItem("adminAccounts", JSON.stringify([]));
//     if (!localStorage.getItem("userAccounts")) localStorage.setItem("userAccounts", JSON.stringify([]));
//   }, []);

//   const register = (type) => {
//     setMessage("");  
//     const data = type === "admin" ? adminData : userData;

//     if (data.name || data.email || data.password || data.confirmPassword) {
//       if (!data.name || !data.email || !data.password || !data.confirmPassword) {
//         setMessage("All fields are required!");
//         return;
//       }
//       if (data.password !== data.confirmPassword) {
//         setMessage("Passwords do not match!");
//         return;
//       }

//       const key = type === "admin" ? "adminAccounts" : "userAccounts";
//       let accounts = JSON.parse(localStorage.getItem(key)) || [];
//       const existingAccount = accounts.find((acc) => acc.email === data.email);

//       if (existingAccount) {
//         setMessage(`${type === "admin" ? "Admin" : "User"} already registered! Click Sign In.`);
//         return;
//       }

//       accounts.push(data);
//       localStorage.setItem(key, JSON.stringify(accounts));
//       setMessage("Registration successful! You can now sign in.");
//       localStorage.setItem(`${type}Registered`, "true");

     
//       if (type === "admin") {
//         navigate("/login");  
//       } else {
//         navigate("/loginuser");  
//       }
//     } else {
//       setMessage("Please enter the registration details.");
//     }
//   };

//   const handleFormSwitch = (type) => {
//     setMessage("");  
//     if (type === "user") {
//       setActiveForm("user");
//     } else {
//       setActiveForm("admin");
//     }
//   };

//   const handleMouseEnterAdmin = () => setIsHoveredAdmin(true);
//   const handleMouseLeaveAdmin = () => setIsHoveredAdmin(false);

//   const handleMouseEnterUser = () => setIsHoveredUser(true);
//   const handleMouseLeaveUser = () => setIsHoveredUser(false);

//   return (
//     <div style={styles.firstheader}>
//       <div style={styles.wrapper}>
//         {/* Admin Form */}
//         {activeForm === "admin" && (
//           <div style={styles.container}>
//             <div style={styles.user}>
//               <h3 style={styles.header}> ADMIN REGISTER ACCOUNT</h3>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 style={styles.input}
//                 onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
//               />
//               <input
//                 type="email"
//                 placeholder="Email..."
//                 style={styles.input}
//                 onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 style={styles.input}
//                 onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm-password"
//                 style={styles.input}
//                 onChange={(e) => setAdminData({ ...adminData, confirmPassword: e.target.value })}
//               />
//               <button
//                 style={isHoveredAdmin ? styles.buttonHover : styles.button}
//                 onClick={() => register("admin")}
//                 onMouseEnter={handleMouseEnterAdmin}
//                 onMouseLeave={handleMouseLeaveAdmin}
//               >
//                 REGISTER
//               </button>
//               <div style={styles.formSwitchButtons}>
//                 <button
//                   style={styles.dp}
//                   onClick={() => handleFormSwitch("admin")} 
//                 >
//                   Switch Admin
//                 </button>
//                 <button
//                   style={styles.dp}
//                   onClick={() => handleFormSwitch("user")} 
//                 >
//                   Switch User
//                 </button>
//               </div>
//               <p style={styles.signInText}>
//                 Already have an account?{" "}
//                 <span onClick={() => navigate("/login")} style={styles.link}>
//                   Sign In
//                 </span>
//               </p>
//               {message && <p style={styles.message}>{message}</p>}
//             </div>
//           </div>
//         )}

//         {/* User Form */}
//         {activeForm === "user" && (
//           <div style={styles.container}>
//             <div style={styles.user}>
//               <h3 style={styles.header}> USER REGISTER ACCOUNT</h3>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 style={styles.input}
//                 onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//               />
//               <input
//                 type="email"
//                 placeholder="Email..."
//                 style={styles.input}
//                 onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 style={styles.input}
//                 onChange={(e) => setUserData({ ...userData, password: e.target.value })}
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm-password"
//                 style={styles.input}
//                 onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
//               />
//               <button
//                 style={isHoveredUser ? styles.buttonHover : styles.button}
//                 onClick={() => register("user")}
//                 onMouseEnter={handleMouseEnterUser}
//                 onMouseLeave={handleMouseLeaveUser}
//               >
//                 REGISTER
//               </button>
//               <div style={styles.formSwitchButtons}>
//                 <button
//                   style={styles.dp}
//                   onClick={() => handleFormSwitch("admin")} 
//                 >
//                   Switch Admin
//                 </button>
//                 <button
//                   style={styles.dp }
//                   onClick={() => handleFormSwitch("user")}
//                 >
//                   Switch User
//                 </button>
//               </div>
//               <p style={styles.signInText}>
//                 Already have an account?{" "}
//                 <span onClick={() => navigate("/loginuser")} style={styles.link}>
//                   Sign In
//                 </span>
//               </p>
//               {message && <p style={styles.message}>{message}</p>}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "50px",
//     padding: "20px",
//     minHeight: "100vh",
//     backgroundImage: "linear-gradient(to bottom right, red, yellow)",
//   },
//   formSwitchButtons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     fontSize: "18px",
//     fontWeight: "bold",
//     color: "white",
//   },
//   dp: {
//     width: "100%",
//     height: "40px",
//     cursor: "pointer",
//     borderRadius: "10px",
//     border: "none",
//     backgroundColor: "green",
//     color: "white",
//     font:"normal",
//     fontSize: "17px",
//   },
//   container: {
//     backgroundColor: "#a84517",
//     borderRadius: "30px",
//     padding: "20px",
//     width: "350px",
//     textAlign: "center",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   user: {
//     display: "grid",
//     rowGap: "20px",
//   },
//   header: {
//     color: "white",
//     textAlign: "center",
//     fontSize: "20px",
//     fontFamily: "'Arial', sans-serif",
//   },
//   input: {
//     width: "80%",
//     borderRadius: "10px",
//     border: "none",
//     height: "20px",
//     backgroundColor: "white",
//     outline: "none",
//     padding: "10px",
//     margin: "auto",
//   },
//   button: {
//     width: "42%",
//     height: "40px",
//     backgroundColor: "#d5249a",
//     borderRadius: "10px",
//     border: "none",
//     fontSize: "18px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     marginLeft: "93px",
//     textAlign: "center",
//     transition: "background-color 0.3s, transform 0.2s",
//   },
//   buttonHover: {
//     width: "40%",
//     height: "40px",
//     backgroundColor: "green",
//     borderRadius: "10px",
//     border: "none",
//     fontSize: "18px",
//     cursor: "pointer",
//     marginLeft: "95px",
//     transform: "scale(1.05)",
//   },
//   signInText: {
//     paddingLeft: "30px",
//     color: "white",
//     fontFamily: "'Arial', sans-serif",
//   },
//   link: {
//     cursor: "pointer",
//     textDecoration: "underline",
//     fontWeight: "bold",
//   },
//   message: {
//     color: "white",
//     textAlign: "center",
//     fontWeight: "bold",
//     marginTop: "10px",
//   },

//   '@media (max-width: 768px)': {
//     wrapper: {
//       flexDirection: "column",
//       gap: "30px",
//     },
//     container: {
//       width: "90%", 
//       padding: "15px",
//     },
//     input: {
//       width: "90%", 
//     },
//     button: {
//       width: "80%", 
//       marginLeft: "10px",
//     },
//     buttonHover: {
//       width: "80%", 
//     },
//     dp: {
//       width: "100%", 
//     },
//     header: {
//       fontSize: "18px", 
//     },
//     signInText: {
//       fontSize: "14px", 
//     },
//   },

//   '@media (max-width: 480px)': {
//     container: {
//       width: "95%", 
//       padding: "10px",
//     },
//     input: {
//       width: "90%",
//     },
//     button: {
//       width: "75%",
//     },
//     buttonHover: {
//       width: "75%",
//     },
//     formSwitchButtons: {
//       flexDirection: "column", 
//       gap: "10px",
//     },
//     dp: {
//       width: "100%", 
//     },
//     header: {
//       fontSize: "16px", 
//     },
//     signInText: {
//       fontSize: "12px", 
//     },
//   },
// };

// export default Logout;






import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
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
      <h1 style={{textAlign:"center"}}>CANARA BANK</h1>
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
    backgroundImage: `url("http://localhost:3000/banking-image.avif")`,
    // backgroundColor: "#a84517",
  },
  container: {
    // backgroundColor: "#a84517",
    border:"2px solid ",
    borderRadius: "20px",
    padding: "10px",
    width: "350px",
    textAlign: "center",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor:"lightblue"
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
    height: "25px",
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

