import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {fillesComponent} from './filles.component';

const routes: Routes = [{
    path: '',
    component: fillesComponent,
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class fillesRoutingModule {}