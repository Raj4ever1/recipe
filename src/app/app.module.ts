import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatAutocomplete,
} from '@angular/material/autocomplete';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SidebarComponent } from './recipe-list/sidebar/sidebar.component';
import { DisplayRecipeComponent } from './recipe-list/display-recipe/display-recipe.component';
import { RecipeService } from './recipe.service';
import { AddRecipeComponent } from './recipe-list/add-recipe/add-recipe.component';
import { SearchComponent } from './search/search.component';
import { AuthComponent } from './auth/auth.component';

const route: Route[] = [
  {
    path: 'recipe',
    component: RecipeListComponent,
    children: [
      { path: 'addRecipe', component: AddRecipeComponent },
      { path: 'display/:id', component: DisplayRecipeComponent },
    ],
  },
  { path: 'shoppingList', component: ShoppingListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeListComponent,
    SidebarComponent,
    DisplayRecipeComponent,
    AddRecipeComponent,
    SearchComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
