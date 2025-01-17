import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { GuardiansPageComponent } from './guardians-page/guardians-page.component';
import { AntManPageComponent } from './ant-man-page/ant-man-page.component';
import { BlackPantherPageComponent } from './black-panther-page/black-panther-page.component';
import { DoctorStrangePageComponent } from './doctor-strange-page/doctor-strange-page.component';
import { SharedStylesComponent } from './shared-styles/shared-styles.component';
import { ThorPageComponent } from './thor-page/thor-page.component';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { TvShowsPageComponent } from './tv-shows-page/tv-shows-page.component';
import { IAmGrootPageComponent } from './i-am-groot-page/i-am-groot-page.component';
import { GaurdholidayPageComponent } from './gaurdholiday-page/gaurdholiday-page.component';
import { ShehulkPageComponent } from './shehulk-page/shehulk-page.component';
import { SecretinvasionPageComponent } from './secretinvasion-page/secretinvasion-page.component';
import { WerenightsPageComponent } from './werenights-page/werenights-page.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { SingupPageComponent } from './singup-page/singup-page.component';
import { AuthService } from 'server/auth.service';
import { AvatarPageComponent } from './avatar-page/avatar-page.component';
import { SearchPageComponent } from './search-page/search-page.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    MoviesPageComponent,
    GuardiansPageComponent,
    AntManPageComponent,
    BlackPantherPageComponent,
    DoctorStrangePageComponent,
    SharedStylesComponent,
    ThorPageComponent,
    TriviaPageComponent,
    TvShowsPageComponent,
    IAmGrootPageComponent,
    GaurdholidayPageComponent,
    ShehulkPageComponent,
    SecretinvasionPageComponent,
    WerenightsPageComponent,
    LeaderboardComponent,
    LoginPageComponent,
    SingupPageComponent,
    AvatarPageComponent,
    SearchPageComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
