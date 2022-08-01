import requestHandler from './requestHandler'

export const fetchPosts = async () => {
    const { data } = await requestHandler.GET('/posts')

    return data
}

export const createPost = async (newPost) => {
    const { data } = await requestHandler.POST('/posts', newPost)

    return data
}

export const updatePost = async (id, updatedPost) => {
    const { data } = await requestHandler.PATCH(`/posts/${id}`, updatedPost)

    return data
}

export const deletePost = async (id) => {
    const { data } = await requestHandler.DELETE(`/posts/${id}`)

    return data
}
