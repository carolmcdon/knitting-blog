import { useState } from "react";

export default function Login ({currentUser, handleSubmit, handleChangeLogin, receiveNewUser, handleLogoutClick}) {
  const [toggleLogin, setToggleLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="loginPage" style={
        {backgroundImage:`url(${"https://i.fbcd.co/products/original/untitled-29-02-9fec3f4fb447c47e49e325c3e20df71dd36c17115c0b30c762a64970f2b61ec5.jpg"})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        width: '100vw',
        height: '100vh',
        }}>
      <div className="loginSituation">
        {currentUser ?
             <div className="logout">
                <h1>Welcome {currentUser.name}!</h1>
                <button onClick={handleLogoutClick}>Logout</button>
             </div>
          :
          <>
            {toggleLogin ?
              <div className="loginContaner">
                <h1 className="header">Log In</h1>
                  <div className="loginText">
                    <form onSubmit={handleSubmit}>
                        <div className="username">
                        Username:
                        <input
                            type="text"
                            name="username"
                            onChange={handleChangeLogin} 
                        />
                        </div>
                        <div className="password">
                        Password:
                        <input  
                            type="password"
                            name="password"
                            onChange={handleChangeLogin}
                        />
                        </div>
                        <div className="submit">
                        <input 
                          className="reviewBtn"
                          type="submit"
                        />
                        </div>
                        <div className="signUp">
                          <p>Don't have an account?</p>
                          <button onClick={(e)=>setToggleLogin(!toggleLogin)}>Sign Up</button>
                        </div>
                    </form>
                </div>
              </div>
                    :
                    <div>
                      <h1 className="header">Sign Up</h1>
                        <div className="signUpContainer">
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                let newUser = {
                                    name: name,
                                    email: email,
                                    username: username,
                                    password: password,
                                }
                                receiveNewUser(newUser)
                                }}>
                                
                                <div id="nameSignUp">
                                Name: 
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e)=>{setName(e.target.value)}} 
                                />
                                </div>
                                <div id="emailSignUp">
                                Email: 
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                                </div>
                                <div id="usernameSignUp">
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={(e)=>{setUsername(e.target.value)}}
                                />
                                </div>
                                <div id="passwordSignUp">
                                Password:
                                <input  
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                />
                                </div>
                                <input
                                    className="reviewBtn"
                                    type="submit"
                                />
                            </form>
                            <div className="loginFromSignUp">
                              <p>Already have an account?</p>
                              <button onClick={(e)=>setToggleLogin(!toggleLogin)}>Login</button>
                            </div>
                        </div>
                    </div>
                  }
                 </>
}
          </div>
                
      </div>
         
  )
}