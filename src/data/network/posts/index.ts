import api from '@data/network/api'
import { PostResponse } from '@data/network/posts/response'

export const POST_QUERY_KEYS = {
  posts: 'posts',
}

export const getPosts = () => {
  return api.get<PostResponse>('posts')
}
