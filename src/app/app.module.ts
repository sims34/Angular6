import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ChangeColorPipe } from './change-color.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SoftLanguageDirective } from './soft-language.directive';
import { ArticleComponent } from './article/article.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const routes : Routes = [
  {path : '', component : HomeComponent},
  {path : 'movies', component : MoviesComponent},
  {path : 'movies/:id', component : MovieDetailsComponent},
  {path : 'article', component : ArticleComponent},
  {path : '**', component : ErrorComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    ErrorComponent,
    ChangeColorPipe,
    MovieDetailsComponent,
    SoftLanguageDirective,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    HttpModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
