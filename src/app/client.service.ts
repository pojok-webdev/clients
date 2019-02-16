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
    console.log("gets invoked",this.appvar.port)
    this.obj = this.http.get('http://'+this.appvar.server+':'+this.appvar.port+'/clients')
    this.obj.subscribe(
      data => {
        console.log("Data",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  update(clientobj,callback){
    this.obj = this.http
    .post<any>('http://'+this.appvar.server+':'+this.appvar.port+'/clientupdate',clientobj)
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
