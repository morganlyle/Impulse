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
* **Path**: /product_boxes

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
  "name": string,
  "products": manytomany
}
```

## Create a new clothing subscription box

* **Method**: 'POST'
* **Path**: /clothing_boxes

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
  "name": string,
  "products": manytomany
}
```

## Create a new product

* **Method**: 'POST'
* **Path**: /clothing

Input:

```json
{
  'name: string,
  'picture_url': string,
  'description': string
}
```

Output:

```json
{
  'name: string,
  'picture_url': string,
  'description': string
}
```

## Create a new style product

* **Method**: 'POST'
* **Path**: /clothing

Input:

```json
{
  'name: string,
  'picture_url': string,
  'description': string
}
```

Output:

```json
{
  'name: string,
  'picture_url': string,
  'description': string
}
```

## Create a instance of a product

* **Method**: 'POST'
* **Path**: /product_inventory

Input:

```json
{
  'name': string,
  'color': string,
  'sku': string
}
```

Output:

```json
{
  'name': string,
  'color': string,
  'sku': string
}
```

## Create a instance of style product

* **Method**: 'POST'
* **Path**: /clothing_inventory

Input:

```json
{
  'name': string,
  'color': string,
  'sku': string
}
```

Output:

```json
{
  'name': string,
  'color': string,
  'sku': string
}
```


## Create a instance of a SUBSCRIPTION box

* **Method**: 'POST'
* **Path**: /api/subscriptions

Input:

```json
{
  'model_number': string,
  'price': string,
  'products': foreignKey,
  'clothing': foreignKey
}
```

Output:

```json
{
  'model_number': string,
  'price': string,
  'products': foreignKey,
  'clothing': foreignKey
}
```

## Create a instance of a receipt

* **Method**: 'POST'
* **Path**: /api/receipts

Input:

```json
{
  'firstName': string,
  'lastName': string,
  'email': string,
  'address': string,
  'address2': string,
  'country': string,
  'state': string,
  'country': string,
  'username': string,
  'orderNumber': string,
  'zip': string,
  'price': string,
}
```

Output:

```json
{
  'firstName': string,
  'lastName': string,
  'email': string,
  'address': string,
  'address2': string,
  'country': string,
  'state': string,
  'country': string,
  'username': string,
  'orderNumber': string,
  'zip': string,
  'price': string,
}
```

