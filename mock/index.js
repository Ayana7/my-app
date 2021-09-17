//使用Mock
import Mock from 'mockjs'
export default Mock.mock(/login/, 'get', {
  success: true,
  // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
  message: '@cparagraph',
  'list|1-3': [{
      id: 1
  }]
})