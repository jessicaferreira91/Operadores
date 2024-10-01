const a = true
const b = false
const c = true

console.log(a && b, "F")
console.log(b && c, "F")
console.log(a && c, "V")
console.log(a && b && c, "F")