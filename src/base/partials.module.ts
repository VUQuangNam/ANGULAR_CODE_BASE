// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Helpers, HttpUtilsService, TypesUtilsService } from 'src/common/utils';


import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormComponent } from './form/form.component';
import { ListBaseComponent } from './list-base/list-base.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
        FormComponent,
        ListBaseComponent,
        LoadingComponent,
    ],
    exports: [
        FormComponent,
        ListBaseComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatRadioModule,
        MatProgressSpinnerModule
    ],
    providers: [
        Helpers,
        HttpUtilsService,
        TypesUtilsService,
    ]
})
export class PartialsModule {
}
