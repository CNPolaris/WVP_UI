export type CpuDataItem = {
  data: string
  time: Date
}

export type DiskDataItem = {
  free: number
  use: number
  path: Date
}

export type MemDataItem = {
  data: string
  time: Date
}

export type NetDataItem = {
  in: number
  out: number
  time: Date
}

export type SystemInfoResponseData = ApiResponseData<{
  cpu: CpuDataItem[]
  disk: DiskDataItem[]
  mem: MemDataItem[]
  net: NetDataItem[]
  netTotal: number
}>
