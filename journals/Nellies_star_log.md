## July 15, 2021

*

*

## July 14, 2021

* Worked on bugs in views on POST endpoints, and bugs in change of model to Clothing_Inventory

* Learned about the UUID field

* Worked on the TextChoices field for better experience

Did some pair coding as driver with Adrian navigating. They were super helpful! A key takeaway: comment out try/except in order to see what the actual error is, try/except can be too blunt or general in its error message. Then fix accordingly!

I was trying to associate an input property for a POST endpoint like in inventory in CARCAR, when, say the vehicle model model had a foreign key to manufacturer, but it wasn't working. Adding a get query fixed it.

## July 13, 2021

* Worked on models, views and registration for products service

* Tested the views

We used LiveShare for the first time, I like it, honestly.

We couldn't get the POST endpoint to work, but we may not need it for the project, we'll add products through the admin page.


## July 12, 2021

* Collab'ed on more detailed context map, made flowchart of the 4 microservices.

* Started to implement backend of clothing microservice.

* Then discussion of the complexity of having so many microservices. Decided to pare the project down to just 2 microservices.

* Deleted the clothing microservice and added the skeletons of its models to products.

It was a little scary to collapse almost half the project but I think it was a good discussion and consideration of how to integrate everything. It would have been way more complex than needed, otherwise. And better to do a fundamental change now than later.


## July 11, 2021

Today I worked on:

* Docker setup of my microservice, Clothing, with Django services.

* Collaborated on context map for site, as a group.

Definitely a good idea to make sure I have this microservice name, and not the default name from the docs, when setting up.

Getting a better handle on git merges, I think.