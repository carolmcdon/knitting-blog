import { useEffect, useState } from "react"
import {useHistory} from "react-router-dom";

export default function PostCard({setPosts, posts, currentUser, currentPostObj, setCurrentPostComments, currentPostComments}) {
  const [content, setContent] = useState("")
  const [allComments, setAllComments] = useState([])
  const [showEditPostForm, setShowEditPostForm] = useState(false)
  const [postClicked, setPostClicked] = useState([])
  const [title, setTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [postImage1, setPostImage1] = useState("")
  const [materials, setMaterials] = useState("")
  const [aboutPost, setAboutPost] = useState("")
  const [allUsers, setAllUsers] = useState([])

  function getCurrentDate(){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${month<10?`0${month}`:`${month}`}-${date}-${year}`
    }

  function handlePostDelete(postId) {
    console.log("postId", postId)
    fetch(`/posts/${postId}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then((data)=>console.log("It has been deleted!", data))
  }

  function handleCommentDelete(commentId) {
    console.log("commentId", commentId)
    fetch(`/comments/${commentId}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then((data)=>console.log("It has been deleted!", data))

    let resultOfFilter = currentPostComments.filter((eachPostComment)=> {
        if(eachPostComment.id !== commentId) {
            return eachPostComment
        }
    })
    console.log("resultoffilter", resultOfFilter)
    setCurrentPostComments( [...resultOfFilter])
  }
  


  let history = useHistory()

  useEffect(() => {
    fetch("/comments")
    .then(res=>res.json())
    .then(allComments=>setAllComments(allComments))
  }, [])


  useEffect(() => {
    fetch("/users")
    .then(res=>res.json())
    .then(allUsers=>setAllUsers(allUsers))
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
        console.log("data & comments", data, currentPostComments)
        setCurrentPostComments([...currentPostComments, data])
      })
  }

  console.log("currentPostObj comments", currentPostObj.comments)

  const handleEditedPost = (editedPost) => {
    console.log("edited post from handleEditedPost", editedPost)
    fetch(`/posts/${editedPost.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(editedPost)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("updated post", editedPost)

      let updatedPosts = ([...posts])

      updatedPosts.find((postObj, index) => {
        console.log("index", index)
        if (postObj.id === data.id) {
          updatedPosts[index] = data
        }
      })
      console.log(updatedPosts)
      setPosts(updatedPosts)
    })
  }
  

  return (
    <>
    <div className="postCard">
        <div className="everythingButComments">
        <div className="polaroidContainer">
          <img className="postCardImg" src={currentPostObj.post_image1}/>
        </div>
        <div className="postInfo">
          <div className="postCardHeader">
              <h1>{currentPostObj.post_title}</h1>
              <p>{currentPostObj.post_date}</p>
              <p className="postCardUsername">{currentPostObj.user.username}</p>
              {currentUser.id === currentPostObj.user.id ?
                <>
                  <button onClick={(e)=>{
                    handlePostDelete(currentPostObj.id)
                    history.push('/myPosts')
                    history.go(0)
                  }
                  }>Delete</button>
                  <button onClick={(e)=>{
                    setShowEditPostForm(!showEditPostForm)
                    setPostClicked(currentPostObj.id)}
                  }>Edit</button>
                </>
                : 
                null
              }
          </div>
        <p>{currentPostObj.about_post}</p>
        <p>Materials: {currentPostObj.materials}</p>
        <p>{currentPostObj.post_content}</p>
      </div>
      </div>


      {showEditPostForm ?
        <form onSubmit={(e)=>{
          e.preventDefault()
          let editedPost = {
            id: postClicked,
            user_id: currentUser.id,
            materials: materials,
            about_post: aboutPost,
            post_title: title,
            post_content: postContent,
            post_date: getCurrentDate(),
            post_image1: postImage1,
          }
          console.log("edited post", editedPost)
          handleEditedPost(editedPost)
          history.push("/myPosts")
          history.go(0)
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
          rows={25}
          cols={100}
          />
          <textarea
          type="text"
          placeholder="Image URL"
          cols={100}
          value={postImage1}
          onChange={(e)=>{setPostImage1(e.target.value)}}
          />
          <input
          type="submit"
          />
        </form>
        :
        null}
   

      <div className="allComments">
      <h1>Comments</h1>

    {currentPostComments.map(commentObj => {
        return (
            <div className="comments">
              <div className="commentHeader">
                <p>{commentObj.comment_date}</p>
                <p className="postCardUsername">{commentObj.user.username}</p>
                {commentObj.user.id == currentUser.id ?
                <button onClick={(e)=>{handleCommentDelete(commentObj.id)}}>Delete</button>
                :
                null}
              </div>
              <p>{commentObj.comment_content}</p>
            </div>
        )}
    )}

      <form className="commentForm" 
              onSubmit={(e)=>{
              e.preventDefault()
              let newComment={
                post_id: currentPostObj.id,
                user_id: currentUser.id,
                comment_content: content,
                comment_date: getCurrentDate(),
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
            
    </div>
    </div>
    <div className="postCardFooter"></div>
    </>
  )
}