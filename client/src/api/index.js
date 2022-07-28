import requestHandler from './requestHandler'

export const fetchPosts = async () => {
    const { data } = await requestHandler.GET('/posts')

    return data
}

export const createPost = async (newPost) => {
    const { res, data } = await requestHandler.POST('/posts', newPost)

    return { res, data }
}
