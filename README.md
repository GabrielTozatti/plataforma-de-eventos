# 🧠 Plataforma de Gestão de Eventos

Este projeto é um painel administrativo desenvolvido com **Next.js** e **Styled Components**, com foco em organização, visual moderno e responsividade. Ideal para gerenciamento de eventos, com funcionalidades de login, listagem, busca e ações.

> Este projeto foi desenvolvido como parte do **processo seletivo da Tropa Digital** para a vaga de Desenvolvedor(a) Frontend.
---

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) – React Framework
- [Styled Components](https://styled-components.com/) – CSS-in-JS
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática
- [ESLint + Prettier](https://eslint.org/) – Padrão de código

---

## 📁 Estrutura de Pastas

````
├── /pages
│ ├── index.tsx → Tela principal
│ ├── login.tsx → Tela de Login
│ └── eventos.tsx → Listagem de eventos
│
├── /components
│ ├── LoginForm.tsx
│ ├── Layout.tsx
│ ├── Header.tsx
│ ├── Sidebar.tsx
│ ├── EventTable.tsx
│ ├── DropdownMenu.tsx
│ └── Pagination.tsx
│
├── /assets → Imagens e ícones
├── /styles → Tema e estilos globais
````

---

## 💻 Funcionalidades

- ✅ Login com layout responsivo
- ✅ Sidebar com navegação entre páginas
- ✅ Header com saudação ao usuário
- ✅ Tabela de eventos com:
    - 🔍 Campo de busca funcional
    - ➕ Botão "Inserir novo"
    - 📄 Menu de ações: Visualizar, Editar, Remover
    - 🔁 Paginação simulada
- ✅ Layout responsivo
- ✅ Tema com `styled-components`

---

## 🧪 Como rodar o projeto

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Gere o build de produção**
```bash
npm run build
npm start
```

## 👨‍💻 Desenvolvedor
Gabriel Tozatti
[LinkedIn](https://www.linkedin.com/in/gabriel-tozatti/) • [GitHub](https://github.com/GabrielTozatti)
