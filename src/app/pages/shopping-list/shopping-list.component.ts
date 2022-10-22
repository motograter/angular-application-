import { Component } from "@angular/core";
import { Ingredient } from "src/app/shared/models/ingredient.model";

@Component({
    selector: 'shopping-list',
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
})

export class ShoppingListComponent { 
    ingredients: Ingredient[] = [
        new Ingredient('apples', 3),
        new Ingredient('tomatos', 5)
    ]
}
