<template>
<div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="myModal" aria-hidden="true" @click.stop>
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ project.title }} <span>{{ project.subtitle }}</span></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="image-thumbnail--hero">
           <img  :src="project.thumbnails.small[selectedIndex]" 
                 :srcset="`${project.thumbnails.small[selectedIndex]} 330w, ${project.thumbnails.medium[selectedIndex]} 900w, ${project.thumbnails.high[selectedIndex]} 1400w`"
                 sizes="(min-width: 1200px) 50vw, (min-width: 768px) 70vw, 300px" 
                 width="100%"
                 :alt="project.title">

        </div>
        <div class="image-thumbnails">
          <ul class="list-unstyled">
            <li v-for="(thumbnail, index) in project.thumbnails.small" @click="swapThumbnail(index)">
              <img class="lazy" :data-src-lazy="thumbnail" alt="thumbnail" width="100">
            </li>
          </ul>
        </div>
        <div class="body">
          <div class="description">
            <h4 class="h6">DESCRIPTION</h4>
            <p>{{ project.body }}</p>
          </div>
          <div class="stacks">
            <h4 class="h6">STACKS</h4>
            <ul class="list-unstyled">
              <li v-for="stack in project.stacks">{{ stack }}</li>
            </ul>
          </div>
          <a v-if="project.project_link" :href="project.project_link" class="btn btn-custom btn-grapefruit">PROJECT DEMO</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['modalId', 'project'],
    data() {
      return {
        selectedIndex: 0
      }
    },
    methods: {
      swapThumbnail(imgIndex) {
        this.selectedIndex = imgIndex
      }
    },
    mounted () {
      $(`#${this.project.id}`).on("show.bs.modal", function(){
        $(this).find(".lazy").each(function() {
            $(this).attr('src', $(this).attr('data-src-lazy'));
        });
      });
    }
  }
</script>

<style scoped>
  .image-thumbnails li {
    display: inline-block;
    margin-right: 15px;
  }
  .stacks li {
    background: #f6f6f6;
    padding: 10px;
    display: inline-block;
    cursor: default
  }
  .body > div {
    margin-bottom: 33px;
  }
  .stacks li {
    margin-right: 10px;
  }
  .modal-content {
    border: none;
  }
  .modal-title span {
    font-size: 0.9rem;
    font-weight: 700;
    display: inline-block;
    padding-left: 10px;
    color: #9b9b9b;
  }
  .image-thumbnails {
    margin-top: 15px;
  }
</style>