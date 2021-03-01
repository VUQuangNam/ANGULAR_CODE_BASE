import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-base',
    templateUrl: './list-base.component.html',
    styleUrls: ['./list-base.component.scss']
})
export class ListBaseComponent implements OnInit, OnChanges {
    @Input('data') data: any;
    @Input('fakeData') fakeData: any;

    constructor() { }

    ngOnChanges(): void {
        this.fakeData = [...this.fakeData];
    }

    ngOnInit(): void { }

}
