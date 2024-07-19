export type PostResponse = Post[]

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const defaultPostResponse: PostResponse = []
