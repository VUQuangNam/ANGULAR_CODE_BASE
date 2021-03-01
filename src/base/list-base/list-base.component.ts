import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
    selector: 'app-list-base',
    templateUrl: './list-base.component.html',
    styleUrls: ['./list-base.component.scss']
})
export class ListBaseComponent implements OnInit, OnChanges {
    @Input('data') data: any;
    @Input('fakeData') fakeData: any;
    displayedColumns = [];
    dataSource: any = [];
    @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
    @ViewChild(MatSort) sort: MatSort | undefined;

    constructor() { }

    ngOnChanges(): void {
        this.displayedColumns = this.data.map((x: { id: any; }) => { return x.id });
        this.dataSource = new MatTableDataSource(this.fakeData)
        this.fakeData = [...this.fakeData];
    }

    ngOnInit(): void { }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter = (value: any) => {
        const filterValue = (value.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
