import {NgModule} from '@angular/core';
import {AppSharedModule} from '@app/shared/app-shared.module';
import {fillesRoutingModule} from './filles-routing.module';
import {fillesComponent} from './filles.component';

@NgModule({
    declarations: [fillesComponent],
    imports: [AppSharedModule, fillesRoutingModule]
})
export class fillesModule {}