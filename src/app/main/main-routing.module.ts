import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {fillesComponent }from './filles/filles.component'

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
                        data: { permission: 'Pages.Tenant.Dashboard' }
                    },
                    {
                        path: 'filles',
                        loadChildren: () => import('./filles/filles.module').then(m =>m.fillesModule)
                    },
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' },
                    // {path: 'phonebook',component:FillesComponent}

                    
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
