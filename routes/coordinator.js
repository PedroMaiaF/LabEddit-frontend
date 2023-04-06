export const goToLoginPage = (navigator) => {
    navigator("/")
}
export const goToSignupPage = (navigator) => {
    navigator("/signup")
}

export const goToFeedPage = (navigator) => {
    navigator("/feed")
}
export const goToAddPost = (navigator) => {
    navigator("/add-post")
}
export const goToAddComment = (navigator) => {
    navigator("/add-comment")
}
export const goToPostDetailPage = (navigator,id) => {
    navigator(`/post/${id}`)
}
