import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-base',
    templateUrl: './list-base.component.html',
    styleUrls: ['./list-base.component.scss']
})
export class ListBaseComponent implements OnInit {
    @Input('data') data: any;
    @Input('fakeData') fakeData: any;
    constructor() { }

    ngOnInit(): void {
    }
  
}
