/**
 * index.js
 *- All our useful js got here, awesome !
*/
console.log("Javascript is amazing!");

function addtodo(){
    const input = document.getElementById('input').value
    const pTag = document.createElement('p')
    console.log(input);
    
    pTag.innerText= input
    const li= document.createElement('li')
    li.appendChild(pTag)
    document.getElementById('input').value=''
    document.getElementById('list').appendChild(li)

}