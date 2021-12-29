import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { faPlus, faDumpster } from '@fortawesome/free-solid-svg-icons';
import { shoppingList } from './interface.model';
import { RecipeService } from '../recipe.service';
import { delay } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl:'./shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  faCoffee = faPlus;
  fadumpster = faDumpster;
  data: any;

  constructor(public recipeService: RecipeService, private http: HttpClient) { }

  

  ngOnInit(): void {
    this.recipeService.setingredient();
  }

  itemChecked(itemNo: shoppingList, from, to) {
    from.forEach((value, index) => {
      if (value === itemNo) {
        from.splice(index, 1);
        to.push(itemNo);
      }
    });
    this.recipeService.updateIngridents();
  }

  itemValueChange(item, $event) {
    let str = ($event.target.value).split(' ');
    this.recipeService.ingredientList.forEach((value, index) => {
      if (value === item) {
        this.recipeService.ingredientList.splice(index, 1);
        this.recipeService.ingredientList.push({
          quantity: Number(str[0]),
          unit: str[1],
          name: str.splice(2).join(' ').toString(),
        });
      }
    });
    this.recipeService.updateIngridents();
  }

  addItem(e) {
    let str = e.target.value.split(' ');
    if (str.length > 2 && String(Number(str[0])) != 'NaN') {
      this.recipeService.ingredientList.push({
        quantity: Number(str[0]),
        unit: str[1],
        name: str.splice(2).join(' ').toString(),
      });
      document.getElementById("tempLi").remove();
      this.recipeService.updateIngridents();
    }
  }

  additem() {
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox');
    let inputbox = document.createElement('input');
    inputbox.setAttribute('style', 'border: none;width: 50%;');
    inputbox.setAttribute('placeholder', 'Quantity Unit ItemName');
    inputbox.addEventListener('change', (e) => {
      this.addItem(e);
    })
    let listitem = document.createElement('li');
    listitem.append(checkbox);
    listitem.append(inputbox);
    listitem.setAttribute('id', 'tempLi')
    listitem.addEventListener('blur', () => {
      document.getElementById("tempLi").remove();
    })
    document.getElementById("listOfItem").append(listitem);
  }

  itemdelete(item) {
    this.recipeService.completedList.forEach((value, index) => {
      if (value === item) {
        this.recipeService.completedList.splice(index, 1);
      }
    })
    this.recipeService.updateIngridents();
  }

}
