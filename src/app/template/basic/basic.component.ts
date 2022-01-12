import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void { }

  nameValid(): boolean {
    return this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched;
  }

  priceValid(): boolean {
    return this.myForm?.controls.price?.touched && this.myForm?.controls.price?.value <= 0 ;
  }

  saveForm() {
    this.myForm.resetForm({
      price: 0,
      count: 0
    });
  }
}
