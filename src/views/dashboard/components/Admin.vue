<template>
  <div class="app-container center">
    <!-- <el-empty description="Admin 权限可见" /> -->
    <el-row style="width: 100%">
      <el-col :xl="{ span: 8 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="{ span: 12 }" :xs="{ span: 24 }">
        <div class="control-cell">
          <div style="width: 100%; height: 100%">
            <div id="consoleCPU" style="width: 100%; height: 100%" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { getServerSystemInfo } from "@/api/system"
import { ref, onMounted, onDeactivated } from "vue"
import * as echarts from "echarts"
export default {
  setup() {
    const echart = echarts
    const cpuData = ref<any>([])
    const timer = ref(0)
    const getSystemInfo = () => {
      getServerSystemInfo().then((res) => {
        cpuData.value = res.data.cpu
      })
    }
    const initCPUChart = () => {
      const chart = echart.init(document.getElementById("consoleCPU")!, "dark")
      chart.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      })
    }
    onMounted(() => {
      initCPUChart()
      //组件挂载时的生命周期执行的方法
      timer.value = window.setInterval(function logname() {
        // 其他定时执行的方法
        getSystemInfo()
      }, 10000)
    })
    onDeactivated(() => {
      //离开当前组件的生命周期执行的方法
      window.clearInterval(timer.value)
    })
    return { cpuData }
  }
}
</script>
<style lang="scss" scoped>
.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.control-cell {
  padding-left: 10px;
  padding-right: 10px;
  height: 360px;
}
</style>
