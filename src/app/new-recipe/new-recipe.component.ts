import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})

export class NewRecipeComponent {
  @Output() sendRecipe =  new EventEmitter();
  submitForm(title: string, ingredients: string[], directions: string, rating: string) {
    let newRecipe: Recipe = new Recipe(title, ingredients, directions,  parseInt(rating));
    this.sendRecipe.emit(newRecipe);
  }
}




// export class NewRecipeComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
