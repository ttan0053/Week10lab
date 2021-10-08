import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListactorComponent } from './listactor/listactor.component';
import { AddactorComponent } from './addactor/addactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { ManagemovieactorComponent } from './managemovieactor/managemovieactor.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PathNotfoundComponent } from './path-notfound/path-notfound.component';
import { DbServiceService } from './db-service.service';
import { YeartoagePipe } from './yeartoage.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ListactorComponent,
    AddactorComponent,
    UpdateactorComponent,
    AddmovieComponent,
    ListmovieComponent,
    ManagemovieactorComponent,
    PathNotfoundComponent,
    YeartoagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [DbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
