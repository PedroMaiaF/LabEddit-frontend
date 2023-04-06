import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CreateComment, PostWithComments, validaNewPost } from "../../constants/url";
import { Divider, } from "@chakra-ui/react";
import CardComments from "./CardComments";
import CardNewPostAndComment from "../../inputs/CardNewPostAndComment";
import { useForm } from "../../hooks/use-form";
import CardPosts from "../FeedPage/CardPosts";


export default function PostDetailPage() {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [post, setPost] = useState([])
  const [isCommentValid, setIsCommentValid] = useState(true)
  const [form, onChangeInputs, clearInputs] = useForm({
    content: ""

  })

  useEffect(() => {
    PostWithComments(id)
      .then(data => {
        setComments(data.comments)
        setPost(data)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      }
      )
  }, [])


  const onSubmit = async (e) => {
    e.preventDefault()
    setIsCommentValid(validaNewPost(form.content))
    try {
      isCommentValid && await CreateComment(id, {
        content: form.content
      })
      alert("Comentário Cadastrado");

    } catch (error) {
      alert(error.response.data)
    }
  }


  useEffect(() => {
    if (comments.length > 0) {
      const commentsString = JSON.stringify(comments)
      localStorage.setItem("comments", commentsString)
    }
  }, [comments])


  useEffect(() => {
    const commentsGet = localStorage.getItem("comments")
    if (commentsGet !== null) {
      const commentsArray = JSON.parse(commentsGet)
      setComments(commentsArray)
    }
  }, [])



  return (
    <>
      <Header isOnPostDetailPage={true} />

      <CardPosts key={post.idPost} id={post.idPost} content={post.content}
        creator={post.nickName} likesDislikes={post.likesDislikes}
        totalComments={post.qtdComments} />

      <CardNewPostAndComment isValid={isCommentValid} value={form.content} onChange={onChangeInputs} onSubmit={onSubmit}
        placeholder='Adicionar comentário' buttonName='Responder' />

      <Divider borderColor={'#FE7E02'} />

      {comments.map((comment, i) => (
        <CardComments idPost={post.idPost} key={comment.idComment} id={comment.idComment} content={comment.contentComment}
          creator={comment.nickName} likesDislikes={comment.likesDislikes}

        />

      ))}


    </>
  );
}
