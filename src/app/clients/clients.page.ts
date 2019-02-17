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
    console.log("clientCategory:",clientCategory)
    if(clientCategory==buttonType){
      return "danger"
    }
    return "primary"
  }
  updateCategory(id,category){
    let _this = this 
    console.log("id",id)
    this.client.update({id:id,clientcategory:category},result=>{
      console.log("update category",result)
     // _this.getButtonColor(category,category)
    })
  }
  ngOnInit() {
  }

}
