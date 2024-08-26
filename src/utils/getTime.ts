// 获取当前时间是上午、下午还是晚上
export function getTime() {
  const hour = new Date().getHours()
  if (hour >= 6 && hour < 12) {
    return '上午'
  } else if (hour >= 12 && hour < 18) {
    return '下午'
  } else {
    return '晚上'
  }
}
