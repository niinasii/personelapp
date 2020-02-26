import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigaatioComponent } from './navigaatio/navigaatio.component';
import { LomakeComponent } from './lomake/lomake.component';
import { ListausComponent } from './listaus/listaus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { MuokkaaComponent } from './muokkaa/muokkaa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigaatioComponent,
    LomakeComponent,
    NotfoundComponent,
    ListausComponent,
    DetailsComponent,
    MuokkaaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
