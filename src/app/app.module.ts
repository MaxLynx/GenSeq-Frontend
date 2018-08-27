import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DnasequencesComponent } from 'src/app/dnasequences/dnasequences.component';
import { ProteinsequencesComponent } from './proteinsequences/proteinsequences.component';
import { RnasequencesComponent } from './rnasequences/rnasequences.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [
    AppComponent,
    DnasequencesComponent,
    ProteinsequencesComponent,
    RnasequencesComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
