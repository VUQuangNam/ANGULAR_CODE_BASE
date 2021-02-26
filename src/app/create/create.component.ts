import { Component, OnInit } from '@angular/core';
import { Export } from 'src/common/models/export.model';
import { Import } from 'src/common/models/import.model';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    model = new Export;
    formCreate: any;
    constructor() { }

    ngOnInit(): void {
        this.formCreate = this.model.viewCreate;
    }

    handleImageCallback = (data: any) => {
        console.log(data);
    }

}
