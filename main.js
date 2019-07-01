let tabItems = document.querySelectorAll('.tab-item');
let tabContentItems = document.querySelectorAll('.tab-content-item');
//remove border
function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
//SELECT TAB CONTENT ITEM
function selectItem(e){
  removeBorder();
  //Add nprder tp current tab
  this.classList.add('tab-border');
}

tabItems.forEach(item=>item.addEventListener('click',selectItem));
