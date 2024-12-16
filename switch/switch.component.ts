import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  Bike:string[]=["Pulsar","Duke","Ktm","Yamaha","Passion"]
  Car:string[]=["Inova","Bmw","Benz","Skoda","Audi"]
  temp:string[]=[];
  name:string=""

  bike(){
    this.temp=this.Bike;
  }
  car(){
    this.temp=this.Car;
  }
  onclick(value:string){
    this.name = value;
  }

}
 