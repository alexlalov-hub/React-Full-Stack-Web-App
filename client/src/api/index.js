import requestHandler from './requestHandler'

export const fetchPosts = async (page) => {
    const { data } = await requestHandler.GET(`/posts?page=${page || 1}`)

    return data
}

export const getPostsBySearch = async (searchQuery) => {
    const { data } = await requestHandler.GET(`/posts/search?searchQuery=${searchQuery || 'none'}`)

    return data
}

export const createPost = async (newPost) => {
    const { data } = await requestHandler.POST('/posts', newPost)

    return data
}

export const updatePost = async (id, updatedPost) => {
    const { data } = await requestHandler.PATCH(`/posts/${id}`, updatedPost)
    console.log(data);
    return data
}

export const deletePost = async (id) => {
    const { data } = await requestHandler.DELETE(`/posts/${id}`)

    return data
}

export const likePost = async (id) => {
    const { data } = await requestHandler.PATCH(`/posts/${id}/likePost`)

    return data
}

export const signIn = async (userData, navigate) => {
    const { data } = await requestHandler.POST('/auth/signIn', userData)

    navigate('/')
    return data
}

export const signUp = async (userData, navigate) => {
    const { data } = await requestHandler.POST('/auth/signUp', userData)

    navigate('/')
    return data
}

