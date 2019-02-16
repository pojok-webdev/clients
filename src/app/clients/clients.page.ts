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
  updateCategory(id,category){
    this.client.update({id:id,clientcategory:category},result=>{
      console.log("update category",result)
    })
  }
  ngOnInit() {
  }

}
