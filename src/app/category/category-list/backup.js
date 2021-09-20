// // import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer,
//   createReducer,
//   on,
// } from "@ngrx/store";
// import { environment } from "../../../environments/environment";
// import { Product } from "../models/product";
// import { loadProductsSuccess, loadProductsFailure } from "./product.actions";
// import { loadCategorySuccess, loadCategoryFailure } from "./category.actions";
// import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
// import { Category } from "../models/category";
// import { loadCategories } from "./category.actions";

// export const productStateFeatureKey = "productState";
// export const categoryStateFeatureKey = "categoryState";

// export interface ProductState extends EntityState<Product> {
//   error: any;
// }
// export interface CategoryState extends EntityState<Category> {
//   error: any;
// }

// export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

// export const adapterCategory: EntityAdapter<Category> =
//   createEntityAdapter<Category>();

// export const initialState = adapter.getInitialState({
//   error: undefined,
// });

// export const initialState2 = adapterCategory.getInitialState({
//   error: undefined,
// });

// export const reducers = createReducer(
//   initialState2,
//   on(loadProductsSuccess, (state, action) => {
//     return adapter.addAll(action.products, state);
//   }),
//   on(loadProductsFailure, (state, action) => {
//     return {
//       error: action.error,
//     };
//   }),
//   on(loadCategorySuccess, (state, action) => {
//     return adapterCategory.addAll(action.categories, state);
//   }),
//   on(loadCategoryFailure, (state, action) => {
//     return {
//       error: action.error,
//     };
//   })
// );

// export const selectProductsFeature = createFeatureSelector<ProductState>(
//   productStateFeatureKey
// );

// export const selectCategoriesFeature = createFeatureSelector<CategoryState>(
//   categoryStateFeatureKey
// );

// export const selectProducts = createSelector(
//   selectProductsFeature,
//   adapter.getSelectors().selectAll
// );
// export const selectCategories = createSelector(
//   categoryStateFeatureKey,
//   adapterCategory.getSelectors().selectAll
// );

// export const selectError = createSelector(
//   selectProductsFeature,
//   (state: ProductState) => state.error
// );

// export const selectErrorCat = createSelector(
//   selectCategoriesFeature,
//   (state: CategoryState) => state.error
// );

// // export const metaReducers: MetaReducer<ProductState>[] = !environment.production
// //   ? []
// //   : [];
