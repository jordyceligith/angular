import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import{ MiComponente } from './componets/mi-componente/mi-componente.component';
import{MiComponente} from './components/mi-componente/mi-componente.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
