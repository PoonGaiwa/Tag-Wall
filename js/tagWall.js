let oComTag = document.querySelector('.comment-tag');
let oComCon = document.querySelector('.comment-content');
let conTag = document.querySelector('.content-tag');

oComTag.addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase() === 'span'){
    let htmlStr = e.target.innerHTML;
    oComCon.innerHTML += `<div><p>${htmlStr}</p>&nbsp;|&nbsp;<span class="del">x</span></div>`;
    conTag.innerHTML += `<span>${htmlStr}</span>`;
  }
},false);
oComCon.addEventListener('click',function(e){
  if(e.target.className === 'del'){
    let index = getEleIdx(e.target.parentNode);
    e.target.parentNode.remove();
    conTag.children[index].remove();
  }
},false);
function getEleIdx(ele){
  let elements = ele.parentNode.children;
  for(let i = 0, len = elements.length; i < len; i++){
    if (elements[i] === ele){
      return i;
    }
  }
}

