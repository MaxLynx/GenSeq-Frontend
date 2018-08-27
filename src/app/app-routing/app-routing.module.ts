import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { DashboardComponent } from '../dashboard/dashboard.component';
    import { DnasequencesComponent } from '../dnasequences/dnasequences.component';
import { RnasequencesComponent } from 'src/app/rnasequences/rnasequences.component';
import { ProteinsequencesComponent } from 'src/app/proteinsequences/proteinsequences.component';
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
            path: 'rnasequences',
            component: RnasequencesComponent,
        },
        {
            path: 'proteinsequences',
            component: ProteinsequencesComponent,
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }