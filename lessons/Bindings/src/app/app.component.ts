import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bindings';
  sayHello : string = 'Hello';
  private_filter : string = 'Content';
  constructor(){

  }
  ngOnInit(){}

  //changeFilter(message: any){
  //this.filter = message
  //console.log('input: ',message);
  //}

  public get filter(){
    return this.filter
  }

  public set filter(message:string){
  }
  
}
