import { Injectable } from '@angular/core';
import { AppvarService } from './appvar.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
obj : Observable<any>
  constructor(private appvar:AppvarService,private http:HttpClient) {
    
  }
  gets(callback){
    this.obj = this.http.get<any>(this.appvar.server+':'+this.appvar.port+'/gets')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
