import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})

export class EditRecipeComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() clickedDone = new EventEmitter();

  finishedEditing(){
    this.clickedDone.emit();
  }
}

// export class EditRecipeComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
