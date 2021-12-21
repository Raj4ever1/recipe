import { Injectable } from '@angular/core';
import { shoppingList } from './shopping-list/interface.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  ingredientList:string[]
  completedList:shoppingList[]
}
