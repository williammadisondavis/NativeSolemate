CREATE TABLE users (
        id serial primary key,
        email varchar(255),
        first varchar(255),
        last varchar(255),
        password varchar(255),
        description text,
        location varchar(255),
        goal1 varchar(255),
        goal2 varchar (255),
        goal3 varchar (255)
);

CREATE TABLE goals (
        id serial primary key,
        userid varchar(255),
        goal varchar(255)
);
