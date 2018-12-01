import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnInit {
  list:String[]=["Bag","Perfume","Pen","Ring","Video games","Money","Newspaper","Water bottle"];
  count:number=0;
  constructor() { }
  
  ngOnInit() {
  }
  counter(count) {
    this.count=count;
  }
}
