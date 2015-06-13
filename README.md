#Project Name

![Yo Mama!](https://pbs.twimg.com/profile_images/406303048/yomamalogo-1.jpg)

##Scope


##Project Description
Your Manager has laid out the following requirements for the project: 

* 

##Learning Objectives
By the end of this project the employee will be able to...

* 

##References/Tools

 

##Instructions

###Creating Mock Endpoint
1. Go to [mockable.io](https://www.mockable.io/)
2. Click "Try Now"
3. Select "DEFINE A NEW REST API"
4. Creating an endpoint
  1. Set Path - Set the path you want to hit to get the list of yo mama jokes.  This shouldn't have any spaces and should describe the data the user is fetching.  Something like "jokes" or "yomama" would make sense.
  2. Set Verb - The verb is just the type of HTTP request we want to make.  We'll be using the GET verb because we're just fetching data from the backend.  If we wanted to store data in the backend we'd probably use the POST verb.
  3. Set Response Body - This is what the backend will return to us when we make a request to this endpoint.  Try pasting in the following JSON (JavaScript Object Notation):
     {
       jokes: [
         "joke1",
         "joke2",
         "joke3"
       ]
     }
  4. Click "Save" at the bottom of the screen
5. Starting the endpoint
  1. You should see the endpoint you just created with a red button on the left that says "Stopped".  It should look like this:
![Endpoint Stopped](http://i.imgur.com/wPAQ1Nk.png)

  2. Click the "Stopped" button to make your endpoint live!  The button should now look like this:
![Endpoint Started](http://i.imgur.com/RhIX6SU.png)

  3. Now we should test out the endpoint.  Click on the link underneath the "Name" column.  It should take you to a page that looks like this:
![Edit Endpoint](http://i.imgur.com/CzPbwfN.png)

  4. Click on one of the links in this section and make sure it takes you to a page with the JSON you had entered for the Response Body
![Endpoint Links](http://i.imgur.com/dxsxsde.png)

6. IMPORTANT - Your temporary account will expire in a day, so you if you want your mockable.io endpoint to keep working you must create an account in order to keep this API available.  Don't worry!  It's free!  Here's how you do it:
  1. Toward the top of the mockable site you should see this:
![Endpoint Will Expire](http://i.imgur.com/Ddu12Vz.png)

  2. Click the "Tell me more" link which will take you to the next screen.
  3. Click one of the icons at the bottom of the screen to sign in (Google, Facebook, or StackExchange).

    ![LoginIcons](http://i.imgur.com/pZo0Kjj.png)

##Vocabulary

*


##How to Submit
This project must be pushed back up to your repo on GitHub. Then you will share your link with the instructor

##Homework
Instructor will assign homework based on progress in class.
