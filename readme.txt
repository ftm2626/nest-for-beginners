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

 