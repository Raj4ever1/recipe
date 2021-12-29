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
    this.setrecipe();
    this.setingredient();
  }

  setrecipe() {
    this.http.get(this.recipeUrl).subscribe(
      response => {
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            this.itemlist.push({ ...response[key], id: key });
          };
        };
        this.itemlist = this.sortDict(this.itemlist, 'name')
      });
  };

  setingredient() {
    let listtemp = localStorage.getItem('item');
    console.log(listtemp)
    if (listtemp !== 'undefined') {
      this.ingredientList = this.sortDict(JSON.parse(listtemp), 'name');
    } else { this.ingredientList = [] }
    listtemp = localStorage.getItem('itemcompleted');
    if (listtemp !== 'undefined') {
      this.completedList = this.sortDict(JSON.parse(listtemp), 'name');
    } else { this.completedList = [] }
    

  }


  sortDict(dict, key: string) {
    if (typeof (dict) != 'undefined' && dict.length > 1) {
      return dict.sort((item1, item2) => {
        return this.compareObjects(item1, item2, key)

      })
    }
    else {
      return dict
    }
  }

  compareObjects(object1, object2, key) {
    const obj1 = object1[key].toUpperCase()
    const obj2 = object2[key].toUpperCase()
    if (obj1 < obj2) {
      return -1
    }
    if (obj1 > obj2) {
      return 1
    }
    return 0
  }

  updateIngridents() {
    localStorage.setItem('item',JSON.stringify(this.ingredientList));
    localStorage.setItem('itemcompleted',JSON.stringify(this.completedList));
  }
}
