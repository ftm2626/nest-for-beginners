A.Intro
1.npm i -g @nestjs/cli
2.nest new [name]
3.npm run start:dev
4.nest g module [name]
5.nest g contoller [users]
6.nest g service [users]


B.Controllers
-resposible for handling incoming request and returning responses to the client - for routing


C.Providers
- methods inside of service that holds the logic

D.DOT validation
- data validation
- input validation type

    .pipes->
    .transformation: transform input data to the desired from
    .validation: validate input data - handle in controller

    1.create dto folder in [users]
    2.create each dto a file
    3.npm i --save class-validator class-transformer

    .error handling
    .http exeptions - handle in services

E.Rest Api
    .database = neon.tech
        go to site and create a new database
    .orm = prisma
        1.npm i prisma -DO
        2.npx prisma init
        3.replace .env files with info from neon.tech dashboard.
        4.replace /prisma/schema.prisma with info from neon.tech dashboard.
        *get prisma vscode extension
        5.create the [name] model in /prima/scema.prisma
        6.run a migration to create table from model
        7.npx prisma migrate [dev] --name [name of migration] -> save sql statement in project as well

        *.if model changes run the command below
        8.npx prisma generate
        9.npx prisma migrate [dev] --name [name of migration]

        *.create database module and service
        10.nest g module database -> creates the database file in /src/database/database.module.ts
        11.nest g service database -> creates the database file in /src/database/database.service.ts
        12.export databaseService in database.module.ts and change database.service.ts



1:52:20