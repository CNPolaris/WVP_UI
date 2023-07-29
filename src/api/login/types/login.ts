export interface LoginRequestData {
  /** admin 或 editor */
  username: "admin" | "editor"
  /** 密码 */
  password: string
}

export type LoginCodeResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<{
  accessToken: string
  accountNonExpired: boolean
  accountNonLocked: boolean
  credentialsNonExpired: boolean
  enabled: boolean
  id: number
  username: string
  role: {
    authority: string
    createTime: Date
    id: number
    name: string
    updateTime: Date
  }
}>

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>
