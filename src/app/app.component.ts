import { Component, Version, VERSION } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  admin: any;
  ngOnInit(){
    this.admin="Samiksha Patil";
  }
  
  Data:any= [];
  showSide =false;
  openside(){
    this.showSide =true;
  }
  closeSide(){
    this.showSide =false;
  }
  constructor(){
    this.Data =[
      {id:'C10', acType:'S',name:'Samiksha P', $Ac:101,kAc:201,sub:1000},
      {id:'C11', acType:'A',name:'Komal T', $Ac:102,kAc:202,sub:1110},
      {id:'C12', acType:'S',name:'Sweta K', $Ac:103,kAc:203,sub:2220},
      {id:'C13', acType:'S',name:'Ankita R', $Ac:104,kAc:204,sub:4450},
      {id:'C14', acType:'A',name:'Nita P', $Ac:105,kAc:205,sub:4563},
      {id:'C15', acType:'S',name:'Harsha W', $Ac:106,kAc:206,sub:6548},
      {id:'C17', acType:'S',name:'Aparna J', $Ac:107,kAc:207,sub:76453},
      
     
    ];
  }
 
}
