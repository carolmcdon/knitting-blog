import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function Home({receivePostObj}) {
  const [posts, setPosts] = useState([])
  const [postsForSearch, setPostsForSearch] = useState([])

  useEffect(() => {
    fetch("/posts")
    .then(res=>res.json())
    .then(posts=>{
      setPosts(posts)
      setPostsForSearch(posts)
    })
  }, [])


  let history = useHistory()

  const handleHomeClick = (postId) => {
    history.push(`./posts/${postId}`)
  }

  function getSearchInput(searchInput) {
    let resultOfFilter = postsForSearch.filter(
      postObj => {
      if  (postObj.post_title.toLowerCase().includes(searchInput.toLowerCase()))
    return (postObj)
  })
  setPosts(resultOfFilter)
}

  return (
    <div className="homeContainer">
      <img id="homeImg" alt="homepage" src="https://images.unsplash.com/photo-1541944743827-e04aa6427c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80" />
      {/* <div className="blueContainer"></div> */}
      <div className="ui search">
        <div className="ui icon input">
          <input className="search" 
          placeholder="Search for a pattern"
            onChange={(e)=>getSearchInput(e.target.value)}/>
          <i className="search icon" />
        </div>
      </div>
      <div>
        {posts.map(postObj=>{
          return (
            <div onClick={(e)=>{{
              handleHomeClick(postObj.id)}
              receivePostObj(postObj)}
              }className="postsOnHome">
              <img className="postImgHome" src={postObj.post_image1}/>
                <div className="postTextContainer">
                  <h1 className="postTitleHome">{postObj.post_title}</h1>
                  <p className="postDateHome">{postObj.post_date}</p>
                  <p className="postUserHome">{postObj.user.username}</p>
                </div>
            </div>
          )
        })}
        </div>
    </div>
  )
}