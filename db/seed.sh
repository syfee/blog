mongo blog --eval 'db.articles.remove({})'
mongoimport  --db blog --collection articles --file ./articles.json 
# mongoimport  --db blog --collection users --file ./users.json 
