import { Component } from '@angular/core';

@Component({
  selector: 'app-multipleimg',
  imports: [],
  templateUrl: './multipleimg.component.html',
  styleUrl: './multipleimg.component.css'
})
export class MultipleimgComponent {

  imgPath:string="./Image/ABD.jpg";
  imgName:string="ABD"

  change(){
  this.imgPath="./Image/ABD.jpg";
  this.imgName="ABD"
  }
  change1(){
   this.imgPath="./Image/yuva.jpg"
   this.imgName="yuva"
  }
  change2(){
   this.imgPath="./Image/Raina.jpg"
   this.imgName="Raina"
  }
  change3(){
   this.imgPath="./Image/sg.jpg"
   this.imgName="sg"
  }

}
 