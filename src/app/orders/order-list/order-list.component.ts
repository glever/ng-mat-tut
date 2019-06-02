import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

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
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColums: string[] = [
    'actions',
    'orderNumber',
    'orderDate',
    'description',
    'total'
  ];

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    for (const elm of ELEMENT_DATA) {
      elm.isChecked = !elm.isChecked;
    }
  }
}
