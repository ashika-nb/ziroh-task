import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getAlbum(albumId: any): Observable<Object>{
    
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  }
}
