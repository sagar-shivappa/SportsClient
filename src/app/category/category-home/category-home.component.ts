import { Component, OnInit } from '@angular/core';
import { categories } from 'src/shared/configurations/categories';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss'],
})
export class CategoryHomeComponent implements OnInit {
  categories: any;
  ngOnInit(): void {
    this.categories = categories;
  }
}
