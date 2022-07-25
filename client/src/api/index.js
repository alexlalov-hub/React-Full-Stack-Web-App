const url = 'http://localhost:5000/posts'

export const fetchPosts = async () => {
    try {
        const response = await fetch(url)

        if (response.ok !== true) {
            const error = response.json()
            throw new Error(error.message)
        }

        if (response.status === 204) {
            return response
        } else {
            const data = await response.json()
            return data
        }
    } catch (error) {
        alert(error.message)
        throw error
    }
}
