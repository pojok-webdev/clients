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
  title
  count
  constructor(private client :ClientService,private route:ActivatedRoute) {
    let _id = this.route.snapshot.paramMap.get("clientcategory")
    switch(_id){
      case '0':
      this.title = 'Uncategorized'
      break
      case '1':
      this.title = 'FFR'
      break
      case '2':
      this.title = 'Platinum'
      break
      case '3':
      this.title = 'Gold'
      break
      case '4':
      this.title = 'Silver'
      break
      case '5':
      this.title = 'Bronze'
      break
    }
    console.log("_id",_id)
    this.client.categorygets({clientcategory:_id},result=>{
      this.clients = result
      this.count = result.length
    })
  }
  ngOnInit() {
  }

}
