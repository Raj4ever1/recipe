import { Component, OnInit } from '@angular/core';
import { item } from './interface.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedRecipe=0
  itemlist:item[]=[
    {
      name:"kheer",
      imagelink:'https://cdn.tarladalal.com/members/9306/big/big_rice_kheer-13982.jpg',
      incridents:`4 cups full-fat milk
      1/4 cuplong grained rice (basmati)
      1/4 tspsaffron (kesar) strands
      1 tbsp milk
      1/4 cup sugar
      1/4 tsp cardamom (elaichi) powder
      1 tbsp chopped almonds (badam)
      1 tbsp chopped cashewnuts (kaju)
      1 tbsp chopped pistachios
      1 tbsp chopped raisins (kismis)`.split('\n'),
      methods:`To make the rice kheer, wash and soak the rice in enough water for half an hour, drain and keep aside.
      Rinse a deep non-stick pan with ¼ cup of water and quickly simmer it for 2-3 minutes. Discard the water and heat the milk in the same pan and bring it to a vigorous boil. This would take around 6-8 minutes
      Add the rice, mix well and cook on a slow flame for 35-40 minutes
      Meanwhile, dry roast the saffron in a saucepan on a medium flame for 30 seconds.
      Add 1 tbsp of milk and cook on a medium flame for 1 minute. Keep the saffron-milk mixture aside.
      Add the sugar and mix well and simmer on a slow flame for 3-5 minutes while stirring occasionally.
      Add the cardamom powder and simmer on a slow flame for 2 minutes while stirring occasionally.
      Add the saffron-milk mixture and the chopped dry-fruits and cook the rice kheer on a slow flame for 10-12 minutes.
      Switch off the flame and serve the <span class="bold1">rice kheer</span> garnished with saffron strands.`.split('\n')
    },
    {
      name:"kheer2",
      imagelink:'https://cdn.tarladalal.com/members/9306/big/big_rice_kheer-13982.jpg',
      incridents:`4 cups full-fat milk
      1/4 cuplong grained rice (basmati)
      1/4 tspsaffron (kesar) strands
      1 tbsp milk
      1/4 cup sugar
      1/4 tsp cardamom (elaichi) powder
      1 tbsp chopped almonds (badam)
      1 tbsp chopped cashewnuts (kaju)
      1 tbsp chopped pistachios
      1 tbsp chopped raisins (kismis)`.split('\n'),
      methods:`*To make the rice kheer, wash and soak the rice in enough water for half an hour, drain and keep aside.
      *Rinse a deep non-stick pan with ¼ cup of water and quickly simmer it for 2-3 minutes. Discard the water and heat the milk in the same pan and bring it to a vigorous boil. This would take around 6-8 minutes
      *Add the rice, mix well and cook on a slow flame for 35-40 minutes
      *Meanwhile, dry roast the saffron in a saucepan on a medium flame for 30 seconds.
      *Add 1 tbsp of milk and cook on a medium flame for 1 minute. Keep the saffron-milk mixture aside.
      *Add the sugar and mix well and simmer on a slow flame for 3-5 minutes while stirring occasionally.
      *Add the cardamom powder and simmer on a slow flame for 2 minutes while stirring occasionally.
      *Add the saffron-milk mixture and the chopped dry-fruits and cook the rice kheer on a slow flame for 10-12 minutes.
      *Switch off the flame and serve the <span class="bold1">rice kheer</span> garnished with saffron strands.`.replace('*','').split('\n')
    }
  ];
  itemToDisplay:item;
  ele:any
  reciveSelectedRecipe($event){
    console.log(this.itemToDisplay);
    this.itemToDisplay=this.itemlist[$event];
    this.ele=this.itemToDisplay.imagelink
  }
  returnType(obj){
    return typeof obj;
  }


}
