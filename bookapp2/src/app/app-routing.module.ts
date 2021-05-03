import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  //{path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
  {path:'register',component: RegisterComponent},
  { path: 'toolbar', component: ToolbarComponent },
  {path: 'search', component: SearchComponent },
  {path: 'view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
