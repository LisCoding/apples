import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'index', component: LoginComponent },
{ path: 'create', component: CreateComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'answer/:id', component: AnswerComponent },
{ path: 'show/:id', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
