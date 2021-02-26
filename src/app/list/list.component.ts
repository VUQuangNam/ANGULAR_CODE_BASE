import { Component, OnInit } from '@angular/core';
import { Export } from 'src/common/models/export.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    conFigTable = new Export;
    data13: any;
    constructor() { }

    ngOnInit(): void {
        this.data13 = this.conFigTable.collums;
    }

}
