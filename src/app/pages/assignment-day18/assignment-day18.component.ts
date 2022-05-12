import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-assignment-day18',
  templateUrl: './assignment-day18.component.html',
  styleUrls: ['./assignment-day18.component.scss']
})
export class AssignmentDay18Component implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('empTableSort') empTableSort: MatSort;
  employeeInfo: Employee[] = [
    { id: 1, name: "aye aye", department: "IT", gender: "female", position: "PM", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 2, name: "su su", department: "Software", gender: "female", position: "Leader", phNumber: "09234567891", joinDate: "15-05-2020" },
    { id: 3, name: "myat myat", department: "Web", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "03-05-2022" },
    { id: 4, name: "aung aung", department: "IT", gender: "male", position: "Member", phNumber: "09234567891", joinDate: "1-05-2022" },
    { id: 5, name: "kyaw kayw", department: "Software", gender: "male", position: "Member", phNumber: "09234567891", joinDate: "18-05-2021" },
    { id: 6, name: "mya mya", department: "IT", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-07-2020" },
    { id: 7, name: "aat", department: "IT", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "30-09-2021" },
    { id: 8, name: "aye aye thet", department: "Software", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-02-2021" },
    { id: 9, name: "kyaw gyi", department: "Hardware", gender: "male", position: "Leader", phNumber: "09234567891", joinDate: "09-09-2020" },
    { id: 10, name: "aye gyi", department: "Software", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "20-08-2021" },
    { id: 11, name: "zin gyi", department: "Web", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "22-02-2022" },
    { id: 12, name: "mon gyi", department: "Software", gender: "female", position: "Leader", phNumber: "09234567891", joinDate: "11-01-2022" },
    { id: 13, name: "lin lin", department: "IT", gender: "male", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 14, name: "nyan nyan", department: "Web", gender: "male", position: "Member", phNumber: "09234567891", joinDate: "23-03-2021" },
    { id: 15, name: "pann pann", department: "Software", gender: "male", position: "Member", phNumber: "09234567891", joinDate: "11-10-2020" },
    { id: 16, name: "thet thet", department: "Testing", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-05-2019" },
    { id: 17, name: "su mon", department: "IT", gender: "female", position: "Leader", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 18, name: "wai gyi", department: "Testing", gender: "male", position: "Leader", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 19, name: "min min", department: "Software", gender: "male", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 20, name: "aye min", department: "Software", gender: "male", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 21, name: "aye thet", department: "Hardware", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 22, name: "aye aung", department: "IT", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 23, name: "aye myat", department: "IT", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 24, name: "shwe sin", department: "IT", gender: "female", position: "Leader", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 25, name: "yamin", department: "Web", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 26, name: "thin thin", department: "IT", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 27, name: "ei ei", department: "Software", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" },
    { id: 28, name: "chaw chaw", department: "Software", gender: "female", position: "Member", phNumber: "09234567891", joinDate: "11-05-2022" }
  ];
  displayedColumns = ['id', 'name', 'department', 'gender', 'position', 'phNumber', 'joinDate'];
  dataSource: MatTableDataSource<Employee>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.employeeInfo);
      this.dataSource.paginator = this.paginator;
      this.empTableSort.disableClear = true;
      this.dataSource.sort = this.empTableSort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
