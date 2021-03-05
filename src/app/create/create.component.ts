import { Component, OnInit } from '@angular/core';
import { Export } from 'src/common/models/export.model';
import { Import } from 'src/common/models/import.model';

@Component({
    selector: 'app-create',
    template: `
    <app-loading [data]="isLoading"></app-loading>
    <app-form-layout [(data)]="formCreate" (callback)="callBackData($event)"></app-form-layout>
    `
})
export class CreateComponent implements OnInit {
    model = new Import;
    formCreate: any;
    isLoading = false;
    constructor() { }

    ngOnInit(): void {
        this.formCreate = this.model.viewCreate;
        this.isLoading = true;
        this.formCreate[2].data = [{ value: 1 }, { value: 2 }, { value: 3 }]
        // setTimeout(() => {
        //     this.isLoading = true;
        // }, 3000);
    }

    callBackData = (data: any) => {
        console.log(data);
    }

}
