# Gameplay App

GameplayApp é um aplicativo para criação de grupos gamers. Dentro do app é possível criar grupos para jogar seus games favoritos com os amigos.O aplicativo conta com diversas modalidades de partidas, por exemplo: Ranqueada, Duelo 1x1, Casual, etc…

Você poderá adicionar qual será o servidor do discord, data e hora e uma descrição da jogatina com os seus amigos. Todos os jogadores com o acesso a esses servidores do discord automaticamente terão acesso a esse compromisso e poderão participar.

## Tecnologias usadas

O Aplicativo desenvolvido em Flutter e se comunicará com o backend por meio de um API Restful, desenvolvida em NodeJS na sua versão mais recente (LTS) utilizando a biblioteca ExpressJS e salvando as informações de Login em uma base de dados MySQL.

### Mobile

- Dependências
  - Flutter: 3.0
  - Google Fonts: 4.0.4
  - Flutter Native Splash: 2.3.0
  - http: 0.13.6
  - Webview Flutter: 4.2.1

---

### Backend

- Dependências
  - Node: 18.16.0
  - Express: 4.18.2
  - Express Session: 1.17.3
  - Passport: 0.6.0
  - Passport-discord: 0.1.4
  - DotEnv: 16.1.4
  - EsLint: 8.42.0
  - Nodemon: 2.0.22

---

## Objetivo

Em suma, o projeto GameplayApp busca atender à demanda crescente por uma plataforma que facilite a organização de jogatinas entre amigos na comunidade gamer. Com uma abordagem estratégica, parcerias potenciais e uma implementação técnica sólida, esperamos oferecer aos usuários uma experiência única e satisfatória, proporcionando momentos de diversão e conexão por meio dos jogos.

## Instalação do projeto

- Visual Studio Code
- Android Studio
- Flutter
- Git
- Node
- MySQL

1. Instalar NodeJS

   - Faça o download do node em
     [Download NodeJS](https://nodejs.org/en)
   - Se for windows é so clicar em next.
   - Para verificar se o node está instalado corretamente
     abra o seu terminal e digite **_node -v_** se deu tudo certo, o prompt irá mostrar a versão do node.

2. Clonagem do projeto:

   - Abrir o terminal do seu sistema
   - Vá até a pasta onde deseja clonar o projeto
   - Execute o seguindo comando para clonar o projeto:

     `git clone <url_do_projeto>`

   - Depois de executar o **_git clone_** entre no diretório onde o projeto se encontra.

3. Instalando as dependências:

   - Dentro do projeto, execute o seguinte comando para obter as depêndencias:
     `npm i`

4. Executando o projeto:

   - Para iniciar o projeto execute o comando:
     `npm run start`

5. Instalação do MySQL
   - Faça o download nesse link
     [Download MySQL](https://dev.mysql.com/downloads/mysql/)
   - A instalação no windows é bem simples siga o tutorial do instalador e defina uma senha para o seu usuário root.
   - Depois abra o MySQL Workbench e configure a conexão de acordo com o que você informou no instalador.

### Links

[Front-end Mobile](https://github.com/victoraaquino/gamplay-app-uninove)

[Back-end](https://github.com/Arthurlimadev/techtok-backend)
