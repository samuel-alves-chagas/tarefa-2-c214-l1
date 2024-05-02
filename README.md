![CI-CD](https://github.com/Inatel-C214/ToDoList/actions/workflows/cicd.yml/badge.svg)

A aplicação é uma casa de câmbio, para executar é necessário ter o Node instalado, depois executar 

```
npm i
```

Para rodar o sistema basta fazer 
```
npm run start
```
O sistema vai "consultar" a cotação (retorno 3) e multiplicar o valor de entrada por essa cotação


Para rodar os testes do sistema basta fazer
```
npm run test:unit
```
Os testes vão buscar o valor mockado da cotacao (retorno 4) e multiplicar o valor de entrada por essa cotação
