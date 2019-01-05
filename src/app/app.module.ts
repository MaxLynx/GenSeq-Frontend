import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DnasequencesComponent } from 'src/app/dnasequences/dnasequences.component';
import { DnasequenceComponent } from 'src/app/dnasequence/dnasequence.component';
import { ProteinsequencesComponent } from './proteinsequences/proteinsequences.component';
import { RnasequencesComponent } from './rnasequences/rnasequences.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RnasequenceComponent } from './rnasequence/rnasequence.component';
import { ProteinsequenceComponent } from './proteinsequence/proteinsequence.component';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent,
    DnasequencesComponent,
    DnasequenceComponent,
    ProteinsequencesComponent,
    RnasequencesComponent,
    PlaceholderComponent,
    RnasequenceComponent,
    ProteinsequenceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
