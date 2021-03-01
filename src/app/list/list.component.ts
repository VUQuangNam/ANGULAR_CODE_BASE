import { Component, OnInit } from '@angular/core';
import { Export } from 'src/common/models/export.model';

@Component({
    selector: 'app-list',
    template: `<app-loading [data]="isLoading"></app-loading>
    <app-list-base [(data)]="data13" [fakeData]= "fakeData"></app-list-base>
    `
})
export class ListComponent implements OnInit {
    conFigTable = new Export;
    data13: any;
    isLoading = true;
    fakeData = [
        {
            id: 1,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "abc",
            store: "xyz",
            created_at: "01-02",
            received_at: '02-02',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        },
        {
            id: 2,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "xyz",
            store: "abc",
            created_at: "2019",
            received_at: '2020',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        }, {
            id: 1,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "abc",
            store: "xyz",
            created_at: "01-02",
            received_at: '02-02',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        },
        {
            id: 2,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "xyz",
            store: "abc",
            created_at: "2019",
            received_at: '2020',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        }, {
            id: 1,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "abc",
            store: "xyz",
            created_at: "01-02",
            received_at: '02-02',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        },
        {
            id: 2,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "xyz",
            store: "abc",
            created_at: "2019",
            received_at: '2020',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        }, {
            id: 1,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "abc",
            store: "xyz",
            created_at: "01-02",
            received_at: '02-02',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        },
        {
            id: 2,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "xyz",
            store: "abc",
            created_at: "2019",
            received_at: '2020',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        }, {
            id: 1,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "abc",
            store: "xyz",
            created_at: "01-02",
            received_at: '02-02',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        },
        {
            id: 2,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "xyz",
            store: "abc",
            created_at: "2019",
            received_at: '2020',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        }, {
            id: 1,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "abc",
            store: "xyz",
            created_at: "01-02",
            received_at: '02-02',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        },
        {
            id: 2,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "xyz",
            store: "abc",
            created_at: "2019",
            received_at: '2020',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        }, {
            id: 1,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "abc",
            store: "xyz",
            created_at: "01-02",
            received_at: '02-02',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        },
        {
            id: 2,
            created_by: {
                Name: "Hoàng Thế Tài"
            },
            source: "xyz",
            store: "abc",
            created_at: "2019",
            received_at: '2020',
            status_name: 'Đã chuyển',
            total_quantity: 10,
            total_price: 1000000,
            note: 'Chưa thanh toán',
            updated_at: 'Đã thanh toán'
        }
    ]
    constructor() { }

    ngOnInit(): void {
        this.data13 = this.conFigTable.collums;
        // setTimeout(() => {
        //     this.isLoading = true;
        // }, 3000);
    }

}
