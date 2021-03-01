import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { PartialsModule } from 'src/base/partials.module';

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
