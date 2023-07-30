import { request } from "@/utils/service"
import type * as System from "./types/system"
import type * as Device from "./types/device"

export function getServerSystemInfo() {
  return request<System.SystemInfoResponseData>({
    url: "/api/server/system/info",
    method: "get"
  })
}

export function getDeviceListApi(data: Device.DeviceRequestData) {
  return request<Device.DeviceResponseData>({
    url: "/api/device/query/devices",
    method: "get",
    params: data
  })
}
