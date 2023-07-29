import { request } from "@/utils/service"
import type * as System from "./types/system"

export function getServerSystemInfo() {
  return request<System.SystemInfoResponseData>({
    url: "/api/server/system/info",
    method: "get"
  })
}
