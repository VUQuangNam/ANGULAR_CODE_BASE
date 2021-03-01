import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-form-layout',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
    @Input() data: any;
    @Output() callback = new EventEmitter<any>();

    model: any = {};

    ngOnInit() { }

    onClick = () => {
        this.callback.emit(this.model);
    }
}
