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
    client.gets(result => {
      console.log('result',result)
      this.clients = result
    })
  }

  ngOnInit() {
  }

}
