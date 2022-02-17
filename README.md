# Ebytr
É um serviço de tarefas a fazer que atualiza em tempo real para todas as pessoas que estiverem utilizando a página. Para este projeto foi utilizado NodeJS, MongoDB e React.

## :rocket: Começando
Este projeto utiliza algumas bibliotecas externas que são necessárias para que o projeto funcione corretamente. Instalaremos através do `npm`.

## :wrench: Instalação
1. Clone o Repositório.
  - `git clone git@github.com:BSY-Development/Ebytr.git`.
  - Entre na pasta que você acabou de clonar `cd Ebytr/`.
  - Entre nas pastas `client` e `server` e instale as dependências utilizando o comando `npm i`.

## :gear: Rodando o código
Após instalar as dependências do projeto, você está pronto para rodar a aplicação. Acesse a pasta server e utiliza o comando `npm start` para que o back end comece a funcionar, feito isto, vá até a pasta cliente e repita o processo para iniciar o front end. ** Importante ** Você deve estar com o MongoDB ativo (Utilize o comando abaixo para o ligar caso não esteja):
```sh
sudo service mongod start
```

## :gear: Fluxo de funcionamento
Ao iniciar todos os serviços, você pode acessar a aplicação através do [localhost:3000](http://localhost:3000/), onde você pode adicionar, editar e excluir cards com as anotações a sua escolha. Cada card é salvo no banco de dados MongoDB, as alterações funcionam de forma simultânea para todas as telas através do socket.io que irá conversar com o banco mandando as alterações.

## :nut_and_bolt: Testes
Os testes se encontram nas pastas `./client/src/tests para o Front End` e `./server/src/tests para o Back End`, O front irá testar se os elementos aparecem conforme é esperado e o back irá verificar se as models funcionam corretamente como deveria. Para rodar os testes utilize o comando `npm test` na pasta referente ao que deseja testar.

#### Por [Bruno Yamamoto](https://www.brunoy.dev/)
