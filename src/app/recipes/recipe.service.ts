import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'Simple test recipe',
      `http://www.coca-colacompany.com/content/dam/journey/us/en/global/2012/11/chicken-wings-604mk112612-604-337-3f7d77f6.rendition.598.336.jpg`,
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another Recipe',
      'Another simple recipe',
      `https://www.ndtv.com/cooks/images/620_2.jpg`,
      [
        new Ingredient('Potatoes', 5),
        new Ingredient('Bread', 7)
      ]),
    new Recipe('The Best Recipe',
      'Best recipe',
      `https://static01.nyt.com/images/2014/08/19/dining/chickenskewers/chickenskewers-superJumbo.jpg`,
      [
        new Ingredient('Meat', 2),
        new Ingredient('Fish', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
