import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatTabsModule,
  MatTreeModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { EducationComponent } from './resume/education/education.component';
import { WorkExperienceComponent } from './resume/work-experience/work-experience.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { PipelineComponent } from './pipeline/pipeline.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavComponent,
    HomeComponent,
    ResumeComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    PipelineComponent,
    LoginComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    AppRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    MatTreeModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
