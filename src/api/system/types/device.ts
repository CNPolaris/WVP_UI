export type DeviceRequestData = {
  page: number
  count: number
}

export type DeviceResponseData = ApiResponseData<{
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: []
  navigateFirstPage: number
  navigateLastPage: number
  navigatePages: number
  navigatepageNums: []
  nextPage: number
  pageNum: number
  pageSize: number
  pages: number
  prePage: number
  size: number
  startRow: number
  total: number
}>
