import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }
  
  ratingColor(currentRecipe){
    if (currentRecipe.rating === 3) {
      return "bg-success";
    } else if (currentRecipe.rating === 2) {
      return "bg-info";
    } else {
      return "bg-warning";
    }
  }
}

// export class RecipeListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
