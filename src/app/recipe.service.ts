import { item } from './recipe-list/interface.model';
import { Injectable, OnInit } from '@angular/core';
import { shoppingList } from './shopping-list/interface.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  ingredientList: shoppingList[] = []
  completedList: shoppingList[] = []
  itemlist: item[] = [];
  recipeUrl = 'https://angular-learning-8a9ed-default-rtdb.firebaseio.com/recipe.json'
  ingredientUrl = 'https://angular-learning-8a9ed-default-rtdb.firebaseio.com/posts.json'

  constructor(private http: HttpClient) {
    this.getrecipe();
    this.getingredient();
  }

  getrecipe() {
    this.http.get(this.recipeUrl).subscribe(
      response => {
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            this.itemlist.push({ ...response[key], id: key });
          };
        };
      });
  };

  getingredient() {
    this.http.get(this.ingredientUrl).subscribe(
      response => {
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            this.ingredientList = response[key];
          };
        };
      });
  }
}
