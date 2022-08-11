# 8/5

    Last day!!!

        We finished our site yesterday, and today we just did a little tweaking on some design stuff, making sure that everything is uniform to make it look nice and like a real website!! This has been a great project to work on, I feel like I have learned so much in the past few weeks. We can't wait to deploy next week 🙂

# 8/4

    Today I worked on:

        The test are all finished and we tweaked the css a little bit to make the colors different on the website. Some models got changed pretty late so we had to go and essentially wipe everyone's volumes and containers because they had the old migration and models data in them which was a bit of a hassle since all new pgadmin's had to be made afterwards as well for our test. But our site is fully functioning and now we just have to get the database on the website!!

# 8/3

    Today we worked on:

        Today we got the backend of receipts up and running. I started working on the unit test that we need to implement but was getting a lot of weird django errors. So after some digging it turned out that we needed to go into the pgadmin webpage itself and give our subscriptions and products permission to create databases on their own, so that it can run the tests. Once we did this we got the first test to pass!! Felt pretty good after struggling with it for a bit. Next up is to just complete the last of the test and then start deployment!

# 8/2

    Today we worked on:

        Today we were getting our API set up. While we were doing that I also started looking into making our unit test. It seems straight forward but trying to get the first one done is always the hardest! Once we get that running I'm sure we'll get the next ones easy. I can't believe how well our site is coming together!!

# 8/1

    Today we worked on:

        I started working on our actual subscription page that shows each box that we have, and a product that is in that box. Our buttons now take you to the checkout screen and once you have input your info you get taken to the receipt page! Pretty cool how much you can implement with React.

# 7/28

    Today we worked on:

        We got Auth to work!! Once we had the abstract user to work correctly, our tokens began populating! Basically our MVP is almost done which feels really good since we have all next week to work on this. I think that once we have our receipt model working we will be good to make everything nice and pretty!

# 7/27

    Today we worked on:

        Well it was an interesting day today. We needed to update our User model to AbstractUser to get our token working, which Django did NOT like at all. So we spent about 3 hours trying to clear that up and figure out why it was so mad when it is a built in feature. Several hours later we saw that when we did our first migration, it did not add an 'id' to our subscriptions model. So we put that in there and it fixed everything. Thanks Django, very cool of you 👍

# 7/26

    Today we worked on:

        We are still working on Auth, this is a pretty wild thing to implement. For some reason we are pulling a token but it is just null. Hopefully we will get it working tomorrow or at least by the end of the week.

# 7/25

    Today we worked on:

        I created a login page and added it to the nav bar, it is not 100% functional yet because we are still figuring out our JWT auth token, but is has the same theme as our page. It is taking a bit longer than we had wanted to implement. Adrian also created the card templates that we will be using for our products.

# 7/21

    Today we worked on:

        Today we worked more on our pages, Adrian added a checkout page for us. We have started working on the Auth page but it was a bit confusing an a little slow going, hopefully we will be able to finish that up today and get the checkout feature up and running :)

# 7/20

    Today we worked on:

        Today Adrian and I got the footer and header looking really nice and cohesive! Our group talked about starting the Auth and possibly assigning it to someone but we decided to do it has a group tomorrow!

# 7/19

    Today we worked on:

        We have our base pages set up! The sign up form is working and the Home page. There were still issues with Docker, but we are hopefully done with that. I know it is suppose to help seemliness work between different OS, but when we go from Windows to Mac sometimes it freaks out. We tried to use MDBootstrap but it has seemed to clash with regular bootstrap so we are removing it.

# 7/18

    Today we worked on:

        Got the poller 100% working and fixed some classic Docker nonsense. We have begun working on our front pages, like the Home page, and setting up our Nav bar and Footers. Once we have all of those set up we will be diving into our project a little more and adding things that we see fit.

# 7/15

Today we worked on:

    Today got a little crazy with our Docker and building files. After many hours and a lot of help it turns out that the file did not like that Adrian was running it on their Windows, and that it is fine running on a Mac. I am really curious to see if any other teams come across this issue. This took a lot out of us all today, but it was a great ad for Apple products :)

# 7/14

Today we worked on:

    We basically completed our backend today! All the views, models and urls are done for the subscriptions and the products. I feel like we got this project up and running so quickly, I am super proud of us!! Now to get the poller up and we will be all set to move on to the front end.

# 7/13

Today we worked on:

    Getting our poller up along with creating our models and some views. Our React page is also up, it seems like the project is off to a good start. Also, it was our first time using live share and we found it more helpful to work in pairs rather than with the whole group.

# 7/12

Today we worked on:

    We reformatted our project specs to combine our 4 microservices into two. Adrian and I will be combining users and subscriptions, while Nellie and Evan will be combing the two different subscription boxes. We came to this decision because when we were trying to create our outline for polling and models we realized that we were creating a lot more work for ourselves than we needed to.

# 7/11

Today we worked on:

    Getting the django app up and running. Something new I learned today was that you can create your own git short cuts.
