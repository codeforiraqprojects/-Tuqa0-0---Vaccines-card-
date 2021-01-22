import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { firebaseConfig } from '../credentials';



const firebaseConfig = {
    apiKey: "AIzaSyDXeFWoOq2cXVdfo2QFTYVQKUGhJ1dqig4",
    authDomain: "child-vaccines.firebaseapp.com",
    databaseURL: "https://child-vaccines.firebaseio.com",
    projectId: "child-vaccines",
    storageBucket: "",
    messagingSenderId: "863403205443",
    appId: "1:863403205443:web:6c6ef01228caf6cc"
  };



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
	AngularFireDatabaseModule,
	AngularFireAuthModule
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
