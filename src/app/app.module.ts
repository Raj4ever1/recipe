import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SidebarComponent } from './recipe-list/sidebar/sidebar.component';
import { DisplayRecipeComponent } from './recipe-list/display-recipe/display-recipe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeListComponent,
    SidebarComponent,
    DisplayRecipeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
