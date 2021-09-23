import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'views-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  date = new Date();
  endDate = this.date.setTime(this.date.getTime() + (7 * 24 * 60 * 60 * 1000));
  range = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(this.endDate)
  });
  contractorTypeList = [{
    value: 'Traditional',
    text: 'Traditional'
  }];
  statusList = [{
    value: '0',
    text: 'Active'
  }, {
    value: '1',
    text: 'Signature pending'
  }];
  displayedColumns = ['avatar', 'contractorName', 'type', 'startDate', 'amount', 'status', 'action'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>();
  showFilters: boolean = false;
  minAmount!: number;
  maxAmount!: number;
  contractorName!: string;

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.data.push(
        {
          id: i,
          avatar: '/assets/img/avatar/1.png',
          contractorName: 'Darlene Robertson',
          type: 'Traditional',
          startDate: new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)),
          amount: Math.floor(Math.random() * 200),
          status: Math.floor(Math.random() * 2)
        }
      )
    }
  }

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filterTableData(filterBy: any, value: any) {
    this.dataSource.data = this.data.filter((obj) => obj[filterBy] == value);
    this.paginator.firstPage();
  }

  filterTableDataByDate(e: any) {
    let newData = this.data;
    if (e.start) newData = newData.filter((obj) => obj.startDate >= e.start);
    if (e.end) newData = newData.filter((obj) => obj.startDate <= e.end);
    if (e.start || e.end) {
      this.dataSource.data = newData;
      this.paginator.firstPage();
    }
  }

  filterTableDataByAmount() {
    let newData = this.data;
    if (this.minAmount) newData = newData.filter((obj) => obj.amount >= this.minAmount);
    if (this.maxAmount) newData = newData.filter((obj) => obj.amount <= this.maxAmount);
    if (this.minAmount || this.maxAmount) {
      this.dataSource.data = newData;
      this.paginator.firstPage();
    }
  }

  filterTableDataByContractorName() {
    let newData = this.data;
    if (this.contractorName) { 
      newData = newData.filter((obj) => obj.contractorName.includes(this.contractorName)); 
      console.log(newData)
      this.dataSource.data = newData;
      this.paginator.firstPage();
    }
  }

  getStatusText(val: any) {
    let res = '';
    this.statusList.forEach(elem => {
      if (elem.value == val.toString()) res = elem.text;
    });
    return res;
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
    this.dataSource.data = this.data;
    this.paginator.firstPage();
  }

}
