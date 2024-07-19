import { useCallback } from 'react'
import { useQuery } from 'react-query'
import { getPosts, POST_QUERY_KEYS } from '@data/network/posts'
import { defaultPostResponse } from '@data/network/posts/response'
import classes from '@pages/post/post.module.css'

const Post = () => {
  const { isLoading, data, refetch } = useQuery(POST_QUERY_KEYS.posts, getPosts, {
    enabled: false,
    initialData: defaultPostResponse,
  })

  const handleGetBooks = useCallback(() => {
    void refetch()
  }, [refetch])

  return (
    <div className="container mx-auto px-6 py-16 pt-28 text-center">
      <div>
        <button
          className="m-1 h-10 transform rounded-md bg-blue-700 mr-4 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          onClick={handleGetBooks}
        >
          get posts
        </button>
        {isLoading ? 'loading...' : null}
      </div>
      <ul>
        {data!.map((post) => (
          <li key={post.id} className={classes.item}>
            <h3 className={classes.title}>
              <b>{post.title}</b> - UserId: {post.userId}
            </h3>
            <div className={classes.content}>{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Post
