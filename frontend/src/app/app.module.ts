import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from 'src/helpers/auth.interceptor';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { NetworkComponent } from './diagrams/network/network.component';
import { AboutmeComponent } from './resume/aboutme/aboutme.component';


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
    AdminUserListComponent,
    DiagramsComponent,
    NetworkComponent,
    AboutmeComponent
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
    MatFormFieldModule,
    MatInputModule,
    InfiniteScrollModule,
    MatRippleModule,
    MatDialogModule,
    MatBadgeModule,
    MatRadioModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [MoviesComponent, MovieDetailsDialog]
})
export class AppModule { }
