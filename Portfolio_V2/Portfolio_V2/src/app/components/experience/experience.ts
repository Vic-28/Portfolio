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
      description: 'Pequeña descripciíon del puesto en ITER.',
    },
    {
      company: 'Ademy',
      logo: "https://i.postimg.cc/Jhx9mPY2/edificio-de-oficinas.png",
      role: 'Desarrollador Web',
      period: 'Abril 2025 - Abril 2026',
      description: 'Pequeña descripciíon del puesto en ITER.',
    },
    {
      company: 'Eviden',
      logo: "https://i.postimg.cc/YCqPR1C9/Eviden.jpg",
      role: 'Desarrollador Web',
      period: '2022 - 2024',
      description: 'Descripción de las responsabilidades y logros en este puesto.',
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
