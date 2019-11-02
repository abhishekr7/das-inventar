# INVENTRO
A web application for enabling firms to take care of their analytics needs

# SQL

**Connect to the SQL server**
```
mysql -u root -p
password: (root)
```
**Select Database**
```
use inventro
```
**Create Table**
```
create table orders (id INT, name VARCHAR(10), quantity INT, purchase_date DATE);
```
**Insert a row**
```
insert into orders values(1, 'test', 0, '2019-11-02');
```
**View table**
```
select * from orders;
```
# Components

Upload csv 

Analytics (id, name, quantity, date of purchase) -----> Consider a fix schema

+ Overall (time series) 

+ Product wise dynamic content generation (time series)

+ Date of addition(Comparison)

+ Single date which products did well

Run command 
```
node app.js
```

Terminate command

1. Ctrl + C

2. lsof -i tcp:<port>

3. kill -9 <PID>

## Async - Await

https://stackoverflow.com/questions/12030248/what-is-the-right-way-to-make-a-synchronous-mongodb-query-in-node-js
