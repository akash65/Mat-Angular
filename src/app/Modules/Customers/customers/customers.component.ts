import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from '../../../Services/app.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Customer } from '../../Model/user.model';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'phone', 'city', 'Actions'];
  recordList: any;
  dataSource: any;
  initialSelection = [];
allowMultiSelect = true;
selection = new SelectionModel<Customer>(this.allowMultiSelect, this.initialSelection);
  // public dataSource = new MatTableDataSource(this.recordList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private httpservice: AppService, ) {
    // this.datasource = new MatTableDataSource< Customer>(this.recordList);

  }

  ngOnInit() {

    // this.dataFetch();
    this.httpservice.get().subscribe((res) => {

      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
      (err) => {
        console.log('error message', err);
      });
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  // dataFetch() {
  //   this.httpservice.get('http://localhost:3000/customers')
  //   .subscribe((res) => {
  //     console.log(res);
  //     return this.recordList = res;
  //   },
  //     (err) => {
  //       console.log(err);
  //     });
  // }
  filterData(event) {
    const key = event.target.value;
    // console.log(key);
    this.dataSource.filter = key.trim().toLowerCase();
  }

  isAllSelected() {
    const selectedRows = this.selection.selected.length;
    const dataRows = this.dataSource.data.length;
    return selectedRows === dataRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(element => {
      this.selection.select(element);
    });
  }
}
