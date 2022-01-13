import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun';
import apps from './apps'

/**
 * registerMicroApps方法
 * 第一个参数： 要注册的子应用集合
 * 第二个参数： 生命周期函数
 */
registerMicroApps(apps, {})
/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
    console.log(event)
})
// 导出qiankun启动方法
export default start;
