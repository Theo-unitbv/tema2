import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../interfaces/car.interface';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  carList!: Car[];

  constructor(private carService: CarService, private router: Router) {
    this.carService.carListSubject.subscribe((data) => {
      this.carList = [...data];
    });
  }

  ngOnInit(): void {
    this.carList = this.carService.cars;
  }
  addNewCar() {
    this.router.navigateByUrl('/add');
  }
  editCar(data: Car) {
    this.router.navigateByUrl('/edit');
    this.carService.Save(data);
  }
  sortByYear() {
    this.carService.sortByYear();
  }
}
