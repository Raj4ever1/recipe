import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SidebarComponent } from './recipe-list/sidebar/sidebar.component';
import { DisplayRecipeComponent } from './recipe-list/display-recipe/display-recipe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './recipe-list/add-recipe/add-recipe.component';

const route:Route[]=[
  {path:'recipe', component:RecipeListComponent,children:[
    {path:'addRecipe',component:AddRecipeComponent},
    {path:'display/:id',component:DisplayRecipeComponent},
  ]},
  {path:'shoppingList', component:ShoppingListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeListComponent,
    SidebarComponent,
    DisplayRecipeComponent,
    AddRecipeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
