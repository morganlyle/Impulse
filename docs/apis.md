# APIs

## Create a new user

* **Method**: 'POST'
* **Path**: /api/users

Input:

```json
{
  "first_name": string,
  "last_name": string,
  "username": string,
  "home address": string,
  "email address": string,
  "password": string
}
```

Output:

```json
{
  "first_name": string,
  "last_name": string,
  "username": string,
  "home address": string,
  "email address": string,
  "password": string
}
```

## Create a new product subscription box

* **Method**: 'POST'
* **Path**: /api/product_boxes

Input:

```json
{
  "username": foreignkey (user),
  "products": manytomany (products)
}
```

Output:

```json
{
  "username": foreignkey (user),
  "products": manytomany (products)
}
```

## Create a new clothing subscription box

* **Method**: 'POST'
* **Path**: /api/clothing_boxes

Input:

```json
{
  "username": foreignkey (user),
  "clothing": manytomany (clothes),
  "accessories": manytomany(accessories)
}
```

Output:

```json
{
  "username": foreignkey (user),
  "products": manytomany (products),
  "accessories": manytomany(accessories)
}
```