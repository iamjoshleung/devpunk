<script>
export default {
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Bricheer',
          subtitle: 'ONLINE JEWELRY',
          description: 'Bricheer is a online jewelry store powered by opencart that allows users to phurchase high quality jewelry.',
          body: '<a href="https://www.bricheer.com">Bricheer</a> is a online jewelry store powered by opencart that allows users to phurchase high quality jewelry.',
          thumbnails: {
            small: [
              '/img/projects/bricheer-home-top@300.jpg',
              '/img/projects/bricheer-sales@300.jpg',
              '/img/projects/bricheer-home-bottom@300.jpg',
              '/img/projects/bricheer-product@300.jpg'
            ],
            medium: [
              '/img/projects/bricheer-home-top@900.png',
              '/img/projects/bricheer-sales@900.png',
              '/img/projects/bricheer-home-bottom@900.png',
              '/img/projects/bricheer-product@900.png'
            ], 
            high: [
              '/img/projects/bricheer-home-top@900.png',
              '/img/projects/bricheer-sales@900.png',
              '/img/projects/bricheer-home-bottom@900.png',
              '/img/projects/bricheer-product@900.png'
            ]
          },
          stacks: ['Opencart', 'PHP', 'MySQL', 'Linux', 'Apache'],
          project_link: 'https://www.bricheer.com/'
        },
        {
          id: 2,
          title: 'Fit Palace',
          subtitle: 'GYM',
          description: 'Fit Palace is a fitness center located in Richmond, BC. The website allows users to join membership and access to their schedules.',
          body: '<a href="http://www.fitpalace.ca/">Fit Palace</a> is a fitness center located in Richmond, BC. The website allows users to join membership and access to their schedules.',
          thumbnails: {
            small: [
              '/img/projects/fitpalace-home@300.jpg',
              '/img/projects/fitpalace-member@300.jpg',
              '/img/projects/fitpalace-fa@300.jpg'
            ],
            medium: [
              '/img/projects/fitpalace-home@900.jpg',
              '/img/projects/fitpalace-member@900.jpg',
              '/img/projects/fitpalace-fa@900.jpg'
            ], 
            high: [
              '/img/projects/fitpalace-home@1200.jpg',
              '/img/projects/fitpalace-member@1200.jpg',
              '/img/projects/fitpalace-fa@1200.jpg'
            ]
          },
          stacks: ['Wordpress', 'PHP', 'MySQL', 'Linux', 'Apache'],
          project_link: 'http://www.fitpalace.ca/'
        },
        {
          id: 3,
          title: 'Harrison Resort',
          subtitle: 'Hot Springs Resort',
          description: 'HarrisonResort is a Wordpress powered business website. It allows people to browser their services and create bookings.',
          body: '<a href="http://www.harrisonresort.com/">HarrisonResort</a> is a Wordpress powered business website. It allows people to browser their services and create bookings.',
          thumbnails: {
            small: [
              '/img/projects/harrison-home@300.jpg',
              '/img/projects/harrison-activities@300.jpg',
              '/img/projects/harrison-accommodations@300.jpg'
            ],
            medium: [
              '/img/projects/harrison-home@900.jpg',
              '/img/projects/harrison-activities@900.jpg',
              '/img/projects/harrison-accommodations@900.jpg'
            ], 
            high: [
              '/img/projects/harrison-home@1200.jpg',
              '/img/projects/harrison-activities@1200.jpg',
              '/img/projects/harrison-accommodations@1200.jpg'
            ]
          },
          stacks: ['Wordpress', 'PHP', 'MySQL', 'Linux', 'Apache'],
          project_link: 'http://www.harrisonresort.com/'
        },
        {
          id: 4,
          title: 'papabus',
          subtitle: 'Transportation service',
          description: 'PapaBus is a Uber-like transportation service that provides services including taxi hailing, private car hailing, Hitch (social ride-sharing).',
          body: '<a href="https://papabus.ca/">PapaBus</a> is a Uber-like transportation service that provides services including taxi hailing, private car hailing, Hitch (social ride-sharing).',
          thumbnails: {
            small: [
              '/img/projects/papabus-home@300.jpg',
              '/img/projects/papabus-select-bus@300.jpg',
              '/img/projects/papabus-popup@300.jpg'
            ],
            medium: [
              '/img/projects/papabus-home@900.jpg',
              '/img/projects/papabus-select-bus@900.jpg',
              '/img/projects/papabus-popup@900.jpg'
            ], 
            high: [
              '/img/projects/papabus-home@1200.jpg',
              '/img/projects/papabus-select-bus@1200.jpg',
              '/img/projects/papabus-popup@1200.jpg'
            ]
          },
          stacks: ['PHP', 'Laravel', 'Apache', 'Linux'],
          project_link: 'https://papabus.ca/'
        }
      ]
    }
  }  
}
</script>