import { useCallback } from 'react'
import { useMutation } from 'react-query'
import { POST_QUERY_KEYS } from '@data/network/posts/postsApi'
import { getHomeData } from '@data/network/comicCollection/comicCollectionApi'

const Post = () => {
  const { isLoading, data, mutate } = useMutation(POST_QUERY_KEYS.posts, getHomeData)

  const handleGetBooks = useCallback(() => {
    void mutate()
  }, [mutate])

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
      <p>
        {data && (console.log(''),
          JSON.stringify(data.banners, null, 2))}
      </p>
      <ul>
        {data?.banners.map((banner) => (
          banner.type === 1 && (
            <li key={banner.out_uuid}>
              <img src={banner.cover} alt={banner.brief} />
              <p>{banner.comic?.name}</p>
              <p>{banner.brief}</p>
            </li>
          )))}
      </ul>
    </div>
  )
}

export default Post
