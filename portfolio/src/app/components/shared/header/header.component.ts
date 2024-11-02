import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navLinks = [
    { path: '/aboutme', label: 'Sobre Mi', class: 'active' },
    { path: '/experience', label: 'Experiencia',class:'inactive' },
    { path: '/studies', label: 'Estudios', class:'inactive' },
    { path: '/projects', label: 'Proyectos', class:'inactive' },
  ];

  navLinkSelected(index: number) {
    this.navLinks.forEach((nav, i) => {
      nav.class = i === index ? 'active' : 'inactive';
    });
  }

}
