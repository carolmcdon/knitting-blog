import { useState } from "react";

export default function Login ({currentUser, handleSubmit, handleChangeLogin, receiveNewUser, handleLogoutClick}) {
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="loginContainer">
        {currentUser ?
          <div>
          <h1>Welcome {currentUser.name}!</h1>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
          :
          <div className="loginContainer">
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
                </form>
              </div>
          </div>
          }

        {currentUser ?
          null
          :
          <div>
            <p>Don't have an account?</p>
              <button onClick={(e)=>setShowSignUpForm(!showSignUpForm)}>Sign Up</button>
          </div>
        }
          {currentUser ?
          null 
          :
          <div>
            {showSignUpForm ?
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
                  </div>
              </div>
            :
              null
            }
          </div>
          }
    </div>
  )
}