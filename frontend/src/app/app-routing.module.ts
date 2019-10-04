import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {EducationComponent} from './resume/education/education.component';
import {WorkExperienceComponent} from './resume/work-experience/work-experience.component';
import {SkillsComponent} from './resume/skills/skills.component';
import {PipelineComponent} from './pipeline/pipeline.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pipeline', component: PipelineComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'resume/education', component: EducationComponent},
  {path: 'resume/work-experience', component: WorkExperienceComponent},
  {path: 'resume/skills', component: SkillsComponent},
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
