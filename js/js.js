// const { each } = require("jquery")

// let t = $('.slider-track__item').width()
// console.log(t)
// array.forEach(element => {
    
// });
let first = $('.first-btn')
let second = $('.second-btn')

let firstItem = $('.item-first')
let secondItem = $('.item-second')


second.click(function() {
  firstItem.css('display','none')
  secondItem.css('display', 'block')
})


first.click(function() {
    firstItem.css('display','block')
    secondItem.css('display', 'none')
  })
let b6 = ["1,4,6,7"]
b = ["1,3,4,56", "24,1,6,7"]


b1 = b[0].split(',')
b2 = b[1].split(',')
b3 = []
b4 = []

b1.forEach(element => {
    b3.push(parseInt (element))
});
b2.forEach(element => {
    b4.push(parseInt (element))
});
b7 = b3.concat(b4)
console.log(b7)
console.log(b3)
console.log(b4)
b8 = []
for(let i = 0;i<b7.length; i++) {
    // console.log(b7[i])
    for(let j = 0;j<b7.length; j++) {
        if(b7[i] == b7[j]) {
            b8.push(b7[i])
        }
    }
}
console.log(b8)

let a = [2,4,6,7]

let n = a.filter(item=> {
    if (item % 2 == 0){
        return item
    }
})
console.log(n)


let header = $('.header-menu-back')
$('.header-icon__btn ').click(function() {
    header.css('transform', 'translateX(0%)')
})
$('.header-bootstrap-container').click(function() {
    header.css('transform', 'translateX(-100%)')
})
