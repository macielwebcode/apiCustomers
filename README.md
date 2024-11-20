## init: npm i

## api para gerenciar: user, customers, demandas e files.

## criar um token para utilizar na middleware

## utiliza ORM Sequelize, fazendo relação 1 customer-> N files (fotos)

## rodar a api: npm run dev

## comandos sequelize - rodar uma migrate: npx sequelize db:migrate
## comandos sequelize - criar migrate: npx sequelize migration:create --name=nova-migration-demandas

## não deixar o down da migrate vazio, se precisar reverter com comando: npx sequelize db:migrate:undo:all
