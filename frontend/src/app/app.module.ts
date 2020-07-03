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
  MatTreeModule, MatFormFieldModule, MatInputModule,
  MatRippleModule, MatDialogModule, MatBadgeModule, MatRadioModule,
  MatTooltipModule
} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
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
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MoviesComponent, MovieDetailsDialog } from './movies/movies.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from 'src/helpers/auth.interceptor';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';


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
    MoviesComponent,
    MovieDetailsDialog,
    RegisterComponent,
    UnauthorizedComponent,
    ProfileComponent,
    PasswordResetComponent,
    AdminComponent,
    AdminUserListComponent
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
    MatInputModule,
    InfiniteScrollModule,
    MatRippleModule,
    MatDialogModule,
    MatBadgeModule,
    MatRadioModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [MoviesComponent, MovieDetailsDialog]
})
export class AppModule { }
