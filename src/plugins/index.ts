import { type App } from "vue"
import { loadElementPlus } from "./element-plus"
import { loadElementPlusIcon } from "./element-plus-icon"
import { loadVxeTable } from "./vxe-table"
import { useEcharts } from "./echarts"
export function loadPlugins(app: App) {
  app.use(useEcharts)
  loadElementPlus(app)
  loadElementPlusIcon(app)
  loadVxeTable(app)
}
