## July 20, 2021

* Completed styling for About Us page.

I kept working on getting more familiar with React and Bootstrap. Tried out different classes for ClassName in tag until I was happy with default font size, and automatic separation of the cards in the About Us section.

The rest of the time we pored over the Auth Cookbook. I looked back over the completed Fearless Frontend exercise for context, and we chatted about which step to take next; decided to start with trying openssl as a group tomorrow.

## July 19, 2021

* Added some styling to SignUpForm

* Added new favicon

* Started the About Us page

I dug into favicons a bit today, hadn't realized that they're different from other kinds of image files and not easily generated from a photo I already have. It's small, but we like how professional it looks.

I also started digging into using Bootstrap to create cards for the About Us page. They still need styling but are starting to look good.

## July 18, 2021

* Poller works now.

* Got first version of front end on sign-up page working.

Most of us had Docker issues with compose up, spent morning debugging. If error message re: absolute file path, then check yaml file for volume path, may need '/' or './' in front of the path. And more CR/LF issues! for the windows users.

Evan and I worked on the sign-up page this afternoon. We'll change the styling, but it's a go for now. We had some trouble importing react-router-dom, so Adrian said to install npm on the docker command line. That worked!


## July 15, 2021

CR/LF (Carriage return / line feed) issue took hours to discover! and a minute to fix. We needed this fix to get the poller working and then to continue onto working on frontend.

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