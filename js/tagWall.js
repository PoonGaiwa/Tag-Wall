/*
 * @Author: gaiwa gaiwa@163.com
 * @Date: 2023-07-29 23:24:17
 * @LastEditors: gaiwa gaiwa@163.com
 * @LastEditTime: 2023-07-30 23:25:05
 * @FilePath: \html\work\js\day28\tabWall\js\tagWall.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let oComTag = document.querySelector('.comment-tag');
let oComCon = document.querySelector('.comment-content');
let conTag = document.querySelector('.content-tag');
let tagNum = oComTag.children.length;

oComTag.addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase() === 'span'){
    if (e.target.className !== 'selected'){
      let htmlStr = e.target.innerHTML;
      oComCon.innerHTML += `<div><p>${htmlStr}</p>&nbsp;|&nbsp;<span class="del">x</span></div>`;
      conTag.innerHTML += `<span>${htmlStr}</span>`;
      e.target.classList.add('selected');
    }
  }
},false);
oComCon.addEventListener('click',function(e){
  if(e.target.className === 'del'){
    let str = e.target.parentNode.children[0].innerHTML;
    for (let i = 0; i < tagNum; i++){
      if (oComTag.children[i].innerHTML === str ){
        oComTag.children[i].classList.remove('selected');
      }
    }
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

