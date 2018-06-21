//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target) {
  return document.querySelector("#nested div.target")
}

function deepestChild(){
  return document.querySelector("#grand-node div div div div")
}

function increaseRankBy(n) {
const rank = document.querySelectorAll('ul.ranked-list')

for(let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = (i + 1).toString()
}
