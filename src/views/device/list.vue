<template>
  <div class="app-container center">
    <div class="page-header">
      <div class="page-header-btn">
        <el-button class="el-icon-wvp-addition" style="margin-right: 1rem" type="primary">添加设备</el-button>
        <el-button class="el-icon-wvp-shuaxin1" circle :loading="loading" @click="getDevice" />
      </div>
    </div>
    <!--设备列表-->
    <el-table :data="deviceList" style="width: 100%; font-size: 12px" header-row-class-name="table-header">
      <el-table-column prop="name" label="名称" min-width="160" />
      <el-table-column prop="deviceId" label="设备编号" min-width="200" />
      <el-table-column label="地址" min-width="160">
        <template #default="scope">
          <el-tag v-if="scope.row.hostAddress" size="small">{{ scope.row.hostAddress }}</el-tag>
          <el-tag v-if="!scope.row.hostAddress" size="small">未知</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="manufacturer" label="厂家" min-width="120" />
      <el-table-column prop="transport" label="信令传输模式" min-width="120" />
      <el-table-column label="流传输模式" min-width="160">
        <template #default="scope">
          <el-select size="small" v-model="scope.row.streamMode" placeholder="请选择" style="width: 120px">
            <el-option key="UDP" label="UDP" value="UDP" />
            <el-option key="TCP-ACTIVE" label="TCP主动模式" value="TCP-ACTIVE" />
            <el-option key="TCP-PASSIVE" label="TCP被动模式" value="TCP-PASSIVE" />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="channelCount" label="通道数" min-width="120" />
      <el-table-column label="状态" min-width="120">
        <template #default="scope">
          <div class="name-wrapper">
            <el-tag size="default" v-if="scope.row.onLine">在线</el-tag>
            <el-tag size="default" type="info" v-if="!scope.row.onLine">离线</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="keepaliveTime" label="最近心跳" min-width="160" />
      <el-table-column prop="registerTime" label="最近注册" min-width="160" />

      <el-table-column label="操作" min-width="350" fixed="right">
        <template #default="scope">
          <el-button type="text" size="default" v-bind:disabled="scope.row.online == 0" icon="el-icon-refresh"
            >刷新
          </el-button>
          <el-divider direction="vertical" />
          <el-button type="text" size="default" icon="el-icon-video-camera">通道 </el-button>
          <el-divider direction="vertical" />
          <el-button size="default" icon="el-icon-location" type="text">定位 </el-button>
          <el-divider direction="vertical" />
          <el-button size="default" icon="el-icon-edit" type="text">编辑</el-button>
          <el-divider direction="vertical" />
          <el-button size="default" icon="el-icon-delete" type="text" style="color: #f56c6c">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="pager-wrapper">
    <el-pagination
      background
      :layout="paginationData.layout"
      :page-sizes="paginationData.pageSizes"
      :total="paginationData.total"
      :page-size="paginationData.pageSize"
      :currentPage="paginationData.currentPage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { usePagination } from "@/hooks/usePagination"
import { getDeviceListApi } from "@/api/system"
import { type DeviceRequestData } from "@/api/system/device"
import { ref, reactive, onMounted } from "vue"
const pageForm: DeviceRequestData = reactive({
  page: 1,
  count: 10
})
const deviceList = ref([])

const loading = ref<boolean>(false)

const { paginationData, handleCurrentChange, handleSizeChange } = usePagination()
const getDevice = () => {
  console.log("查询设备列表")
  loading.value = true
  getDeviceListApi(pageForm).then((res) => {
    deviceList.value = res.data.list
    loading.value = false
  })
}
onMounted(() => {
  getDevice()
})
</script>
<style lang="scss" scoped>
.pager-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
}
</style>
