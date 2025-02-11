import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects=[

    {
      name: 'Finca Tamaide',
      img:'https://i.postimg.cc/5ymsWZF2/Finca-Tamaide.png',
      url:'https://fincatamaide.es/',
      description:'Pequeño dashboard para una vivienda vacacional utilizando <strong>React</strong> como framework, revisada con <strong>SonarCloud</strong> y desplegada con <strong>CloudFlare</strong>.',
      utilities:[
        'React',
        'SonarCloud',
        'CloudFlare'
      ]
    },
    {
      name: 'Generador de QR',
      img:'https://i.postimg.cc/6qKMS9qP/QR-Generator.png',
      url:'https://qr-generator-5sb.pages.dev/',
      description:'Página en la cual mediante un texto elegido por el usuario se podrá generar un código QR el cual almacenara la información introducida por el usuario.',
      utilities:[
        'Angular',
        'SonarCloud',
        'CloudFlare'
      ]
    },
    {
      name: 'Near Spots [Actualmente Offline]',
      img:'https://i.postimg.cc/bvTQFmr7/image.png',
      url:'https://near-spot.vercel.app/',
      description:'Plataforma que utiliza ubicación en tiempo real del usuario para mostrar puntos de interés cercanos usando la API de Google Maps.',
      utilities:[
        'Angular',
        'Node.js',
        'Vercel',
        'Google Maps API',
        'Google Cloud'
      ]
    },
    {
      name: 'Gestor de libros',
      img:'https://i.postimg.cc/K8vqCCxx/image.png',
      url:'https://prueba-tecnica.pages.dev/',
      description:'Página de gestión de libros basado en una prueba técnica. El usuario podrá añadir, editar y eliminar libros de la lista. Podrás filtrar por géneros o cantidad de páginas.',
      utilities:[
        'Angular',
        'SonarCloud',
        'CloudFlare'
      ]
    }

  ]


}
