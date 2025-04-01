import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiencia = [
    {
      title: 'Desarrollador Web',
      company: 'ITER',
      date: 'Abril 2025 - Actualmente',
      details: [
      ]
    },
    {
      title: 'Desarrollador Web',
      company: 'AdemyPro',
      date: 'Diciembre 2024 - Febrero 2025',
      details: [
        'Proporcioné asistencia técnica.',
        'Gestioné servicios web.',
        'Desarrollé herramientas orientadas a la empresa. (ERP)',
        'Implementé integración continua y despliegue continuo (CI/CD) para automatizar y mejorar los procesos de desarrollo y lanzamiento de aplicaciones.'
      ],
      utilitys: [
        'Sonar',
        'Git',
        'Angular',
        'TypeScript',
        'Java',
        'BootStrap',
        'Asistencia Técnica',
        'Gestión de Servicios Web',
        'Redes'
      ]
    },
    {
      title: 'Desarrollador Junior Full Stack - Intern',
      company: 'Eviden/Atos',
      date: 'Marzo 2024 - Junio 2024',
      details: [
        'Lideré un pequeño equipo en proyectos internos de desarrollo web utilizando metodologías ágiles.',
        'Implementé prácticas de código limpio y aseguramiento de la calidad con herramientas como SonarQube.',
        'Utilicé Git para el control de versiones y la colaboración en el desarrollo de software.',
        'Implementé integración continua y despliegue continuo (CI/CD) para automatizar y mejorar los procesos de desarrollo y lanzamiento de aplicaciones.'
      ],
      utilitys: [
        'Sonar',
        'Git',
        'Angular',
        'Spring-Boot',
        'Mockito',
        'Agile',
        'TypeScript',
        'Java',
        'BootStrap'
      ]
    },
    {
      title: 'Técnico Informático - Intern',
      company: 'Ayuntamiento de Granadilla de Abona',
      date: 'Marzo 2022 - Junio 2022',
      details: [
        'Diagnostiqué y reparé hardware y software en equipos de escritorio y portátiles.',
        'Realicé mantenimiento preventivo y correctivo para asegurar la operatividad continua de los dispositivos.',
        'Resolví problemas de red y gestioné recursos de red como routers, switches y firewalls.',
        'Gestioné servidores.'
      ],
      utilitys: [
        'Windows Server',
        'Linux',
        'Linux Server',
        'Redes',
        'Hardware',
        'Software',
        'Mantenimiento'
      ]
    }
  ];

}
