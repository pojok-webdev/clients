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
  categorygets(obj,callback){
    this.obj = this.http.get('http://'+this.appvar.server+':'+this.appvar.port+'/categorygets/'+obj.clientcategory)
    this.obj.subscribe(
      data => {
        console.log("Data",data)
        callback(data)
      },
      err => {
        console.log("Error",err)
        callback(err)
      }
    )
  }
  categorycount(obj,callback){
    this.obj = this.http.get('http://'+this.appvar.server+':'+this.appvar.port+'/categorycount/'+obj.clientcategory)
    this.obj.subscribe(
      data => {
        console.log("Data",data)
        callback(data)
      },
      err => {
        console.log("Error",err)
        callback(err)
      }
    )
  }
  gets(obj,callback){
    console.log("gets invoked",this.appvar.port,obj)
    this.obj = this.http.get('http://'+this.appvar.server+':'+this.appvar.port+'/clients/'+obj.segment+'/'+obj.offset)
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
  getByName(obj,callback){
    console.log("get by name invoked",this.appvar.port,obj)
    this.obj = this.http.get('http://'+this.appvar.server+':'+this.appvar.port+'/clientgetbyname/'+obj.name)
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
