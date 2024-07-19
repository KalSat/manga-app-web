const BASE_URL = import.meta.env.BASE_URL
const baseUrl = BASE_URL === '/' ? '' : BASE_URL
export const ROOT_PATH = BASE_URL
export const HOME_PATH = `${baseUrl}/home`
export const POSTS_PATH = `${baseUrl}/posts`
