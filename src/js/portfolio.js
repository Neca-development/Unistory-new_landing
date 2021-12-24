const tags = document.querySelectorAll('.tag-block');
let tagId = 0;

function InitTags() {
  tags.forEach((tag, id)=> {
    if (id == tagId) {
      tag.classList.add('active');
    } else {
      tag.classList.remove('active');
    }
  });
}
InitTags();
function SelectTags() {
  tags.forEach((tag, id)=> {
    tag.addEventListener('click', ()=> {
      tagId = id;
      InitTags();
    })
  })
}
SelectTags();