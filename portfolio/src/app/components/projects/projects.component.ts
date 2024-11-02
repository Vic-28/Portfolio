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
    }

  ]


}
