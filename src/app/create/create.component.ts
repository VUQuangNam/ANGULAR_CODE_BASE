import { Component, OnInit } from '@angular/core';
import { Export } from 'src/common/models/export.model';
import { Import } from 'src/common/models/import.model';

@Component({
    selector: 'app-create',
    template: `<app-form-layout
    [(data)]="formCreate"
    (callback)="callBackData($event)"
></app-form-layout>`
})
export class CreateComponent implements OnInit {
    model = new Import;
    formCreate: any;
    constructor() { }

    ngOnInit(): void {
        this.formCreate = this.model.viewCreate;
        this.formCreate[2].data = [{ value: 1 }, { value: 2 }, { value: 3 }]
    }

    callBackData = (data: any) => {
        console.log(data);
    }

}
