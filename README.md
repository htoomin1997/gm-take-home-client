Something that I did not anticipate, is that Big Sur actually messed up a lot of my dbs. Both Mongo and Postgres stopped working after the update!!! :(

I ended up using the Cloud version of mongo because you can create a free cluster. Because there is no information in here that is too sensitive, I have kept the connection string in the code itself, but that should usually be put in a .env file to be git ignored.

=======Specifications=======

Build Environment: MacOS

