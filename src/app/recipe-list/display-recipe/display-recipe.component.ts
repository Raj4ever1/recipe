import { Component, Input, OnInit } from '@angular/core';
import { item } from '../interface.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css']
})
export class DisplayRecipeComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  @Input() itemToDisplay:item
  
  addIncridentsToList(){
    this.recipeService.ingredientList=this.itemToDisplay.incridents;
  }
}
