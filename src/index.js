
exports.min = function min (array) {
  let res = 0
  if(Array.isArray(array) && array.length > 0) array.forEach(d => res = Math.min(res, d))
  return res
}

exports.max = function max (array) {
  let res = 0
  if(Array.isArray(array) && array.length > 0) array.forEach(d => res = Math.max(res, d))
  return res
}

exports.avg = function avg (array) {
  if(!Array.isArray(array) || array.length < 1) return 0
  let summ = 0
  array.forEach(d => summ += d)
  return summ / array.length
}
