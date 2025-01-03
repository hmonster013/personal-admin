import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  menuItems = [  
    { 
      title: 'Home', 
      link: '/' 
    },
    { 
      title: 'Blog', 
      link: '/blog' 
    },
    { 
      title: 'Skills', 
      link: '/skills'
    },
    {
      title: 'Services',
      children: [
        { 
          title: 'Web Development', 
          link: '/services/web' 
        },
        { 
          title: 'App Development', 
          link: '/services/app' 
        },
      ],
    },
    { 
      title: 'User', 
      link: '/user' 
    },
  ]

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }
}
