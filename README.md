<h1 align="center">Ignite - Conceitos de NodeJS - Challenge</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 💻 Projeto

Esse projeto faz referencia ao primeiro desafio do curso Ignite de NodeJS da Rocketseat, este projeto foi feito com este [`template`](https://github.com/rocketseat-education/ignite-template-conceitos-do-nodejs)

## 🚀 Como executar

Para iniciar o seu servidor Phoenix:

- Instale as dependências com `yarn`
- Dê o start no projeto com `yarn dev`
Agora você pode acessar [`localhost:3333`](http://localhost:3333) do seu navegador.

- Você também pode executar os testes de integração com `yarn test`

## 📋 Rotas

| Rota | Método | Descrição |
| --- | --- | --- |
| /users | POST | Insere um usuário |
| /todos | POST | Insere um to-do |
| /todos | GET | Retorna os to-dos de um usuário |
| /todos/`:id` | PUT | Atualiza um to-do de um usuário |
| /todos/`:id` | DELETE | Deleta um to-do de um usuário |
| /todos/`:id`/done | PATCH | Atualiza o atributo `done` para `true` de um todo |


Todas as rotas estão disponíveis no arquivo Insomnia_routes.json, basta fazer o import em seu Insomnia.

---

Feito com ♥ por Giovanni Bússola - Aluno [`Rocketseat`](https://rocketseat.com.br)