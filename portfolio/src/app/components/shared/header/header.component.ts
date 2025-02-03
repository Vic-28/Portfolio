import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navLinks = [
    { path: '/aboutme', label: 'Sobre Mi', class: 'active' },
    { path: '/experience', label: 'Experiencia',class:'inactive' },
    { path: '/studies', label: 'Estudios', class:'inactive' },
    { path: '/projects', label: 'Proyectos', class:'inactive' },
  ];

  ngOnInit() {
    const headerTitle = document.querySelector('#title');
    if (headerTitle) {
      headerTitle.addEventListener('click', () => {
        this.router.navigate(['/']);
      });
    }
  }

  navLinkSelected(index: number) {
    this.navLinks.forEach((nav, i) => {
      nav.class = i === index ? 'active' : 'inactive';
    });
  }

}
