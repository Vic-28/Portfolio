import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface ExperienceItem {
  company: string;
  role: string;
  logo?: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  readonly openIndex = signal<number | null>(null);

  readonly experiences = signal<ExperienceItem[]>([
    {
      company: 'ITER',
      logo: "https://i.postimg.cc/QxXsMLCL/27-logo-iter.png",
      role: 'Desarrollador Web',
      period: 'Abril 2025 - Abril 2026',
      description: 'Desarrollo y mantenimiento de una plataforma interna de compras orientada a optimizar el flujo operativo y financiero de la organización. Participación en la implementación de funcionalidades para la gestión centralizada de información económica y la mejora de la trazabilidad de los procesos de compra.',
    },
    {
      company: 'Ademy',
      logo: "https://i.postimg.cc/Jhx9mPY2/edificio-de-oficinas.png",
      role: 'Desarrollador Web',
      period: 'Abril 2025 - Abril 2026',
      description: 'Desarrollador Full Stack especializado en Angular y Spring Boot, con experiencia en diseño de aplicaciones escalables, desarrollo de APIs REST y liderazgo de equipos en entornos ágiles. Comprometido con la calidad del código y la mejora continua.',
    },
    {
      company: 'Eviden',
      logo: "https://i.postimg.cc/YCqPR1C9/Eviden.jpg",
      role: 'Desarrollador Web',
      period: '2022 - 2024',
      description: 'Especialista en soporte IT con experiencia en administración de servidores, redes y conectividad, resolución de incidencias y formación a usuarios. Conocimientos en hardware, software y ciberseguridad, con enfoque en mantenimiento y optimización de sistemas.',
    },
  ]);

  toggleExperience(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }

  isExpanded(index: number): boolean {
    return this.openIndex() === index;
  }

  panelId(index: number): string {
    return `experience-panel-${index}`;
  }
}
