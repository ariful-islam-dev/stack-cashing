# Redis Command
<p>Open any terminal in your operating system</p>

- `docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 -e REDIS_AGRS="--requirepass123456789" redis/redis-stack:latest`
- Run Redis using contianer Id `docker exec -it 567370f5e69c bash`
- Run `redis-cli` for view port
- Run `keys *` View all keys
- If show that's message `NOAUTH Authentication required`. Run `AUTH 12345678`
- Run `set user:name ariful`
- Run `get user:name`
- Run redis in localhost:8001