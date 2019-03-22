import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from '../../../Services/app.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Customer } from '../../Model/user.model';
import { SelectionModel } from '@angular/cdk/collections';
<<<<<<< HEAD
import { LoaderService } from '../../../Services/loader.service';

import { trigger, state, style, transition, animate} from '@angular/animations';
=======

>>>>>>> origin/master

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
<<<<<<< HEAD
  styleUrls: ['./customers.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      // transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class CustomersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'phone', 'city', 'Action'];
=======
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'phone', 'city', 'Actions'];
>>>>>>> origin/master
  recordList: any;
  dataSource: any;
  initialSelection = [];
allowMultiSelect = true;
<<<<<<< HEAD
  // tslint:disable-next-line:no-inferrable-types
  showSpinner: boolean = true;
  // public dataSource = new MatTableDataSource(this.recordList);
selection = new SelectionModel<Customer>(this.allowMultiSelect, this.initialSelection);
expandedElement: Customer;

=======
selection = new SelectionModel<Customer>(this.allowMultiSelect, this.initialSelection);
  // public dataSource = new MatTableDataSource(this.recordList);
>>>>>>> origin/master

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


<<<<<<< HEAD
  constructor(private httpservice: AppService, private loaderservice: LoaderService) {
    this.dataSource = new MatTableDataSource< Customer>(this.recordList);
=======
  constructor(private httpservice: AppService, ) {
    // this.datasource = new MatTableDataSource< Customer>(this.recordList);
>>>>>>> origin/master

  }

  ngOnInit() {

    // this.dataFetch();
<<<<<<< HEAD
    // this.loaderservice.loadActive(true);
    this.showSpinner = true;
    this.getRecords();

  }

  getRecords() {
    this.httpservice.get().subscribe((res) => {
      // this.loaderservice.loadActive(false);
      this.showSpinner = false;
=======
    this.httpservice.get().subscribe((res) => {

>>>>>>> origin/master
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
<<<<<<< HEAD
  filterData(searchText: string) {
    // const key = event.target.value;
    // console.log(key);
    // this.dataSource.filter = key.trim().toLowerCase();
    this.dataSource.filter = searchText.trim().toLowerCase();
=======
  filterData(event) {
    const key = event.target.value;
    // console.log(key);
    this.dataSource.filter = key.trim().toLowerCase();
>>>>>>> origin/master
  }

  isAllSelected() {
    const selectedRows = this.selection.selected.length;
    const dataRows = this.dataSource.data.length;
    return selectedRows === dataRows;
  }

  masterToggle() {
<<<<<<< HEAD
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(element => this.selection.select(element));
  }

  exportCsv(dataSource) {

  }

  createRecord() {

  }

  deleteRecord() {

=======
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(element => {
      this.selection.select(element);
    });
>>>>>>> origin/master
  }
}
