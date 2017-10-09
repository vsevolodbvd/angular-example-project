import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simple test recipe', `http://www.coca-colacompany.com/content/dam/journey/us/en/global/2012/11/chicken-wings-604mk112612-604-337-3f7d77f6.rendition.598.336.jpg`),
    new Recipe('Another Recipe', 'Another simple recipe', `https://www.ndtv.com/cooks/images/620_2.jpg`),
    new Recipe('The Best Recipe', 'Best recipe', `https://static01.nyt.com/images/2014/08/19/dining/chickenskewers/chickenskewers-superJumbo.jpg`)
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
