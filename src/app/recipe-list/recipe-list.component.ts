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
      name:'Perfect Pumpkin Pie',
      imagelink:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQR6zg7gbWUJz20ux3r_1WaIM7kcDU_M4KzBNeg_R8x5ZKgI0XC',
      incridents:`1 (15 ounce) can pumpkin
      1 (14 ounce) can EAGLE BRAND® Sweetened Condensed Milk
      2 large eggs large eggs
      1 teaspoon ground cinnamon
      ½ teaspoon ground ginger
      ½ teaspoon ground nutmeg
      ½ teaspoon salt
      1 (9 inch) unbaked pie crust`.split('\n'),
      methods:['Preheat oven to 425 degrees F. Whisk pumpkin, sweetened condensed milk, eggs, spices and salt in medium bowl until smooth. Pour into crust. Bake 15 minutes.','Reduce oven temperature to 350 degrees F and continue baking 35 to 40 minutes or until knife inserted 1 inch from crust comes out clean. Cool. Garnish as desired. Store leftovers covered in refrigerator.']
    },
    {
      name:'Classic Waffles',
      imagelink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqHMs-t-1VM7oQtl8Vt2KyzgitLokkX9_cDXmEBrXhXKi3Qvq',
      incridents:`2 cups all-purpose flour
      1 teaspoon salt
      4 teaspoons baking powder
      2 tablespoons white sugar
      2 eggs
      1.5 cups warm milk
      ⅓ cup butter, melted
      1 teaspoon vanilla extract`.split('\n'),
      methods:['In a large bowl, mix together flour, salt, baking powder and sugar; set aside. Preheat waffle iron to desired temperature.','In a separate bowl, beat the eggs. Stir in the milk, butter and vanilla. Pour the milk mixture into the flour mixture; beat until blended.','Ladle the batter into a preheated waffle iron. Cook the waffles until golden and crisp. Serve immediately.']
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
