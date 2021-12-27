import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { item } from './interface.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  itemlist:item[]=[]

  ngOnInit(): void {
    this.getrecipe();
  }

  selectedRecipe=0;

  itemToDisplay:item;
  ele:any;
  reciveSelectedRecipe($event){
    this.itemToDisplay=this.itemlist[$event];
    this.ele=this.itemToDisplay.imagelink;
  }
  returnType(obj){
    return typeof obj;
  }
  
  getrecipe(){
    this.http.get('https://angular-learning-8a9ed-default-rtdb.firebaseio.com/recipe.json').subscribe(response=>{
      for(let key in response){
        if (response.hasOwnProperty(key)){
          this.itemlist.push({...response[key],id:key});
        };
      };
      console.log(this.itemlist);
    }); 
  };

}
