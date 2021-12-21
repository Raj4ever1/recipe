import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { item } from '../interface.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() itemlist:item[];
@Output() recipeclick=new EventEmitter<number>();

selectrecipe(index:number){
  this.recipeclick.emit(index);

}
}
