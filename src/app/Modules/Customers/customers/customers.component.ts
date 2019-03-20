import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from '../../../Services/app.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Customer } from '../../Model/user.model';
import { SelectionModel } from '@angular/cdk/collections';
import { LoaderService } from '../../../Services/loader.service';

import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
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
  recordList: any;
  dataSource: any;
  initialSelection = [];
allowMultiSelect = true;
  // tslint:disable-next-line:no-inferrable-types
  showSpinner: boolean = true;
  // public dataSource = new MatTableDataSource(this.recordList);
selection = new SelectionModel<Customer>(this.allowMultiSelect, this.initialSelection);
expandedElement: Customer;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private httpservice: AppService, private loaderservice: LoaderService) {
    this.dataSource = new MatTableDataSource< Customer>(this.recordList);

  }

  ngOnInit() {

    // this.dataFetch();
    // this.loaderservice.loadActive(true);
    this.showSpinner = true;
    this.getRecords();

  }

  getRecords() {
    this.httpservice.get().subscribe((res) => {
      // this.loaderservice.loadActive(false);
      this.showSpinner = false;
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
  filterData(searchText: string) {
    // const key = event.target.value;
    // console.log(key);
    // this.dataSource.filter = key.trim().toLowerCase();
    this.dataSource.filter = searchText.trim().toLowerCase();
  }

  isAllSelected() {
    const selectedRows = this.selection.selected.length;
    const dataRows = this.dataSource.data.length;
    return selectedRows === dataRows;
  }

  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(element => this.selection.select(element));
  }

  exportCsv(dataSource) {

  }

  createRecord() {

  }

  deleteRecord() {

  }
}
