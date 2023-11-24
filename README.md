# Caching
<p>In computing, a cache is hardware or software component that store data so that store data so that future requests for that data can be served faster. The data stored in a cached might be the result of an earlier computation</p>

<p>"Caching" refers to the process of storing and retrieving data from a trmporary storage area to speed up a access and reduce latency. the purpose of caching is to store copies of frequently accessed or expensive-to-compute data in a location that allows for quicker retrieval when the same data is requested again.</p>

#### Browser Caching:
<p>Browsers often cache static resources locally to avoid re-downloading them when a user revisits a website, This can include images, styleheets, scripts and assets.</p>

#### Server-Side Caching:
<p> Web servers and application servers and application server can cache data to reduce the need to regenerate the same content repeatedly. This can include caching database query results or pre-rendering frequently accessed data.</p>

#### Content Delivery Network (CDN) Caching:
<p>CDNs cache static content at multiple location around the world, reducing the plysical distance between the user and the server and improving the delivery speed of web content.</p>

#### Database Caching:
Database systems can use caching to store the results of frequent or complex databse queries. This helps to minimize the need to recompute the same query results, improving overal system preformance.

## Importance of Caching
<p>Caching plays a crucial role in enhnanceing the performance and efficincy of application.</p>

#### 1.Imporpved Performance:
<p>Cacing significantly enhances application speed by storing frequntly accessed data in a cache. When the same data is requested again. It can be quickly retrived from the cache insted of undergoing time-consuming cvomputations or database queries</p>

#### 2.Reduced Laency: 
<p>
By avoiding repetitive network requests or database queries, caching reduces the time it takes to retrieve data. This minimizes the latency associated with fetching information from external sources, eading to quicker response times for users.
</p>

#### 3.Enhanced Scalability:
 Caching is essential for scaling applications: As user traffic increases caching allows the system to handle more requests without overburding backedn resources. It provides a  mechanism to deliver a smooth and responsive user experiencee. even during peake usage periods.

## Which data shouldbe cached?

<p>Decideing which data to cache depends on the specific needs and characteristics of the application. Generally. you want to cache data that is accessed frequently and is relatively static meaning it doesn't change often.</p>

<p>Remember, the key is to identify data that is both accessed frequently and has a level of stabil;ity over time. Caching dynamic or rapidly changing data may lead to  serving outdated or inaccurate information. it's also essential to implement cach expiration policies to refresh the cache periodically and ensure that the data remains up-to-date</p>

## Which data should not be cached?
<p>While caching is a powerful optimization technique, not all data is suitable for caching. It's crucial to carefully evaluate the nature of the data and the requirements of the application befor deciding to cache specific information. Additionally. implementing cache expiration policies and considering cache invalidation strateges are essenitial to ensure that the cached data remains relevant and accurate over time.</p>


## Cache-Aside Pattern:
<p>The Cache-Aside Pattern, aslo known as lazy-load or Read-Through, is asimple and popular caching approach. In this pattern. the appplication code is responsible for both reading from and writing to the cache.</p>
<p>When the application needs data. it checks the cache first(cache hit). if the data is not in the cache(cache miss) the application fetches it from the original source (like a database) and then stores it in the cache for future use</p>
<p>Imagine you have a library (cache) at home. If you want to read a book (data). you check you8r library first. If the book is there. great! if not. you go to the bookstore (original source). get the book, and also put it in your library for next time.</p>

## Redis:
<p>Redis is in-memory database. which implies that the data must be ephemeral. But Redis does have two persistence (RDB or AOF) mechanisms built in, allowing it to store data on disk to recover from crashes or restarts.</p>

<p>Redis stores data as a key-value pair</p>

# How to run this application

- [x] Clone Git Repository
- [x] Open Terminal 
- [x] Run `yarn install`
- [x] Run `yarn dev`
- [x] Flow dockerCommand.md File
- [x] Install `npm install -g artillery`
- [x] Then Run `artillery run artillery.config.yml` for load testing

<!-- video - 130 -->
<!-- mnite: 01:38:05 -->