import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
   
   }
  albumsIds = [1]
  ngOnInit(): void {
  }

 
  onScrollDown(ev: any) {
    //console.log("scrolled down!!", this.albumsIds);

  
    
    
    
    if(this.albumsIds.length<10){
      this.albumsIds.push(this.albumsIds[this.albumsIds.length-1] +1)
     // this.albumsIds.push(this.albumsIds[this.albumsIds.length-2] +2)
    }
    
  }


}
