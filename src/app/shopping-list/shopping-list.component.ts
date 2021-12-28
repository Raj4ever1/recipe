import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { faPlus, faDumpster } from '@fortawesome/free-solid-svg-icons';
import { shoppingList } from './interface.model';
import { RecipeService } from '../recipe.service';
import { delay } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listChecked: shoppingList[] = [];
  list: shoppingList[] = [];
  faCoffee = faPlus;
  fadumpster = faDumpster;
  data: any;

  constructor(private recipeService: RecipeService, private http: HttpClient) { }

  listupdate(): void {
    this.http.delete(this.recipeService.ingredientUrl).subscribe((e) => { e });
    this.http.post(this.recipeService.ingredientUrl, this.list).subscribe((e) => { e });
  }

  ngOnInit(): void {
    let listCheckedcoming = this.recipeService.completedList;
    if (typeof (listCheckedcoming) != 'undefined') { this.listChecked = listCheckedcoming }
    this.list = this.recipeService.ingredientList;
    this.listupdate();
  }

  sortDict(dict) {

    if (typeof (dict) != 'undefined' && dict.length > 1) {
      return dict.sort((item1, item2) => {
        return this.compareObjects(item1, item2, 'name')

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

  itemChecked(itemNo: shoppingList, from, to) {
    from.forEach((value, index) => {
      if (value === itemNo) {
        from.splice(index, 1);
        to.push(itemNo);
      }
    });
    this.recipeService.completedList = this.listChecked;
    this.listupdate();
  }

  itemValueChange(item, $event) {
    let str = ($event.target.value).split(' ');
    this.list.forEach((value, index) => {
      if (value === item) {
        this.list.splice(index, 1);
        this.list.push({
          quantity: Number(str[0]),
          unit: str[1],
          name: str.splice(2).join(' ').toString(),
        });
      }
    });

  }

  addItem(e) {
    let str = e.target.value.split(' ');
    if (str.length > 2 && String(Number(str[0])) != 'NaN') {
      this.list.push({
        quantity: Number(str[0]),
        unit: str[1],
        name: str.splice(2).join(' ').toString(),
      });
      document.getElementById("tempLi").remove();
      this.listupdate();
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
    this.listChecked.forEach((value, index) => {
      if (value === item) {
        this.listChecked.splice(index, 1);
      }
    })
    this.listupdate();
  }

}
