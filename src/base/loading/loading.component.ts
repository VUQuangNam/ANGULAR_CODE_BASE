import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnChanges {
    @Input() data: boolean | undefined;
    constructor() { }

    ngOnChanges(): void { }

    ngOnInit() { }

}
