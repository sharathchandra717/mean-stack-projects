import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() list:String[];
  @Output() output = new EventEmitter<number>();
  count:number=0;
  constructor() { }
  additem(){
    this.output.emit(++this.count);
  }
  ngOnInit() {
    
  }

}
