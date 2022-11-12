import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { Products, Product } from '../types/products';

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getFavouriteProducts: builder.query<Products, void>({
            query: () => `products?limit=8`,
            providesTags: [{ type: "Products", id: "FAVOURITE_PRODUCTS_LIST" }],
        }),
        getAllProducts: builder.query<Products, void>({
          query: () => `products?limit=16`,
          providesTags: [{ type: "Products", id: "PRODUCTS_LIST" }],
        }),
        getProductsCategories: builder.query<String[], void>({
            query: () => `products/categories`,
            providesTags: [{type: "Products", id: "CATEGORIES_LIST"}]
        }),
        getProduct: builder.query<Product, {productId: string | undefined}>({
            query: ({productId}) => `products/${productId}`,
            providesTags: [{type: "Products", id: "PRODUCT_DETAILS"}]
        }),
        getProductByCategory: builder.query<Products, {category: string | undefined}>({
            query: ({category}) => `products/category/${category}`,
            providesTags: [{type: "Products", id: "PRODUCTS_BY_CATEGORY_LIST"}]
        }),
        loadMoreProducts: builder.query<Products, {skip: number | undefined}>({
            query: ({skip}) => `products?limit=16&skip=${skip}`,
            providesTags: [{ type: "Products", id: "LOAD_MORE_PRODUCTS" }],
        })
    }),
})

export const {
    useGetAllProductsQuery,
    useGetProductsCategoriesQuery,
    useGetFavouriteProductsQuery,
    useGetProductQuery,
    useGetProductByCategoryQuery,
    useLoadMoreProductsQuery
  } = productsApi;
    