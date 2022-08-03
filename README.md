## Impulse

  * Adrian
  * Evan
  * Morgan
  * Nellie

  * The one stop shop for subscription boxes with impulse buys catered directly to you!


## Intended Market

  * Anyone who is curious about trying new things or anyone who is delighted by the novelty of things and stuff.
  * For people who like the novelty of receiving a box of products catered directly to them.


## Functionality

Users:
  * Users can get items from the same parent category, but not the same child category * * for a set amount of time
  * Users can take a quiz to determine what they get in their boxes, Users can retake * * the quiz whenever they want to change what they can possibly get
  * Users can suggest items for the site in a form, will be added to inventory pool if the votes are high enough

Inventory:
  * Inventory will update with current items and things available for boxes
  * Inventory will sort itself into tags based on what the user picks for their box
  * Users will be able to purchase directly from the inventory at a premium price
      * Item will be added to the user's box if they are subscribed, if not, it will ship
      * immediately.

Clothes and Accessories Rental:
  * A similar subscription box but the items in it will need to be returned.
  * Clothes and Accessories can be picked for certain occasions based on website tags
  * Boxes can be recycled and returned for a discount on the next months box.
  * If the rental isn't returned in the alloted time frame, the items price will be charged to the user.

Social Media Forums:
  * Users can post photos of their boxes and stylings to the forums
  * Users can submit possible items for inventory and be voted on.
  * Users can leave reviews of boxes they have received and people can comment on them.


## Design

* [API design](docs/apis.md)
* [Data model](docs/data-model.md)
* [GHI](docs/ghi.md)
* [Integrations](docs/integrations.md)



## Want to test Impulse on your own machine? Want to make your own storefront based on Impulse? Follow these steps!

For Mac users:
* Fork, Clone, and Star the repository from [MEAN Coders](https://gitlab.com/mean-coders/module-three-project)
* In terminal, run bash hard-reset.sh
For soft resets:
* run soft-reset.sh

(dev note: hard-reset.sh MUST be run on first start or no databases will exist)

For Windows users:
* Fork, Clone, and Star the repository from [MEAN Coders](https://gitlab.com/mean-coders/module-three-project)
* On first start, in powershell, run:
    * docker volume create postgres-data
    * docker volume create pgadmin
    * docker-compose up --build
For soft resets, in powershell:
* docker-compose down
* docker-compose up --build

(dev note: the hard-reset.sh and soft-reset.sh files can be ran on Windows with a git bash terminal or WSL)


Congratulations, you've now installed Impulse on your local machine!

For more functionality, once the containers are running:
* create a superuser in the Products container via Docker CLI
* navigate to localhost:8080 and login with the new superuser account
* Create products and clothing to populate the things and clothing pages
* Subscription boxes are created in house and based on a monthly item selection from the product pool (receipts are created via the Checkout page.)
