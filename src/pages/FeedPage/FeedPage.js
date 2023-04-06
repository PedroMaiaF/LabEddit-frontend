import { Divider, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { CreatePost, ListPosts, validaNewPost } from "../../constants/url";
import CardPosts from "./CardPosts";
import { useForm } from "../../hooks/use-form";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator";
import CardNewPostAndComment from "../../inputs/CardNewPostAndComment";
import { GlobalContext } from "../../contexts/GlobalContext";


export default function FeedPage() {
  const [posts, setPosts] = useState([])
  const [isPostValid, setIsPostValid] = useState(true)
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const [form, onChangeInputs, clearInputs] = useForm({
    content: ""

  })


  useEffect(() => {
    if (!context.isAuth) {
      goToLoginPage(navigate)
    }
  }, [])


  const onSubmit = async (e) => {
    e.preventDefault()
    setIsPostValid(validaNewPost(form.content))
    goToFeedPage(navigate)
    try {
      isPostValid && await CreatePost({
        content: form.content
      })
      console.log("Post Cadastrado com sucesso!")

    } catch (error) {
      console.log("Erro de postar", error.response.data)
    }
  }


  useEffect(() => {
    if (posts.length > 0) {
      const postsString = JSON.stringify(posts)
      localStorage.setItem("posts", postsString)
    }
    const postsGet = localStorage.getItem("posts")
    if (postsGet !== null) {
      const postsArray = JSON.parse(postsGet)
      setPosts(postsArray)
    }
    ListPosts()
      .then(data => {
        setPosts(data)
      })
      .catch((error) => {
        console.log("Erro LisPost",error.response.data.message)
      }
      )
  }, [])


  return (
    <>
      <Header isOnFeedPage={true} />

      <CardNewPostAndComment isValid={isPostValid} value={form.content} onChange={onChangeInputs} onSubmit={onSubmit}
        placeholder='Escreva seu post...' buttonName='Postar' />

      <Divider borderColor={'#FE7E02'} />

      {posts.map((post, i) => (
        <CardPosts key={post.id} id={post.id} content={post.content}
          creator={post.creator.nickName} likesDislikes={post.likesDislikes}
          totalComments={post.comments}
        />

      ))}
    </>
  );
}

