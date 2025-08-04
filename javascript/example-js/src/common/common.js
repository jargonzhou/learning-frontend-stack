// 模块转移导出
// export * from './common_string.js'; // 所有命名导出
export { foo, bar as myBar } from './common_string.js'; // 命名导出的别名

// export { default } from './common_string.js'; // 默认导出
export { myBaz as default } from './common_string.js'; // 修改命名或默认导出的角色
