import { useEffect, useState } from "react"

export default function PostCard({currentUser, currentPostObj}) {
  const [showAddComment, setShowAddComment] = useState(false)
  const [content, setContent] = useState("")
  const [allComments, setAllComments] = useState([])

  const current = new Date()
  const date = `${current.getMonth()}/${current.getDate()+1}/${current.getFullYear()}`

  function handlePostDelete(postId) {
    console.log("postId", postId)
    fetch(`/posts/${postId}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then((data)=>console.log("It has been deleted!", data))
  }

  useEffect(() => {
    fetch("/comments")
    .then(res=>res.json())
    .then(allComments=>setAllComments(allComments))
  }, [])

  function handleNewComment(newComment) {
    console.log("newComment from handleNewComment", newComment)
    fetch('/comments', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment)
    })
      .then(res=>res.json())
      .then(data=>{
        console.log("data & comments", data, allComments)
        setAllComments([data,...allComments])
      })
  }
  

  return (
    <div className="postCard">
      <h1>{currentPostObj.post_title}</h1>
      <p>{currentPostObj.post_date}</p>
      <p>{currentPostObj.user.username}</p>
      <img src={currentPostObj.post_image1}/>
      <p>{currentPostObj.post_content}</p>
      
      {currentUser.id === currentPostObj.user.id ?
        <>
          <button onClick={(e)=>handlePostDelete(currentPostObj.id)}>Delete</button>
          <button>Edit</button>
        </>
        : 
        null
      }
      
      {currentPostObj.comments.map(commentObj => {
        return (
          <>
            <p>{commentObj.comment_date}</p>
            <p>{commentObj.comment_content}</p>
          </>
        )
      })}
      
      <button onClick={(e)=>{setShowAddComment(!showAddComment)}}>Add Comment</button>

      {showAddComment ?
      <form className="form" 
              onSubmit={(e)=>{
              e.preventDefault()
              let newComment={
                post_id: currentPostObj.id,
                user_id: currentUser.id,
                comment_content: content,
                comment_date: {date},
              }
              console.log("newComment,", newComment)
              handleNewComment(newComment)
            }}>
              <input
              type="text"
              placeholder="Comment"
              value={content}
              onChange={(e)=>{setContent(e.target.value)}}
              />
              <input
              type="submit"
              />
            </form>
            :
            null
          }
    </div>
  )
}