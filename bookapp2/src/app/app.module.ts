import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import{MatChipsModule}from '@angular/material/chips';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    SearchComponent,
    ViewComponent
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
     MatButtonModule ,
     MatCardModule,
     MatInputModule,
     MatIconModule,
     ReactiveFormsModule,
     MatAutocompleteModule,
     MatGridListModule,
     MatProgressBarModule,
     HttpClientModule,
     FormsModule,
     MatChipsModule,
     FlexLayoutModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
