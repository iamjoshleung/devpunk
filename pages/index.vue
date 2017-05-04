<template>
  <div id="home">
    <div class="sectionLayout--insetColumn">
      <h1>Who is this guy?</h1>
    </div>
    <div class="sectionLayout--insetColumn">
      <p>Hey, I am an independent full stack web developer from Hong Kong. Currently I live in Vancouver, Canada, working my way to stay here for good. I work primaily with Vue.js, Node.js and Rails at this moment, and constantly enhancing my skills on React, React Native.</p>
      <p>I have been working as a full stack developer for a year now. Previously worked at some web design companies to deliver AWESOME websites for clients,  mainly using Wordpress, Opencart and some ecommerce platforms as developing tools.</p>
      <p>To stay creative, I create pet projects from time to time. And hopefully someday I will create a KICKASS app that will "make the world a better place".</p>
      <p>Learning new things is what I do in my spare time. As a web developer I know the industry is constantly changing. New things come and old things go. Sometimes I check out <a href="https://wwww.edx.org">EDX.org</a> to learn topics I hadn't explored, such as data science and virtual reality. Sometimes I would like to refine my programming foundation by joining free courses from <a href="https://ocw.mit.edu/index.htm">MIT OpenCourseWare</a>. Always stay humble and hungry, right? :)</p>
      <p class="text-center">
        <img src="https://media.giphy.com/media/8mFKxTl2VIjVS/giphy.gif" width="330" alt="silicon valley hbo gif">
      </p>
    </div>
    <div id="contact">
      <div class="container-fluid">
        <div class="row">
          <div class="offset-md-1 col-md-10 offset-xl-3 col-xl-6">
            <h3>Joshua Leung</h3>
            <h4 class="subtitle">I am always here for more works. Please feel free to contact me.</h4>
            <div class="icons-list">
              <ul class="list-unstyled">
                <li class="icons-list__item">
                  <a href="mailto:joshuajazleung@gmail.com" rel="nofollow" target="_blank" title="Send me an email">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    Email
                  </a>
                </li>
                <li class="icons-list__item">
                  <a href="https://github.com/joshuajazleung" rel="nofollow" target="_blank" title="Look through my Github profile">
                    <i class="fa fa-github" aria-hidden="true"></i>
                    Github
                  </a>
                </li>
                <li class="icons-list__item">
                  <a href="http://stackoverflow.com/users/4821710/joshua-leung" rel="nofollow" target="_blank" title="See my StackOverflow profile">
                    <i class="fa fa-stack-overflow" aria-hidden="true"></i>
                    Stack Overflow
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        img_intro: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?dpr=1&auto=format&fit=crop&w=1500&h=972&q=80&cs=tinysrgb&crop=&bg='
      }
    },
    head () {
      return {
        title: 'About me',
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>

<style scoped>
  #home {
    margin-top: 50px;
  }

  .subtitle {
    color: #a0a0a0;
  }

  .sectionLayout--insetColumn {
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1em;
  }

  .sectionLayout--insetColumn p {
    margin-bottom: 1.5em;
  }

  .sectionLayout--outsetColumn {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }

  .sectionLayout--outsetColumn {
    margin-top: 52px;
  }

  .sectionLayout--outsetColumn+.sectionLayout--insetColumn {
    margin-top: 50px;
  }

  p {
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -.003em;
  }

  .thumbnail {
    width: 100%;
  }

  #contact {
    margin-top: 50px;
    padding-top: 3em;
    padding-bottom: 3em;

  }

  #contact .col-md-4 {
    margin-bottom: 2em;
  }

  .btn-large {
    padding: 1rem 1.7rem;
    font-size: 1.5rem;
    border-radius: 10rem;
  }

  .btn-dania {
    background: none;
    color: #be93c5;
    border: 2px solid #be93c5;
    border: 2px solid -webkit-linear-gradient(to right, #be93c5, #7bc6cc);
    border: 2px solid linear-gradient(to right, #be93c5, #7bc6cc);

  }

  .icons-list li {
    display: block;
    padding: 1em 0.5em;
    font-size: 1.3rem;
  }

  .icons-list__item a {
    color: #373737;
  }

  @media (min-width: 768px) {
    #contact {
      padding-top: 2em;
      padding-bottom: 6em;
    }

    #contact .col-md-4 {
      margin-bottom: 0;
    }

    .icons-list li { 
      display: inline-block;
      width: 33.3%;
    }
  }
</style>