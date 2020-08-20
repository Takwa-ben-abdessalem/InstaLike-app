import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import firebase module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CardsComponent } from './cards/cards.component';
import { RegisterModule } from './pages/register/register.module';
import { LoginModule } from './pages/login/login.module';
import { PostsModule } from './pages/posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    RegisterModule,
    LoginModule,
    PostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
