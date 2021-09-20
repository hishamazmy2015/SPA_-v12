import { Component, OnInit } from "@angular/core";
// import { NgForm } from "@angular/forms";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Product } from "../../models/product";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"],
})
export class ProductAddComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  productForm: FormGroup;
  isSubmitted: boolean = false;

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      code: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      category: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  get gfc() { return this.productForm.controls };

  onSubmit() {
    this.isSubmitted = true;
    if (!this.productForm.valid) {
      return;
    }

    const product: Product = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      code: this.productForm.value.code,
      category: this.productForm.value.category,
    };

    const productObserver = {
      next: (product) => (
        this.router.navigate(["/product/list"]), console.log("success")
      ),
      error: (err) => console.error(err),
    };

    this.productService.createProduct(product).subscribe(productObserver);
  }
}
