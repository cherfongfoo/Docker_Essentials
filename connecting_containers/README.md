# Connecting Database and App Container

This is a subset of the tutorial from:
https://www.linode.com/docs/applications/containers/docker-container-communication/#install-and-configure-postgresql


### Setting up PostGreSQL

 Getting the  postges image:

`docker pull postgres`

Running the Container with a backup.sql volume

``docker run -d -v `pwd`:/backup/ --name pg_container postgres
``
Access the docker image and create a sample database

`docker exec -it pg_container bash`

`cd backup`

`su - postgres`

`psql -d template1 -c "ALTER USER postgres WITH PASSWORD 'newpassword';"
`
`createdb nodejs
`
`psql nodejs
`

Create the sample table

`nodejs=# CREATE TABLE hello (message varchar);
`
`nodejs=# INSERT INTO hello VALUES ('Hello world');
`

`nodejs=# \q`

`pg_dumpall > backup.sql`

`exit`

### Build the node js container

`docker build -t node_image .`

Deploy the app with --link to the PostGre Container. 

`docker run -d --name node_container --link=pg_container:database node_image
`

Open /etc/hosts in node_container to confirm that the link has been made

`docker exec -it node_container cat /etc/hosts
`

`172.17.0.2  database  pg_container
`

Run the node app and you should see "hello world"

`docker exec -it node_container node home/app.js`