// const tags = document.querySelectorAll('.tag-block');
// let tagId = 0;

// function InitTags() {
//   tags.forEach((tag, id)=> {
//     if (id == tagId) {
//       tag.classList.add('active');
//     } else {
//       tag.classList.remove('active');
//     }
//   });
// }
// InitTags();
// function SelectTags() {
//   tags.forEach((tag, id)=> {
//     tag.addEventListener('click', ()=> {
//       tagId = id;
//       InitTags();
//       showNotFound ();
//     })
//   })
// }
// SelectTags();

// const projects = document.querySelectorAll('.portfolio-block'),
//       notFoundMessage = document.querySelector('.portfolio__notfound');

// function showNotFound () {
//   if ( projects.length == 0 ) {
//     notFoundMessage.classList.toggle('portfolio__notfound_active');
//   }
// }

new Vue ({
  el: '#portfolio',
  data: {
    sortBy: 'all',
    activeTab: 1
  },
  created: function() {
    this.sortBy = 'all'
    this.setActive = false
  },
  methods: {
    sortProjects(tag) {
      this.sortBy = tag;
    },
    setActive() {
      this.setActive = true;
    }
  }
})