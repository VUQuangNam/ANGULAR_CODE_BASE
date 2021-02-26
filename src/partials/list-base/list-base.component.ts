import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-base',
    templateUrl: './list-base.component.html',
    styleUrls: ['./list-base.component.scss']
})
export class ListBaseComponent implements OnInit {
    @Input() data: any;

    constructor() { }

    ngOnInit(): void {
    }

}
