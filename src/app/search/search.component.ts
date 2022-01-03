import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RecipeService } from './../recipe.service';
import {
  FormGroup,
  FormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { item } from '../recipe-list/interface.model';

@Component({
  selector: 'app-search',
  template: `
    <form class="d-flex" [formGroup]="searchForm" (ngSubmit)="OnSubmit()">
      <input
        class="form-control me-2"
        type="search"
        aria-label="Search"
        name="searchStr"
        ngModel
        (input)="OnSubmit()"
      />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  `,
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  itemlist: item[];
  constructor(private recipeservice: RecipeService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchStr: new FormControl(null, Validators.required),
    });
    this.recipeservice.subject.subscribe((message) => {
      this.itemlist = message;
    });
  }

  OnSubmit() {
    //...
    let search = this.searchForm.get('searchStr').value;
    console.log(search);
  }
}
