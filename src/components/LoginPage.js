// import React, { useState } from 'react';
// import { Logo } from './Logo';
// import { Notif } from './Notif';

// export const LoginPage = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     const onSubmitHandler = (event) => {
//       event.preventDefault();
//       props.loginHandler(username, password);
//     }
  
//     const onChangeUsername = (event) => {
//       setUsername(event.target.value);
//     }
  
//     const onChangePassword = (event) => {
//       setPassword(event.target.value);
//     }
  
//     return (
//       <div id="login-page">
//         <div id="login">
//           <Logo />
//           <Notif message={props.notif.message} style={props.notif.style} />
//           <form onSubmit={onSubmitHandler}>
//             <label htmlFor="username">Username</label>
//             <input id="username" autoComplete="off" onChange={onChangeUsername}  value={username} type="text" />
//             <label htmlFor="password">Password</label>
//             <input id="password" autoComplete="off" onChange={onChangePassword} value={password} type="password" />
//             <button type="submit" className="btn">Login</button>
//           </form>
//         </div>
//       </div>
//     )
// }




















// import React, { useState } from 'react';
// import { Logo } from './Logo';
// import { Notif } from './Notif';

// export const LoginPage = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     const onSubmitHandler = (event) => {
//       event.preventDefault();
//       props.loginHandler(username, password);
//     }
  
//     const onGuestLogin = () => {
//       setUsername('admin@admin.com');
//       setPassword('abc123');
//       props.loginHandler('admin@admin.com', 'abc123');
//     }
  
//     const onChangeUsername = (event) => {
//       setUsername(event.target.value);
//     }
  
//     const onChangePassword = (event) => {
//       setPassword(event.target.value);
//     }
  
//     return (
//       <div id="login-page">
//         <div id="login">
//           <Logo />
//           <Notif message={props.notif.message} style={props.notif.style} />
//           <form onSubmit={onSubmitHandler}>
//             <label htmlFor="username">Username</label>
//             <input id="username" autoComplete="off" onChange={onChangeUsername}  value={username} type="text" />
//             <label htmlFor="password">Password</label>
//             <input id="password" autoComplete="off" onChange={onChangePassword} value={password} type="password" />
//             <button type="submit" className="btn">Login</button>
//           </form>
//           <button onClick={onGuestLogin} className="btn guest-btn">Login as Admin</button>
//         </div>
//       </div>
//     )
// }


















// import React, { useState, useEffect } from 'react';
// import { Logo } from './Logo';
// import { Notif } from './Notif';

// export const LoginPage = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('user');
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//       const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//       setClients(storedUsers);
//     }, []);

//     useEffect(() => {
//       const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//       if (currentUser) {
//         setUsername(currentUser.email);
//         setRole(currentUser.isAdmin ? 'admin' : 'user');
//       }
//     }, []);
  
//     const onSubmitHandler = (event) => {
//       event.preventDefault();
//       if (role === 'admin') {
//         if (username === 'admin@admin.com' && password === 'abc123') {
//           localStorage.setItem('currentUser', JSON.stringify({ email: username, isAdmin: true }));
//           props.loginHandler(username, password, true);
//         } else {
//           alert('Invalid admin credentials');
//         }
//       } else {
//         const user = clients.find(user => user.email === username && user.password === password && !user.isAdmin);
//         if (user) {
//           localStorage.setItem('currentUser', JSON.stringify(user));
//           props.loginHandler(username, password, false);
//         } else {
//           alert('Invalid user credentials');
//         }
//       }
//     }
  
//     const onGuestLogin = () => {
//       setUsername('admin@admin.com');
//       setPassword('abc123');
//       localStorage.setItem('currentUser', JSON.stringify({ email: 'admin@admin.com', isAdmin: true }));
//       props.loginHandler('admin@admin.com', 'abc123', true);
//     }
  
//     const onChangeUsername = (event) => {
//       setUsername(event.target.value);
//     }
  
//     const onChangePassword = (event) => {
//       setPassword(event.target.value);
//     }

//     const onChangeRole = (event) => {
//       setRole(event.target.value);
//       setUsername('');
//       setPassword('');
//     }
  
//     return (
//       <div id="login-page">
//         <div id="login">
//           <Logo />
//           <Notif message={props.notif.message} style={props.notif.style} />
//           <form onSubmit={onSubmitHandler}>
//             <label htmlFor="role">Select Role</label>
//             <select id="role" value={role} onChange={onChangeRole}>
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//             <label htmlFor="username">Username</label>
//             <input id="username" autoComplete="off" onChange={onChangeUsername} value={username} type="text"  />
//             <label htmlFor="password">Password</label>
//             <input id="password" autoComplete='off' onChange={onChangePassword} value={password} type="password" />
//             <button type="submit" className="btn">Login</button>
//           </form>
//           <button onClick={onGuestLogin} className="btn guest-btn">Login as Guest</button>
//         </div>
//       </div>
//     )
// }


import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Notif } from './Notif';

export const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setClients(storedUsers);
    }, []);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            setRole(currentUser.isAdmin ? 'admin' : 'user');
        }
        // Reset username and password fields after refresh
        setUsername('');
        setPassword('');
    }, []);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (role === 'admin') {
            if (username === 'admin@admin.com' && password === 'abc123') {
                localStorage.setItem('currentUser', JSON.stringify({ email: username, isAdmin: true }));
                props.loginHandler(username, password, true);
            } else {
                alert('Invalid admin credentials');
            }
        } else {
            const user = clients.find(user => user.email === username && user.password === password && !user.isAdmin);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                props.loginHandler(username, password, false);
            } else {
                alert('Invalid user credentials');
            }
        }
    };

    const onGuestLogin = () => {
        setUsername('admin@admin.com');
        setPassword('abc123');
        localStorage.setItem('currentUser', JSON.stringify({ email: 'admin@admin.com', isAdmin: true }));
        props.loginHandler('admin@admin.com', 'abc123', true);
    };

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onChangeRole = (event) => {
        setRole(event.target.value);
        setUsername('');
        setPassword('');
    };

    return (
        <div id="login-page">
            <div id="login">
                <Logo />
                <Notif message={props.notif.message} style={props.notif.style} />
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="role">Select Role</label>
                    <select id="role" value={role} onChange={onChangeRole}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <label htmlFor="username">Username</label>
                    <input id="username" autoComplete="off" onChange={onChangeUsername} value={username} type="text" />
                    <label htmlFor="password">Password</label>
                    <input id="password" autoComplete='off' onChange={onChangePassword} value={password} type="password" />
                    <button type="submit" className="btn">Login</button>
                </form>
                <button onClick={onGuestLogin} className="btn guest-btn">Login as Guest</button>
            </div>
        </div>
    );
};
