import React, { useEffect, useState } from "react"
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContext } from "./contexts/GlobalContext"
import Router  from "./routes/Router"
import axios from "axios"
import { BASE_URL } from "./constants/constants"


export default function App() {
  const [ posts, setPosts ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('labeddit-token')

    if (token) {
      fetchPosts()
    }
  }, [])

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      const token = window.localStorage.getItem('labeddit-token')

      const config = {
        headers: {
          Authorization: token
        }
      }

      const response = await axios.get(BASE_URL + "/posts", config)
      setPosts(response.data)
      setIsLoading(false)
    } catch (error) {
     
    }
  }

  const context = {
    posts,
    fetchPosts,
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn
  }
  
  return (
    <ChakraProvider resetCSS  >
      <GlobalContext.Provider value={context}>
        <Router/> 
      </GlobalContext.Provider>
    </ChakraProvider>
  )
}

