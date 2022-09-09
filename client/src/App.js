import './App.css';
import Login from "./Components/Login"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import MyPosts from "./Components/MyPosts"
import PostCard from "./Components/PostCard"
import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom";

export default function App() {
  const [userToLogin, setUserToLogin] = useState( {username: "", password: ""} )
  const [currentUser, setCurrentUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [currentPostObj, setCurrentPostObj] = useState("")
  const [currentHomePostObj, setCurrentHomePostObj] = useState("")
  
  useEffect(() => {
    fetch("/posts")
    .then(res=>res.json())
    .then(posts=>setPosts(posts))
  }, [])

  useEffect(() => {
    fetch("/user_in_session")
    .then(res=>res.json())
    .then(userAlreadyLoggedIn => {
      console.log("current user:", userAlreadyLoggedIn)
      setCurrentUser(userAlreadyLoggedIn)
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userToLogin),
    })
        .then(res=>res.json())
        .then(hopefullyAUser => {
          console.log(hopefullyAUser)
          setCurrentUser(hopefullyAUser)
        })
  }

  const handleChangeLogin = (e) => {
    setUserToLogin({...userToLogin, [e.target.name]: e.target.value})
  }

  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(deleteResponse=>setCurrentUser(null))
  }

  function receiveNewUser(newUser) {
    console.log("new user:", newUser)
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
    setCurrentUser(newUser)
  }

  function receivePostObj(postObj){
     setCurrentPostObj(postObj)
  }

  // function receiveHomePostObj(postObj){
  //   setCurrentHomePostObj(postObj)
  // }

  return (
    <div>
      <NavBar currentUser={currentUser}/>
      <Switch>
        <Route exact path="/login">
          <Login receiveNewUser={receiveNewUser} handleLogoutClick={handleLogoutClick} handleChangeLogin={handleChangeLogin} handleSubmit={handleSubmit} currentUser={currentUser}/>
        </Route>
        <Route exact path="/home">
          <Home currentUser={currentUser} receivePostObj={receivePostObj}/>
        </Route>
        <Route exact path="/myPosts">
          <MyPosts receivePostObj={receivePostObj} setPosts={setPosts} posts={posts} currentUser={currentUser}/>
        </Route>
        <Route path="/posts/">
          <PostCard currentPostObj={currentPostObj} posts={posts} currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  )
}
