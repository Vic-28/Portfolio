import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiencia =[
    {
      title:'Desarrollador Junior Full Stack - Intern',
      company:'Eviden/Atos',
      date:'Marzo 2024 - Junio 2024',
      details:[
        'Liderar un pequeño equipo en proyectos internos de desarrollo web con metodologías ágiles.',
        'Implementación de prácticas de código limpio y aseguramiento de la calidad con herramientas como SonarQube.',
        'Uso de Git para el control de versiones y la colaboración en el desarrollo de software.',
        'Integración continua y despliegue continuo (CI/CD) para automatizar y mejorar los procesos de desarrollo y lanzamiento de aplicaciones.'
      ]
      ,
      utilitys:
      [
        'Sonar',
        'Git',
        'Angular',
        'Spring-Boot',
        'Mockito',
        'Agile',
        'TypeScript',
        'Java',
        'BootStrap',
      ]
    },
    {
      title:'Técnico Informático - Intern',
      company:'Ayuntamiento de Granadilla de Abona',
      date:'Marzo 2022 - Junio 2022',
      details:[
        'Diagnóstico y reparación de hardware y software en equipos de escritorio y portátiles.',
        'Mantenimiento preventivo y correctivo para asegurar la operatividad continua de los dispositivos.',
        'Solución de problemas de red y gestión de recursos de red como routers, switches y firewalls.',
        'Gestión de servidores.'
      ]
      ,
      utilitys:
      [
        'Windows Server',
        'Linux',
        'Linux Server',
        'Redes',
        'Hardware',
        'Software',
        'Mantenimiento',
      ]
    }
  ]

}
