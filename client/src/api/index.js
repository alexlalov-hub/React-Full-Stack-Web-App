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
    const { data } = await requestHandler.PATCH(`/post/${id}`, updatePost)

    return data
}
