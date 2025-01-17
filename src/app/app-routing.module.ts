import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GuardiansPageComponent } from './guardians-page/guardians-page.component';
import { AntManPageComponent } from './ant-man-page/ant-man-page.component';
import { BlackPantherPageComponent } from './black-panther-page/black-panther-page.component';
import { DoctorStrangePageComponent } from './doctor-strange-page/doctor-strange-page.component';
import { ThorPageComponent } from './thor-page/thor-page.component';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { TvShowsPageComponent } from './tv-shows-page/tv-shows-page.component';
import { IAmGrootPageComponent } from './i-am-groot-page/i-am-groot-page.component';
import { WerenightsPageComponent } from './werenights-page/werenights-page.component';
import { SecretinvasionPageComponent } from './secretinvasion-page/secretinvasion-page.component';
import { ShehulkPageComponent } from './shehulk-page/shehulk-page.component';
import { GaurdholidayPageComponent } from './gaurdholiday-page/gaurdholiday-page.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SingupPageComponent } from './singup-page/singup-page.component';
import { AvatarPageComponent } from './avatar-page/avatar-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [ 
  {path:'',component: HomePageComponent},
  {path:'movies',component: MoviesPageComponent},
  {path:'guardians',component: GuardiansPageComponent},
  {path:'ant-man',component: AntManPageComponent},
  {path:'black-panther',component: BlackPantherPageComponent},
  {path:'doctor-strange',component: DoctorStrangePageComponent},
  {path:'thor',component: ThorPageComponent},
  {path:'trivia',component: TriviaPageComponent},
  {path:'tv-shows',component: TvShowsPageComponent},
  {path:'i-am-groot',component: IAmGrootPageComponent},
  {path:'werenights',component: WerenightsPageComponent},
  {path:'secretinvasion',component: SecretinvasionPageComponent},
  {path:'shehulk',component: ShehulkPageComponent},
  {path:'gaurdholiday',component: GaurdholidayPageComponent},
  {path:'leaderboard',component: LeaderboardComponent },
  {path:'login',component: LoginPageComponent},
  {path:'singup',component: SingupPageComponent},
  {path:'avatar',component: AvatarPageComponent},
  {path:'search',component: SearchPageComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
