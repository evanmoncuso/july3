#july3 Play Application

## High Level...
On a high level, this exists to help mean learn full stack apps. We'll see how that really turns out. I want to get practice working from scratch on things.

## PLAN
### FRONT END
The front end will be done with REACT, I think. Since that's the one I know how to use.

There will be three main components

1. Input area:
This is where the user will input the line they want the app to read back.
It will consist of a div, containing an input field, and a submit button
The div will target the hard coded header in the html page.
2. Something to display the returned data
... Either an audio element or another window of some sort.
3. A collection of all the past searches a user has made.
... Most importantly, this area will be a collection that holds a numbers of smaller list items. If I can make it so you click the item and it plays, great. If not, that's acceptable, too.



### SERVER
The server will be what does all the heavy lifting. The server will receive all the requests from the client and forward them to the WATSON API

The work flow will look something like this for the server-side actions

1. client hits submit on the page and the request is made to the server
2. Server does things and sends the query over to the ibm api
3. The server also logs the following into the database
... request-phrase, date and time, hopefully the response from the api.
... THIS PROBABLY MEANS PROMISES!!!

### DATABASE
This will probably be a relatively simple db. Just one table that I can imagine. Detailed above.
