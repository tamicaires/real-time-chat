# ChatCast: Real Time Chat

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,prisma,nodejs,vite,react,tailwind" />
  </a>
</p>

---
ChatCast é uma aplicação de chat em tempo real que oferece uma experiência fluida e segura para comunicação entre usuários. Desenvolvido em TypeScript tanto para o backend quanto para o frontend, o projeto utiliza diversas tecnologias modernas para fornecer uma plataforma estável e eficiente.

<p align="center">
  <img align="center" width="100%" src="https://i.postimg.cc/7YwmcY9M/LOGIN-REGISTER.png" />
</p>

<img align="center" style="margin-bottom:100px" width="100%" src="https://i.postimg.cc/pTmmG8hc/ChatCast.jpg" />


## Tecnologias Utilizadas

- **Backend:**
  - TypeScript: Linguagem de programação tipada e de alto nível.
  - PostgreSQL com Prisma ORM: Banco de dados relacional com uma camada de acesso a dados robusta e moderna.
  - JWT (JSON Web Tokens): Mecanismo de autenticação compacto e seguro.
  - Socket.IO: Biblioteca JavaScript para comunicação bidirecional em tempo real entre clientes e servidores web.
  
- **Frontend:**
  - React com Vite: Framework JavaScript de código aberto para criar interfaces de usuário.
  - Zustand: Biblioteca de gerenciamento de estado leve e intuitiva para React.
  - React Hook Form: Biblioteca para criar formulários React de forma simples e eficiente.
  - Zod: Biblioteca de validação de dados altamente eficiente e fácil de usar.
  - Axios: Cliente HTTP baseado em Promises para o navegador e node.js.
  - Tailwind CSS: Framework de estilo CSS utilitário de baixo nível.
  - Socket.IO Client: Biblioteca cliente JavaScript para comunicação em tempo real com servidores Socket.IO.


## Recursos Principais

- **Autenticação Segura:**
  - Os usuários podem fazer login de forma segura, com autenticação do lado cliente utilizando JWT para receber tokens do backend. Caso não possuam uma conta, eles podem se registrar facilmente.

- **Gestão de Grupos:**
  - Os usuários têm a capacidade de criar grupos de chat, bem como entrar em grupos criados por outros usuários.
  - Podem enviar mensagens em grupos aos quais estão afiliados, promovendo uma comunicação eficaz e colaborativa.

- **Edição de Informações dos Grupos:**
  - Os administradores de grupos têm o poder de editar informações pertinentes aos grupos, garantindo que as configurações estejam sempre atualizadas e precisas.

- **Gestão de Membros:**
  - Os usuários podem sair de grupos caso desejem, mantendo controle sobre sua participação e privacidade na plataforma.


## Como Usar

1. **Instalação:**
    ```bash
    git clone https://github.com/tamicaires/real-time-chat.git
    cd chatcast
    ```

2. **Configuração do Backend:**
    - Instale as dependências:
      ```bash
      cd backend
      npm install
      ```
    - Configure o banco de dados PostgreSQL no arquivo `.env`.
    - Execute as migrações do banco de dados:
      ```bash
      npx prisma migrate dev
      ```
    - Inicie o servidor:
      ```bash
      npm run dev
      ```

3. **Configuração do Frontend:**
    - Instale as dependências:
      ```bash
      cd frontend
      npm install
      ```
    - Inicie o servidor de desenvolvimento:
      ```bash
      npm run dev
      ```

4. **Acesso à Aplicação:**
   - Acesse a aplicação em `http://localhost:3000` no seu navegador.

---

## Contribuição

Aceitamos contribuições da comunidade para melhorar e aprimorar nosso ChatCast. Para contribuir, por favor faça um fork deste repositório, faça suas alterações e envie um pull request descrevendo as alterações propostas.

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

**Desenvolvido por Tamires Caires [(link_para_perfil_developer)**

---
