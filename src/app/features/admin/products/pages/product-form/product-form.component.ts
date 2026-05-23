import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from "@angular/router";

import { NgIcon } from "@ng-icons/core";
import { SelectModule } from 'primeng/select';
import { InputComponent } from "../../../../../shared/components";
import { Product } from '../../../../user/products/models/product';

@Component({
  selector: 'app-product-form',
  imports: [NgIcon, RouterLink, InputComponent, ReactiveFormsModule, SelectModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly activatedRoute = inject(ActivatedRoute);

  categoriesList: WritableSignal<{ label: string; value: string; }[]> = signal([]);

  form!: FormGroup;
  isEditMode: WritableSignal<boolean> = signal(false);
  productId: WritableSignal<string> = signal('');
  imagePreview: string | null = null;

  product: WritableSignal<Product> = signal({
    id: 1,
    discount: '10% OFF',
    image: '/images/products/product-01.png',
    title: 'Butter Croissant 100g',
    ratingAvg: 4.5,
    review: 12,
    price: 45.0,
    unit: '/100g',
    originalPrice: 50.0,
    stock: 35,
    category: 'pantry-staples',
    isOrganic: true,
    description: 'this is description for product 1'
  })

  ngOnInit(): void {
    this.initForm();
    this.initCategories();
    this.getProductId();
  }

  getProductId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        if (params.get('id')) {
          this.productId.set(params.get('id')!);
          this.isEditMode.set(true);
          this.fillForm(this.product())
        }
      }
    })
  }

  initCategories(): void {
    this.categoriesList.set([
      { label: 'Fruits & Vegetables', value: 'fruits-vegetables' },
      { label: 'Personal Care', value: 'personal-care' },
      { label: 'Pantry Staples', value: 'pantry-staples' },
      { label: 'Bakery', value: 'bakery' },
      { label: 'Beverages', value: 'beverages' },
      { label: 'Meat & Seafood', value: 'meat-seafood' },
      { label: 'Snacks', value: 'snacks' },
      { label: 'Frozen Foods', value: 'frozen-foods' },
      { label: 'Baby Care', value: 'baby-care' },
      { label: 'Dairy & Eggs', value: 'dairy-eggs' },
    ])
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      originalPrice: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isOrganic: [''],
    })
  }

  fillForm(formData: Product): void {
    this.form.patchValue({
      name: formData.title,
      category: formData.category,
      price: formData.price,
      originalPrice: formData.originalPrice,
      unit: formData.unit,
      stock: formData.stock,
      image: formData.image,
      description: formData.description,
      isOrganic: formData.isOrganic,
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  resetImage() {
    this.imagePreview = null;
    this.form.get('image')?.reset();
  }
}
