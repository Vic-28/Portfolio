import { Component } from '@angular/core';
import { Aboutme } from "../aboutme/aboutme";
import { Experience } from '../experience/experience';
import { Studies } from '../studies/studies';
import { Proyects } from '../proyects/proyects';

@Component({
  selector: 'app-dashboard',
  imports: [Aboutme,Experience,Studies,Proyects],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
