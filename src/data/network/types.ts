export interface QueryParams {
  [index: string]: string | number | boolean
}

export interface BaseResponse<T> {
  code: number
  message: string
  results: T
}

export class ApiError extends Error {
  public static readonly CODE_SUCCESS = 200

  constructor(
    message: string,
    public code: number,
  ) {
    super(message)
    super.name = 'ApiError'
  }
}

export interface PagedResults<T> {
  list: T[]
  total: number
  limit: number
  offset: number
}
