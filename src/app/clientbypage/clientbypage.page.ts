import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientbypage',
  templateUrl: './clientbypage.page.html',
  styleUrls: ['./clientbypage.page.scss'],
})
export class ClientbypagePage implements OnInit {
  clients
  constructor(private client :ClientService,private route:ActivatedRoute) {
    let _id = this.route.snapshot.paramMap.get("clientcategory")
    console.log("_id",_id)
    this.client.categorygets({clientcategory:_id},result=>{
      this.clients = result
    })
  }
  ngOnInit() {
  }

}
