import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clients
  obj = {
    segment:1,
    offset:100
  }
  searchText
  constructor(private client:ClientService,private route:ActivatedRoute) {
    let _page = this.route.snapshot.paramMap.get('page')
    this.obj.offset = 100
    this.obj.segment = 100*(parseInt(_page))-100
    this.client.gets(this.obj,result => {
      this.clients = result
    })
  }
  doSearch(){
    if((this.searchText).trim()===''){
      this.client.gets({segment:0,offset:100},result=>{
        this.clients = result
      })
    }else{
      this.client.getByName({name:this.searchText},result => {
        this.clients = result
      })
    }
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
  goFirst(){
    this.client.gets({segment:0,offset:100},result => {
      this.clients = result
    })
  }
  goPrev(){
  //  let _page = this.route.snapshot.paramMap.get('page')
    //console.log('Page',_page)
    if(this.obj.segment>0){
      this.obj.segment--
//      _page = (parseInt(_page)-1).toString()
      let _segment = 100*(this.obj.segment)-100
      this.client.gets({segment:_segment,offset:100},result => {
        this.clients = result
      })
//      window.location.href = '/clients/'+_page
    }
  }
  goNext(){
    //let _page = this.route.snapshot.paramMap.get('page')
    //console.log('Page',_page)
    if(this.obj.segment<4){
      this.obj.segment++
      //_page = (parseInt(_page)+1).toString()
      let _segment = 100*(this.obj.segment)-100
      this.client.gets({segment:_segment,offset:100},result => {
        this.clients = result
      })
  
//      window.location.href = '/clients/'+_page
    }
  }
  goLast(){
    this.client.gets({segment:4,offset:100},result => {
      this.clients = result
    })
  }
  ngOnInit() {
  }
}