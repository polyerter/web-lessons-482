/*let titles = ['asdasd','d123','324fa','asdasd',6,84,4984,];
// console.log(titles[0]);

for (let i=0;i < titles.length; i++) {
  console.log(titles[i]);
}
console.log('length: ', titles.length);
*/

/*
let post_titles = document.getElementsByClassName('blog-title');
for (let i=0;i < post_titles.length; i++) {
  console.log(post_titles[i]);
}
*/

function handler() {
  let colors = ['#333333','#8f9873','#d10374','#09f919','#f8d555','#8c0444'];
  this.style.background = colors[0];

  // console.log(this);
  // console.log('Hello, Handler');
}


let btns = document.getElementsByClassName('btn');

for (let i=0; i< btns.length; i++) {
  btns[i].addEventListener('click', handler);
}
// console.log(btns);
