import { Router } from '@angular/router';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements AfterViewInit {
  usersData: any;
  displayedColumns: string[] = [
    'name',
    'surname',
    'email',
    'idNum',
    'address1',
    'address2',
    'city',
    'province',
    'country',
    'postal',
    'created_at',
  ];
  dataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private userService: UserService,
    private router: Router
    ) {}

  ngAfterViewInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource.filteredData.rows);
      this.usersData = new MatTableDataSource(this.dataSource.filteredData.rows);
      this.usersData.paginator = this.paginator;
      this.usersData.sort = this.sort;
    });
  }

  goToForm() {
    this.router.navigate(['/webform']);
  }

}
