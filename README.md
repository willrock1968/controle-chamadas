# Controle de Chamadas de Cursos

O projeto tem como objetivo otimizar o lançamento e 
acompanhamento de chamadas de turmas de cursos técnicos
e de qualificação. 

Endereço de Deploy - GitHub Pages
https://utfpr-gp.github.io/roubank-app/


Checklist
 Criar um repositório no GitHub com a estrutura do Gitflow, incluindo pelo menos as branches principais "main" e "develop."
 Utilizar componentes de um framework CSS, como Bootstrap, Materialize ou outro à sua escolha.
 Apresentar as telas com layout responsivo, adaptando-se a diferentes tamanhos de tela, usando um framework CSS ou implementações personalizadas.
 Desenvolver o layout da aplicação com componentes, tornando o cabeçalho e o rodapé componentes reutilizáveis.
 Aplicar pelo menos dois tipos de data-binding, como Interpolation, Property Binding, Event Binding, Two-Way Data Binding,
 Empregar variáveis de template e a anotação ViewChild para interagir com elementos do DOM ou componentes diretamente no template ou no código TypeScript do aplicativo.
 Estabelecer a passagem de dados entre componentes por meio da hierarquia de componentes, empregando as anotações @Input e @Output.
 Transferir dados, por meio de serviços, entre componentes que não estão diretamente relacionados.
 Mapear os componentes às rotas no módulo de rotas, criando uma estrutura de navegação eficiente.
 Permitir a navegação fluida entre as diferentes páginas do aplicativo por meio de links e botões de navegação.
 Validar os campos do formulário com expressões regulares (REGEX) e apresentar as mensagens de erro.
 Implementar máscaras em campos de formulário, quando necessário, para melhorar a experiência do usuário ao inserir dados.
 Desabilitar o botão de envio (submit) enquanto o formulário estiver em um estado inválido.
 Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Promises.
 Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Observables.
 Criar o cadastro completo de uma entidade, incluindo operações de criação, leitura, atualização e exclusão (CRUD) utilizando uma API, como o JSON Server.
 Utilizar o armazenamento local (LocalStorage ou SessionStorage) para armazenar dados temporários, quando necessário.
 Aplicar a diretiva estrutural ngFor para apresentar uma lista dinâmica de dados em seu aplicativo.
 Utilizar a diretiva ngIf para controlar a exibição ou ocultação de elementos com base em condições específicas.
 Formatar a apresentação de dados com Pipes, de acordo com os requisitos do aplicativo.
 Executar o processo de build da aplicação e realizar o deploy para tornar o aplicativo acessível online.

Manual de execução

## Instalação

No front-end Para instalar o projeto em sua máquina, basta fazer o clone do repositório e fazer o npm install para instalar as depêndencias. 

No Back-end basta fazer o clone também 
do projeto desenvolvido no spring boot com java. 
Você também preciso importar a estrutura sql do 
banco de dados que é o arquivo estrutura_banco.sql, ou 
simplesmente rodar o back-end que o hibernate do java irá 
criar as entidades.


## Uso

Como o front-end ainda não tem login, consultar o arquivo 
AppRoutingModule para visualizar as rodas disponíveis, após
entrar em qualquer rota disponível pela url, basta navegar 
pelo menu dentro da aplicação.

## Licença

Projeto desenvolvido por Willian dos Reis de Souza 
Copyright © 2023 Todos os Direitos Reservados.
