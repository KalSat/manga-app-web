import httpClient from '@data/network/httpClient'
import { PostResponse } from '@data/network/posts/model'

export const POST_QUERY_KEYS = {
  posts: 'posts',
}

export const getPosts = () => {
  return httpClient.get<PostResponse>('posts')
}
