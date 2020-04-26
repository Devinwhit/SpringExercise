import { NgModule } from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {EducationComponent} from './resume/education/education.component';
import {WorkExperienceComponent} from './resume/work-experience/work-experience.component';
import {SkillsComponent} from './resume/skills/skills.component';
import {PipelineComponent} from './pipeline/pipeline.component';
import {LoginComponent} from './login/login.component';
import {MoviesComponent} from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'pipeline', component: PipelineComponent},
  {path: 'resume', component: ResumeComponent, children: [
      {path: 'education', component: EducationComponent},
      {path: 'work-experience', component: WorkExperienceComponent},
      {path: 'skills', component: SkillsComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging purposes only!
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
