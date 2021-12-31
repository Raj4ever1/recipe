import { shoppingList } from './../../shopping-list/interface.model';
import { Component, Input, OnInit } from '@angular/core';
import { item } from '../interface.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css']
})
export class DisplayRecipeComponent implements OnInit {
  itemToDisplay:item

  constructor(private recipeService:RecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.recipeService.itemlist.forEach(ele=>{
          if (ele.id===params['id']){
            this.itemToDisplay=ele;
            console.log(this.itemToDisplay)
          };
        });
      }
    );
  }
  
  addIncridentsToList(){
    let list:shoppingList[]=[];
    this.itemToDisplay.incridents.forEach(element=>{
      list.push(element);
    });
    if(this.recipeService.ingredientList.length>0){
      this.recipeService.ingredientList=[...this.recipeService.ingredientList,...list];
    }else{
      this.recipeService.ingredientList=[...list];
    };
    this.recipeService.updateIngridents();
    alert(`The ${this.itemToDisplay.name }'s ingredients added to your Shopping list.`)
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.itemToDisplay.id);
  }
}
