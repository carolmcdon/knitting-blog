import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export default function MyPosts({currentUser, receivePostObj, posts, setPosts}) {
  const [title, setTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [postImage1, setPostImage1] = useState("")
  const [materials, setMaterials] = useState("")
  const [usersPosts, setUsersPosts] = useState([])
  const [aboutPost, setAboutPost] = useState("")
  const [toggleNewPattern, setToggleNewPattern] = useState(false)
  const [showTabStyle, setShowTabStyle] = useState(true)

  function getCurrentDate(){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${month<10?`0${month}`:`${month}`}-${date}-${year}`
    }

  let history = useHistory()

  const handleClick = (postId) => {
    history.push(`./posts/${postId}`)
  }

  useEffect(() => {
    fetch("/users_posts")
    .then(res=>res.json())
    .then(usersPosts=>setUsersPosts(usersPosts))
  }, [])

  console.log("users posts", usersPosts)

  function handleNewPost(newPost) {
    console.log("newPost from handleNewPost", newPost)
    fetch('/users_posts', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then(res=>res.json())
      .then(data=>{
        console.log("data & posts", data, usersPosts)
        setUsersPosts([data,...usersPosts])
      })
  }

  return (
    <div className="myProfile" style={
      {backgroundImage:`url("https://images.unsplash.com/photo-1519972064555-542444e71b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
      width: '100vw',
      height: '100vh',
      }}>
      <div className="contentMyProfile">
    {currentUser ?
      <div>
        {toggleNewPattern ?
            <>
                <div className="tabs">
                  <div className="myPatternsTitle">
                    <h1>my patterns</h1>
                  </div>

                  <div className="newPatternTitle"
                    onClick={(e)=>{
                      setToggleNewPattern(!toggleNewPattern)
                      setShowTabStyle(!showTabStyle)
                    }}
                    style={{
                      backgroundColor: showTabStyle ? 'white' : 'rgb(240, 240, 239)',
                      borderColor: showTabStyle ? 'white' : 'rgb(240, 240, 239)',
                    }}
                  >
                    <h1>new pattern</h1>
                  </div>
                </div>

                <div className="myPatterns">
                  {usersPosts.map(postObj => {
                  return(
                    <>
                    <div onClick={(e)=>{
                        handleClick(postObj.id)
                        receivePostObj(postObj)
                        }}>
                      <div className="eachUserPost">
                        <img className="userPostImg1" alt={postObj.post_title} src={postObj.post_image1}/>
                        <p className="userPostTitle">{postObj.post_title}</p>
                      </div>    
                    </div>
                  </>
                  )
                  })}
                  <div>
                </div>
                </div>
            </>
              :

        <>
        <div className="tabs">
            <div className="myPatternsTitle"
                onClick={(e)=>{{
                  setToggleNewPattern(!toggleNewPattern)}
                  setShowTabStyle(!showTabStyle)
                  }}
               style={{
                backgroundColor: showTabStyle ? 'rgb(240, 240, 239)' : 'null',
                borderColor: showTabStyle ? 'rgb(240, 240, 239)' : 'null',
                // boxShadow: showTabStyle ? 'null' : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              }}>
                <h1>my patterns</h1>
            </div>

            <div className="newPatternTitle">
                <h1>new pattern</h1>
              </div>
        </div>

            <div>
            <div className="newPattern">
              <form className="form" 
                onSubmit={(e)=>{
                e.preventDefault()
                let newPost={
                  user_id: currentUser.id,
                  materials: materials,
                  post_title: title,
                  about_post: aboutPost,
                  post_content: postContent,
                  post_date: getCurrentDate(),
                  post_image1: postImage1,
                }
                console.log("newpost,", newPost)
                handleNewPost(newPost)
              }}>
                <textarea
                placeholder="Title"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                cols={100}
                />
                <textarea
                placeholder="About"
                value={aboutPost}
                onChange={(e)=>{setAboutPost(e.target.value)}}
                cols={100}
                />
                <textarea
                placeholder="Materials"
                value={materials}
                onChange={(e)=>{setMaterials(e.target.value)}}
                cols={100}
                />
                <textarea
                placeholder="Content"
                value={postContent}
                onChange={(e)=>{setPostContent(e.target.value)}}
                rows={22}
                cols={100}
                />
                <textarea
                type="text"
                placeholder="Image url"
                cols={100}
                value={postImage1}
                onChange={(e)=>{setPostImage1(e.target.value)}}
                />
                <input
                className="submitBtnMyPosts"
                type="submit"
                />
              </form>
            </div>
          </div>
          </>
        }
      </div>
      :
    <h1>You must be logged in to view your patterns.</h1>
    }
    </div>
  </div>
  )
}