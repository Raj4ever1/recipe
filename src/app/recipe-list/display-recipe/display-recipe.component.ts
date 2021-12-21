import { Component, Input, OnInit } from '@angular/core';
import { item } from '../interface.model';
@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css']
})
export class DisplayRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() itemToDisplay:item
  
  
}
