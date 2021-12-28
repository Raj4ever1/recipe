import { shoppingList } from './../../shopping-list/interface.model';
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
    let list:shoppingList[]=[]
    this.itemToDisplay.incridents.forEach(element=>{
      let str = element.trim().split(' ');
      if (str.length > 2 && String(Number(str[0])) != 'NaN') {
        list.push({
          quantity: Number(str[0]),
          unit: str[1],
          name: str.splice(2).join(' ').toString(),
        });}})
    console.log(list);
    console.log(this.recipeService.ingredientList)
    if(this.recipeService.ingredientList.length>0){
      this.recipeService.ingredientList=[...this.recipeService.ingredientList,...list];
      console.log(this.recipeService.ingredientList);
    }else{
      this.recipeService.ingredientList=[...list];
      console.log(this.recipeService.ingredientList);
    }
    alert(`${this.itemToDisplay.name }'s ingredients added to your Shopping list.`)
  }
}
