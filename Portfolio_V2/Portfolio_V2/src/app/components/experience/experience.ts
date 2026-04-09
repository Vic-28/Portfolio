import { Component, signal } from '@angular/core';

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
})
export class Experience {
  readonly experiences = signal<ExperienceItem[]>([
    {
      company: 'ITER',
      logo: "*",
      role: 'Desarrollador Web',
      period: 'Abril 2025 - Abril 2026',
      description: 'Pequeña descripciíon del puesto en ITER.',
    },
    {
      company: 'Ademy',
      logo: "*",
      role: 'Desarrollador Web',
      period: 'Abril 2025 - Abril 2026',
      description: 'Pequeña descripciíon del puesto en ITER.',
    },
    {
      company: 'Eviden',
      role: 'Desarrollador Web',
      period: '2022 - 2024',
      description: 'Descripción de las responsabilidades y logros en este puesto.',
    },
  ]);
}
