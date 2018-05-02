import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  masterRecipeList: Recipe[] = [
    new Recipe('Cookies', ['flour', 'sugar', 'chocolate chips', 'vanilla extract', 'eggs', 'butter', 'salt'], 'Preheat oven to 315, mix ingredients, bake for 30 minutes', 3),
    new Recipe('French Loaf', ['flour', 'water', 'salt', 'yeast'], 'mix all ingredients and let sit for 4 hours, preheat oven to 450, knead dough til super tough, shape it into a football shape, bake for 45 minutes', 1),
    new Recipe('Salad', ['leafy greens', 'cucumbers', 'red onions', 'Italian dressing', 'croutons', 'cherry tomatoes'], 'rinse vegetables, chop vegetables, toss in bowl with dressing', 2)
  ];

  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}
