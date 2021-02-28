module.exports = function toReadable (number) {
  let obj = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
    5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
    15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
    60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
    }
  let arr = []
  let num = number
  if(number === 0){return 'zero'}
  function integger(numb, word){
    let int = Math.floor(number / numb)
    if(int > 0){
      arr.push(int)
      arr.push(word)}
    num = num % numb
  }
  if(num >= 1000000000){
    integger(1000000000, 'billion')
  }
  if(num >= 1000000){
    integger(1000000, 'million')
  }
  if(num >= 1000){
    integger(1000, 'thousand')
  }
  if(num >= 100){
    integger(100, 'hundred')
  }
  if(num > 0){
    arr.push(num)
  }
  let res = []
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      let str
      if((arr[i] < 20) || (arr[i] / 10 === Math.floor(arr[i] / 10))){
        str = obj[`${arr[i]}`]
      }
      else {
        let tens = Math.floor(arr[i] / 10) * 10
        let ones = arr[i] % 10
        str = obj[`${tens}`] + ' ' + obj[`${ones}`]
      }
      res.push(str)
    } else {
      res.push(arr[i])
    }
  }
  return res.join(' ')
}
