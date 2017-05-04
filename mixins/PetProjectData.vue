<script>
export default {
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'DevPunk',
          subtitle: 'PORTFOLIO',
          description: 'DevPunk is my portfolio website.',
          body: `<p>DevPunk is an awesome portfolio website powered by Vue.js and Heroku. It provides my future employers or clients with some information they need to know about me.<p>
            <p>In case you want to see code, here's <a href="https://github.com/joshuajazleung/devpunk">the git repo</a>.</p>
            `,
          thumbnails: {
            small: [
              '/img/projects/devpunk-home-top@300.jpg',
              '/img/projects/devpunk-home-bottom@300.jpg',
              '/img/projects/devpunk-clients@300.jpg',
              '/img/projects/devpunk-popup@300.jpg'
            ],
            medium: [
              '/img/projects/devpunk-home-top@900.jpg',
              '/img/projects/devpunk-home-bottom@900.jpg',
              '/img/projects/devpunk-clients@900.jpg',
              '/img/projects/devpunk-popup@900.jpg'
            ], 
            high: [
              '/img/projects/devpunk-home-top@1200.jpg',
              '/img/projects/devpunk-home-bottom@1200.jpg',
              '/img/projects/devpunk-clients@1200.jpg',
              '/img/projects/devpunk-popup@1200.jpg'
            ]
          },
          stacks: ['Vue.js', 'Nuxt.js', 'Heroku']
        },
        {
          id: 2,
          title: 'Reposy',
          subtitle: 'File hosting',
          description: 'Reposy is a file hosting website powered by Laravel.',
          body: `<p><a href='http://reposy.com/'>Reposy</a> is a file hosting website powered by Laravel. It's my first Laravel app implemented in 2014 while I was learning Laravel. I took me a month to finished the website. And I learned a lot by implementing it.</p>
            `,
          thumbnails: {
            small: [
              '/img/projects/reposy-home@300.jpg',
              '/img/projects/reposy-upload@300.jpg',
              '/img/projects/reposy-file@300.jpg'
            ],
            medium: [
              '/img/projects/reposy-home@900.jpg',
              '/img/projects/reposy-upload@900.jpg',
              '/img/projects/reposy-file@900.jpg'
            ], 
            high: [
              '/img/projects/reposy-home@1200.jpg',
              '/img/projects/reposy-upload@1200.jpg',
              '/img/projects/reposy-file@1200.jpg'
            ]
          },
          stacks: ['Laravel', 'PHP', 'MySQL', 'Linux', 'Apache', 'Bootstrap'],
          project_link: 'http://reposy.com/'
        },
        {
          id: 3,
          title: 'Klouderr',
          subtitle: 'File hosting',
          description: "Klouderr is another file hosting website similar to Reposy, but it's implemented in pure PHP.",
          body: `
            <p><a href="http://klouderr.com/">Klouderr</a> is another file hosting website similar to Reposy, but it's implemented in pure PHP. The website has served more than 10 millions webpages since its first launch.</p>
          `,
          thumbnails: {
            small: [
              '/img/projects/klouderr-home@300.jpg',
              '/img/projects/klouderr-download@300.jpg',
              '/img/projects/klouderr-login@300.jpg'
            ],
            medium: [
              '/img/projects/klouderr-home@900.jpg',
              '/img/projects/klouderr-download@900.jpg',
              '/img/projects/klouderr-login@900.jpg'
            ], 
            high: [
              '/img/projects/klouderr-home@1200.jpg',
              '/img/projects/klouderr-download@1200.jpg',
              '/img/projects/klouderr-login@1200.jpg'
            ]
          },
          stacks: ['Bootstrap', 'PHP', 'MySQL', 'Linux', 'Apache'],
          project_link: 'http://klouderr.com/'
        },
        {
          id: 4,
          title: 'VTumblr',
          subtitle: 'Web scrapper',
          description: 'VTumblr is a web scraper that collects videos off tumblr.com.',
          body: `<p>VTumblr is a web scraper powered by MEAN stack that collects videos off tumblr.com. It also supports multi-languages.</p>`,
          thumbnails: {
            small: [
              '/img/projects/vtumblr-home@300.jpg',
              '/img/projects/vtumblr-popup@300.jpg',
              '/img/projects/vtumblr-video@300.jpg',
              '/img/projects/vtumblr-new@300.jpg'
            ],
            medium: [
              '/img/projects/vtumblr-home@900.jpg',
              '/img/projects/vtumblr-popup@900.jpg',
              '/img/projects/vtumblr-video@900.jpg',
              '/img/projects/vtumblr-new@900.jpg'
            ], 
            high: [
              '/img/projects/vtumblr-home@1200.jpg',
              '/img/projects/vtumblr-popup@1200.jpg',
              '/img/projects/vtumblr-video@1200.jpg',
              '/img/projects/vtumblr-new@1200.jpg'
            ]
          },
          stacks: ['MongoDB', 'ExpressJS', 'AngularJS', 'Node.js'],
          project_link: 'https://github.com/joshuajazleung/tumble-video'
        },
        {
          id: 5,
          title: 'KillingBeans',
          subtitle: 'Game',
          description: `Killing Beans is a game I created in 2014.`,
          body: `Killing Beans is a game I created in 2014 for my class, Introduction to Computer Science, final project. I know it's not a pet project by definition, but it's an inspiring game project for a student with no prior programming knowledge. And what's more important, it's my first game project ever.`,
          thumbnails: {
            small: [
              '/img/projects/killingbeans-home@300.jpg',
              '/img/projects/killingbeans-game-screen@300.jpg',
              '/img/projects/killingbeans-game-play@300.jpg'
            ],
            medium: [
              '/img/projects/killingbeans-home@900.jpg',
              '/img/projects/killingbeans-game-screen@900.jpg',
              '/img/projects/killingbeans-game-play@900.jpg'
            ], 
            high: [
              '/img/projects/killingbeans-home@1200.jpg',
              '/img/projects/killingbeans-game-screen@1200.jpg',
              '/img/projects/killingbeans-game-play@1200.jpg'
            ]
          },
          stacks: ['Processing.js', 'HTML', 'CSS', 'jQuery', 'Javascript'],
          project_link: 'http://mylinux.langara.bc.ca/~hleung46/1050/'
        }
      ]
    }
  }  
}
</script>