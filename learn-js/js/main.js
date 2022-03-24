// console.log('Hello Word');

let i = 0;

/*
#counter {
  font-size: 13px;
}
*/

function hello() {
  // console.log(document);
  let counter = document.getElementById('counter');
  counter.innerText = ++i;
  // console.log(counter.innerText);
  // console.log('Hello Word!', ++i);
}

// hello();
