import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = 
[
  {path: '', redirectTo: '/aboutme', pathMatch: 'full'},
  {path: 'aboutme', component: AboutmeComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'studies',component:StudiesComponent},
  {path:'projects',component:ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
