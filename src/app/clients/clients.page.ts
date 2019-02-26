import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clients
  constructor(private client:ClientService) {
    this.client.gets(result => {
      this.clients = result
    })
  }
  getButtonColor(clientCategory,buttonType){
    if(clientCategory==buttonType){
      return "danger"
    }
    return "primary"
  }
  updateCategory(id,category,event){
    console.log("id",id,event.target.color)
    let _x = event.target as HTMLElement

    console.log("target",_x.parentElement.children)
    let _parent = _x.parentElement.children 
    for(let c=0;c<_parent.length;c++){
      _parent[c].setAttribute('color','primary')
    }
    this.client.update({id:id,clientcategory:category},result=>{
      console.log("update category",result)
      event.target.color = "danger"
    })
  }
  ngOnInit() {
  }
}