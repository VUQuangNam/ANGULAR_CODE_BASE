// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Helpers, HttpUtilsService, TypesUtilsService } from 'src/common/utils';

// Base Component
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [
        FormComponent,
    ],
    exports: [
        FormComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [
        // Utilities
        Helpers,
        HttpUtilsService,
        TypesUtilsService,

        // Configs
        // FilterConfig,

        // Services
        // ServiceClient
    ]
})
export class PartialsModule {
}