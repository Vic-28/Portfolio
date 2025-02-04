import { Component } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent {

studies= [
  {
    title: 'Técnico en Desarrollo de Aplicaciones Web',
    school: 'CIFP César Manrique',
    date: '2022-2024',
    utilities: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Spring-Boot','Java','C#','ASP.NET','Git','SQL','PostgreSQL','BootStrap','Postman','Sass','Docker','Linux']
  },
  {
    title: 'Técnico en Sistemas Microinformáticos y Redes',
    school: 'IES Las Galletas',
    date: '2019-2022',
    utilities: ['Linux','Linux Server', 'Windows Server', 'Redes', 'CMD','Bash','Montaje','Ofimática']
  }
]
}
