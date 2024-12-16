import { Component } from '@angular/core';

@Component({
  selector: 'app-toogleimg',
  imports: [],
  templateUrl: './toogleimg.component.html',
  styleUrl: './toogleimg.component.css'
})
export class ToogleimgComponent {

  imgPath:string="./Image/yuva.jpg";
  imgName:string="yuva";
  name:string="Sixer King"
  clicked(){
    if(this.imgName=="yuva"){
      this.imgPath="./Image/vk.jpg"
      this.imgName="vk"
      this.name="KING"

    }else{
      this.imgPath="./Image/yuva.jpg"
      this.imgName="yuva"
      this.name="Sixer King"
    }
  }

}
