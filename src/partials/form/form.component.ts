import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-form-layout',
    templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {
    @Input() data: any;
    @Output() callback = new EventEmitter<any>();
    model: any = {};

    ngOnInit() {
        this.data[2].data = [{ value: 1 }, { value: 2 }, { value: 3 }]
        console.log(this.model['id']);
    }

    onClick = () => {
        this.callback.emit(this.model);
    }
}
