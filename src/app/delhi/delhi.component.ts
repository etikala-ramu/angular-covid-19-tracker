import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-delhi',
  templateUrl: './delhi.component.html',
  styleUrls: ['./delhi.component.css']
})
export class DelhiComponent implements OnInit {

  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  
}
