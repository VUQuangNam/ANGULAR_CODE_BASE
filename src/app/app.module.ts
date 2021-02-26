import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PartialsModule } from 'src/partials/partials.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PartialsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
