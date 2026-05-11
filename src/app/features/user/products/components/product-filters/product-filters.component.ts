import { Component, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  imports: [],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss',
})
export class ProductFiltersComponent implements OnInit {
  categoriesList: WritableSignal<{ id: number; label: string; value: string }[]> = signal([]);

  selectedCategory = signal('');

  ngOnInit(): void {
    this.categoriesList.set([
      { id: 10, label: 'All Categories', value: '' },
      { id: 11, label: 'Fruits & Vegetables', value: 'fruits-vegetables' },
      { id: 12, label: 'Personal Care', value: 'personal-care' },
      { id: 13, label: 'Pantry Staples', value: 'pantry-staples' },
      { id: 14, label: 'Bakery', value: 'bakery' },
      { id: 15, label: 'Beverages', value: 'beverages' },
      { id: 16, label: 'Meat & Seafood', value: 'meat-seafood' },
      { id: 17, label: 'Snacks', value: 'snacks' },
      { id: 18, label: 'Frozen Foods', value: 'frozen-foods' },
      { id: 19, label: 'Baby Care', value: 'baby-care' },
      { id: 20, label: 'Dairy & Eggs', value: 'dairy-eggs' }
    ])
  }

  onCategoryChange(category: string): void {
    this.selectedCategory.set(category);
  }
}
