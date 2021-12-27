import { item } from './recipe-list/interface.model';
import { Injectable, OnInit } from '@angular/core';
import { shoppingList } from './shopping-list/interface.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  ingredientList:string[]
  completedList:shoppingList[]
  itemlist: item[]=[];
  constructor(private http:HttpClient) { 
    this.getrecipe();
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
  
}
