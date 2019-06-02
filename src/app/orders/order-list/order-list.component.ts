import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, PageEvent } from '@angular/material';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 49.99,
    description: '1lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 49.99,
    description: '1lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 49.99,
    description: '1lbs of tuna',
    isChecked: false
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  constructor() {}
  dataSource: MatTableDataSource<object>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  page;

  displayedColums: string[] = [
    'actions',
    'orderNumber',
    'orderDate',
    'description',
    'total'
  ];
  length = 100;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];

  ngOnInit() {
    this.loadData(0, this.pageSize);
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    for (const elm of ELEMENT_DATA) {
      elm.isChecked = !elm.isChecked;
    }
  }

  onPageChange($event: PageEvent) {
    this.loadData($event.pageIndex, $event.pageSize);
  }

  private loadData(pageIndex: number, pageSize: number) {
    this.dataSource = new MatTableDataSource<object>(
      ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize)
    );
  }
}
