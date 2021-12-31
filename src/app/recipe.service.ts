import { item } from './recipe-list/interface.model';
import { Injectable } from '@angular/core';
import { shoppingList } from './shopping-list/interface.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  ingredientList: shoppingList[] = []
  completedList: shoppingList[] = []
  itemlist: item[] = [];
  subject = new Subject<item[]>();
  recipeUrl = 'https://angular-learning-8a9ed-default-rtdb.firebaseio.com/recipe.json'
  ingredientUrl = 'https://angular-learning-8a9ed-default-rtdb.firebaseio.com/posts.json'

  constructor(private http: HttpClient) {
    this.setrecipe();
    this.setingredient();
    // if(this.ingredientList==null){this.ingredientList=[]};
    // if(this.completedList==null){this.completedList=[]};
  }

  setrecipe() {
    this.http.get(this.recipeUrl).subscribe(
      response => {
        this.itemlist= [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            this.itemlist.push({ ...response[key], id: key });
          };
        };
        this.itemlist = this.sortDict(this.itemlist, 'name');
        this.getMessage(this.itemlist);
      }
    );
  
   
  };
  getMessage(msg:item[]): void {
    this.subject.next(msg);
}

  setingredient() {
    let listtemp = localStorage.getItem('item');
    if (listtemp==null){
      localStorage.setItem('item',JSON.stringify([]));
      listtemp = localStorage.getItem('item');
    }
    if (listtemp !== 'undefined' && listtemp!==null) {
      this.ingredientList = this.sortDict(JSON.parse(listtemp), 'item');
    } else { this.ingredientList = [] }
    listtemp = localStorage.getItem('itemcompleted');
    if (listtemp==null){
      localStorage.setItem('itemcompleted',JSON.stringify([]));
      listtemp = localStorage.getItem('itemcompleted');
    }
    if (listtemp !== 'undefined' && listtemp!==null) {
      this.completedList = this.sortDict(JSON.parse(listtemp), 'item');
    } else { this.completedList = [] }
    this.updateIngridents()
    

  }
  
  addRecipe(data){
    this.http.post(this.recipeUrl,data).subscribe({});
    setTimeout(()=>{
      this.setrecipe();

    },5000)
  }

  sortDict(dict, key: string) {
    if (typeof (dict) != 'undefined'&&dict!==null && dict.length > 1) {
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

  deleteRecipe(id){
    this.http.delete(this.recipeUrl.replace('.json','')+`/${id}`).subscribe(()=>{alert('recipe deleted');})
    setTimeout(()=>{
      this.setrecipe();
    },1000)
  }
}
