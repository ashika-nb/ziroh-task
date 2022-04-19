import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service'
import { Photos } from '../Interface'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})

export class AlbumComponent implements OnInit {
@Input() id!: Number ;
  constructor(private photoService: PhotoService) { }


  photos: Photos[] = []
  ngOnInit(): void {
    this.photoService.getAlbum(this.id).subscribe(data =>{
      this.photos = JSON.parse(JSON.stringify(data))
    })
  }

  deletePhoto(id:Number){
    this.photos.forEach((photo,index) =>{
      if(photo.id == id){
        this.photos.splice(index,1)
        return
      }
    })
  }

}
