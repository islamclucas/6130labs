# cloud-week1
Repo for Cloud 6130 Assignment.  NotFLIX DB


Use <docker-compose up> to run.
  Can add items to NotFLIX database 
  3 rabbitmq nodes can be accesed online
  
  Beginnings of node messaging and leadership elections, with time specifics and console updates.
  
  
Clone this project in your directory:
  git clone https://github.com/islamclucas/cloud-week1 
Run project using:
  sudo docker-compose up
 
The MongoDB can be tested and edited via the connection defined in app.js file, then creating a playground to send GET and POST requests:
  
   'mongodb://localmongo1:27017,localmongo2:27017,localmongo3:27017/notflixDB?replicaSet=rs0';
   
