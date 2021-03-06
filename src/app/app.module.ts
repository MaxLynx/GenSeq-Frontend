import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { RecaptchaModule } from 'angular-google-recaptcha';

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
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    DnasequencesComponent,
    DnasequenceComponent,
    ProteinsequencesComponent,
    RnasequencesComponent,
    PlaceholderComponent,
    RnasequenceComponent,
    ProteinsequenceComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ClipboardModule,
    RecaptchaModule.forRoot({
            siteKey: '6LcHdJAUAAAAADRdaIeTGZpXzayaiAxsS_fK8uP9',
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
