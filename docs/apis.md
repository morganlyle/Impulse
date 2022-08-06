# APIs

## Create a new user

* **Method**: 'POST'
* **Path**: /api/users

Input:

```json
{
  "username": string,
  "password": string,
  "email": string,
  "subscribed": booleanField(default=False),
  "address": string,
}
```

Output:

```json
{
  "username": string,
	"email": string,
	"first_name": string,
	"last_name": string,
	"password": string,
	"address": string,
	"id": integer
}
```

## Create a new product subscription box

* **Method**: 'POST'
* **Path**: /api/product_boxes

Input:

```json
{
  "name": string,
  "products": manytomany
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