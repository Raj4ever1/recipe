import { Subscription } from 'rxjs';
import { item } from './../interface.model';
import { RecipeService } from './../../recipe.service';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  subscription:Subscription ;
  constructor(public recipeservice:RecipeService) { }

  itemlist:item[]; 
  ngOnInit(): void {
  //  this.itemlist=this.recipeservice.itemlist; 
 this.recipeservice.subject.subscribe(message => {this.itemlist = message; });
  
  }

  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    //this.subscription.unsubscribe();
}
}
