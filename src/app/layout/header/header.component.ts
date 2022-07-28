import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  openMobileMenu: boolean = false;
  showOverlay: boolean = false;
  navLinks = [
    {
      title: 'Features',
      route: '/',
      hasDropdown: true,
      children: [
        {
          title: 'Todo List',
          route: '/',
          icon: 'icon-todo',
        },
        {
          title: 'Calender',
          route: '/',
          icon: 'icon-calendar',
        },
        {
          title: 'Reminders',
          route: '/',
          icon: 'icon-reminders',
        },
        {
          title: 'planning',
          route: '/',
          icon: 'icon-planning',
        },
      ],
    },
    {
      title: 'Company',
      route: '/',
      hasDropdown: true,
      hasChildIcon: false,
      children: [
        {
          title: 'History',
          route: '/',
          icon: '',
        },
        {
          title: 'Our Team',
          route: '/',
          icon: '',
        },
        {
          title: 'Blog',
          route: '/',
          icon: '',
        },
      ],
    },
    {
      title: 'Careers',
      route: '/',
      hasDropdown: false,
    },
    {
      title: 'About',
      route: '/',
      hasDropdown: false,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  mobileMenuToggle(): void {
    this.openMobileMenu = !this.openMobileMenu;
    this.showOverlay = true;
  }
  hideOverlay(): void {
    this.openMobileMenu = false;
    this.showOverlay = false;
  }
}
