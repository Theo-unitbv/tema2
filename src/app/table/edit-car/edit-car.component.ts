import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../interfaces/car.interface';
import { CustomValidator } from '../helpers/custom-validators';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
})
export class EditCarComponent {
  addForm!: FormGroup;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.addForm = new FormGroup({
      brand: new FormControl(null, Validators.required),
      engine: new FormControl(null, Validators.required),
      year: new FormControl(null, [
        Validators.required,
        CustomValidator.yearValidator,
      ]),
      horsepower: new FormControl(null, Validators.required),
      torque: new FormControl(null, Validators.required),
    });
  }
  get brand(): FormControl {
    return this.addForm.get('brand') as FormControl;
  }
  get engine(): FormControl {
    return this.addForm.get('engine') as FormControl;
  }
  get year(): FormControl {
    return this.addForm.get('year') as FormControl;
  }
  get horsepower(): FormControl {
    return this.addForm.get('horsepower') as FormControl;
  }
  get torque(): FormControl {
    return this.addForm.get('torque') as FormControl;
  }
  updateCar() {
    const Car: Car = {
      id: '',
      brand: this.brand.value,
      engine: this.engine.value,
      year: this.year.value,
      horsepower: this.horsepower.value,
      torque: this.torque.value,
    };
    this.carService.updateCar(Car);
    this.router.navigateByUrl('');
  }
  goBack() {
    this.router.navigateByUrl('');
  }
}
