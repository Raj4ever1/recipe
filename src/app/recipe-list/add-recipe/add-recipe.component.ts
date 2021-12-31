import { RecipeService } from './../../recipe.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,NgModel, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
 @ViewChild('form') addRecipe;
  loading=false;
  addRecipeForm:FormGroup;
  constructor(private recipeservice:RecipeService) { }

  ngOnInit(): void {
     this.addRecipeForm=new FormGroup({
       'name':new FormControl(null,Validators.required),
       'imagelink':new FormControl(null,Validators.required),
       'incridents':new FormArray([
         new FormGroup({
          'quantity':new FormControl(null,Validators.required),
          'unit':new FormControl(null,Validators.required),
          'item':new FormControl(null,Validators.required),
         })
       ]),
       'methods':new FormArray([
        new FormControl(null,Validators.required)
       ]),
     });
  }

  onSubmit(){
    this.loading=true;
    console.log(this.loading)
    let data=(this.addRecipeForm.value);
    this.recipeservice.addRecipe(data);
    this.addRecipeForm.reset();
    (<FormArray>this.addRecipeForm.get('incridents')).clear();
    (<FormArray>this.addRecipeForm.get('methods')).clear();
    this.loading=false;
    console.log(this.loading)
  }

  addIngridents(arrayname){
    if (arrayname==='ingrident'){
      let control=new FormGroup({
        'quantity':new FormControl(null,Validators.required),
        'unit':new FormControl(null,Validators.required),
        'item':new FormControl(null,Validators.required),
      });
      (<FormArray>this.addRecipeForm.get('incridents')).push(control);
    }else{
      let control=new FormControl(null,Validators.required);
      (<FormArray>this.addRecipeForm.get('methods')).push(control);
    }
  }

  getingridentcontrols(arrayname){
    if (arrayname==='ingrident'){
      return (<FormArray>this.addRecipeForm.get('incridents')).controls;
    }else{
      return (<FormArray>this.addRecipeForm.get('methods')).controls;
    }
  }

  deleteIngrident(arrayname,index){
    if(arrayname=='ingrident'){
      (<FormArray>this.addRecipeForm.get('incridents')).removeAt(index);
    }else{
      (<FormArray>this.addRecipeForm.get('methods')).removeAt(index);
    }
  }
}

