import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export default function MyPosts({currentUser, receivePostObj, posts, setPosts}) {
  const [title, setTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [postImage1, setPostImage1] = useState("")
  const [materials, setMaterials] = useState("")
  const [usersPosts, setUsersPosts] = useState([])

  const current = new Date()
  const date = `${current.getMonth()}/${current.getDate()+1}/${current.getFullYear()}`

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
    <div className="myProfile">
    {currentUser ?
      <div>
          <h1>My Patterns</h1>
            {usersPosts.map(postObj => {
             return(
              <>
              <div onClick={(e)=>{
                  handleClick(postObj.id)
                  receivePostObj(postObj)
                  }}>
                <p className="userPostTitle">{postObj.post_title}</p>
                <img className="userPostImg1" alt={postObj.post_title} src={postObj.post_image1}/>
              </div>
             </>
             )
            })}
            <div>
              
            </div>
          <h1>New Pattern</h1>
          <div>
            <form className="form" 
              onSubmit={(e)=>{
              e.preventDefault()
              let newPost={
                user_id: currentUser.id,
                materials: materials,
                post_title: title,
                post_content: postContent,
                post_date: date,
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
              placeholder="Materials"
              value={materials}
              onChange={(e)=>{setMaterials(e.target.value)}}
              cols={100}
              />
              <textarea
              placeholder="Content"
              value={postContent}
              onChange={(e)=>{setPostContent(e.target.value)}}
              rows={25}
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
              type="submit"
              />
            </form>
          </div>
      </div>
      :
    <h1>You must be logged in to view your patterns.</h1>
    }
    </div>
    
  )
}