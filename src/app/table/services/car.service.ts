import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from '../interfaces/car.interface';
import carsData from './cars.json';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carList: Car[] = carsData;
  carListSubject: Subject<Car[]> = new Subject<Car[]>();
  private carToBeEdited!: Car;

  constructor() {}

  Save(car: Car) {
    this.carToBeEdited = car;
  }
  get cars(): Car[] {
    return this.carList;
  }
  updateCar(car: Car) {
    const index = this.carList.findIndex(
      (car) => car.id == this.carToBeEdited.id
    );
    car.id = this.carToBeEdited.id;
    this.carList[index] = car;
  }
  sortByYear() {
    this.carList.sort((a, b) => {
      return a.year < b.year ? 1 : -1;
    });
    this.carListSubject.next(this.carList);
  }
}
