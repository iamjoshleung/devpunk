<script>
export default {
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Lorem ipsum',
          subtitle: 'xxxx-1',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, 1',
          thumbnails: {
            small: [
              'https://placehold.it/330x330',
              'https://placehold.it/330x330',
              'https://placehold.it/330x330'
            ],
            medium: [
              'https://images.unsplash.com/reserve/iZkDQMqeQlqhoCIywoFv_6005485056_c8622e0824_o.jpg?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1428447207228-b396f310848b?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1429593886847-3cc52983f919?dpr=1&auto=compress,format&fit=crop&w=1199&h=551&q=80&cs=tinysrgb&crop=&bg='
            ], 
            high: [
              'https://images.unsplash.com/photo-1480365192324-83232188157e?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1486758206125-94d07f414b1c?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?dpr=1&auto=compress,format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg='
            ]
          },
          stacks: ['Ruby on Rails', 'VueJS', 'Redux', 'Heroku']
        },
        {
          id: 2,
          title: 'sit amet',
          subtitle: 'xxxx-2',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, 2',
          thumbnails: {
            small: [
              'https://placehold.it/330x330',
              'https://placehold.it/330x330',
              'https://placehold.it/330x330'
            ],
            medium: [
              'https://images.unsplash.com/reserve/iZkDQMqeQlqhoCIywoFv_6005485056_c8622e0824_o.jpg?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1428447207228-b396f310848b?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1429593886847-3cc52983f919?dpr=1&auto=compress,format&fit=crop&w=1199&h=551&q=80&cs=tinysrgb&crop=&bg='
            ], 
            high: [
              'https://images.unsplash.com/photo-1480365192324-83232188157e?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1486758206125-94d07f414b1c?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?dpr=1&auto=compress,format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg='
            ]
          },
          stacks: ['Ruby on Rails', 'VueJS', 'Redux', 'Heroku'],
          project_link: 'https://www.google.com/'
        },
        {
          id: 3,
          title: 'consectetuer adipiscing elit',
          subtitle: 'xxxx-3',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, 3',
          thumbnails: {
            small: [
              'https://placehold.it/330x330',
              'https://placehold.it/330x330',
              'https://placehold.it/330x330'
            ],
            medium: [
              'https://images.unsplash.com/reserve/iZkDQMqeQlqhoCIywoFv_6005485056_c8622e0824_o.jpg?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1428447207228-b396f310848b?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1429593886847-3cc52983f919?dpr=1&auto=compress,format&fit=crop&w=1199&h=551&q=80&cs=tinysrgb&crop=&bg='
            ], 
            high: [
              'https://images.unsplash.com/photo-1480365192324-83232188157e?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1486758206125-94d07f414b1c?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?dpr=1&auto=compress,format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg='
            ]
          },
          stacks: ['Ruby on Rails', 'VueJS', 'Redux', 'Heroku']
        },
        {
          id: 4,
          title: 'adipiscing elit',
          subtitle: 'xxxx-4',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, 3',
          thumbnails: {
            small: [
              'https://placehold.it/330x330',
              'https://placehold.it/330x330',
              'https://placehold.it/330x330'
            ],
            medium: [
              'https://images.unsplash.com/reserve/iZkDQMqeQlqhoCIywoFv_6005485056_c8622e0824_o.jpg?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1428447207228-b396f310848b?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1429593886847-3cc52983f919?dpr=1&auto=compress,format&fit=crop&w=1199&h=551&q=80&cs=tinysrgb&crop=&bg='
            ], 
            high: [
              'https://images.unsplash.com/photo-1480365192324-83232188157e?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1486758206125-94d07f414b1c?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=',
              'https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?dpr=1&auto=compress,format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg='
            ]
          },
          stacks: ['Ruby on Rails', 'VueJS', 'Redux', 'Heroku']
        }
      ]
    }
  }  
}
</script>