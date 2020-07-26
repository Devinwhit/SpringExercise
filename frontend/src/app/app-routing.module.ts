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
import { AuthGuardService } from './services/authguard/authguard.service';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AdminComponent } from './admin/admin.component';
import { AdminguardService } from './services/adminguard/adminguard.service';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { NetworkComponent } from './diagrams/network/network.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'movies', component: MoviesComponent},
  {path: 'pipeline', component: PipelineComponent},
  {path: 'resume', component: ResumeComponent, children: [
      {path: 'education', component: EducationComponent},
      {path: 'work-experience', component: WorkExperienceComponent},
      {path: 'skills', component: SkillsComponent}
    ]
  },
  {path: 'admin', component: AdminComponent, canActivate: [AdminguardService], children: [
      {path: 'userlist', component: AdminUserListComponent, canActivate: [AdminguardService]}
  ]},
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'diagrams', component: DiagramsComponent, children: [
    {path: 'network', component: NetworkComponent}
  ]},
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
