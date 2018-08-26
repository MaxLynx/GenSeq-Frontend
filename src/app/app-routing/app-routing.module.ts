import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { DashboardComponent } from '../dashboard/dashboard.component';
    import { DnasequencesComponent } from '../dnasequences/dnasequences.component';


    const routes: Routes = [
        {
            path: '',
            component: DnasequencesComponent,
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