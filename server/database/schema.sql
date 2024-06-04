create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table pokemon (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  image_url varchar(255) not null
);