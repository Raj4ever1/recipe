import { item } from './recipe-list/interface.model';
import { Injectable, OnInit } from '@angular/core';
import { shoppingList } from './shopping-list/interface.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  ingredientList:shoppingList[]=[]
  completedList:shoppingList[]=[]
  itemlist: item[]=[];

  constructor(private http:HttpClient) { 
    this.getrecipe();
    this.getingredient();
  }

  getrecipe(){
    this.http.get('https://angular-learning-8a9ed-default-rtdb.firebaseio.com/recipe.json').subscribe(
      response=>{
      for(let key in response){
        if (response.hasOwnProperty(key)){
          this.itemlist.push({...response[key],id:key});
        };
      };
    }); 
  };
 
  getingredient(){
    this.http.get('https://angular-learning-8a9ed-default-rtdb.firebaseio.com/posts.json').subscribe(
      response=>{
      for(let key in response){
        if (response.hasOwnProperty(key)){
          this.ingredientList=response[key];
          console.log(this.ingredientList);
        };
      };
    }); 
  }
}
