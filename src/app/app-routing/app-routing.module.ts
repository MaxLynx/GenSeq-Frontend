import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DnasequencesComponent } from '../dnasequences/dnasequences.component';
import { DnasequenceComponent } from '../dnasequence/dnasequence.component';
import { RnasequencesComponent } from 'src/app/rnasequences/rnasequences.component';
import { RnasequenceComponent } from 'src/app/rnasequence/rnasequence.component';
import { ProteinsequencesComponent } from 'src/app/proteinsequences/proteinsequences.component';
import { ProteinsequenceComponent } from 'src/app/proteinsequence/proteinsequence.component';
import { PlaceholderComponent } from 'src/app/placeholder/placeholder.component';


    const routes: Routes = [
        {
            path: '',
            component: PlaceholderComponent,
        },
        {
            path: 'dnasequences',
            component: DnasequencesComponent,
        },
        {
            path: 'dnasequences/:id',
            component: DnasequenceComponent,
        },
        {
            path: 'rnasequences',
            component: RnasequencesComponent,
        },
        {
            path: 'rnasequences/:id',
            component: RnasequenceComponent,
        },
        {
            path: 'proteinsequences',
            component: ProteinsequencesComponent,
        },
        {
            path: 'proteinsequences/:id',
            component: ProteinsequenceComponent,
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes),
            FormsModule
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }