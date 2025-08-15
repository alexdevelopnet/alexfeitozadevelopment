<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
<h1 align="center">Alex Feitoza (AlexDevelopNet) 👨‍💻</h1>
<h3 align="center">.NET Senior Developer • Clean Architecture • Docker • Kafka • SQL/NoSQL • CI/CD -Angular 

<p align="center">
  <a href="#pt-br">🇧🇷 Português</a> | <a href="#en-us">🇺🇸 English</a>
</p>

---

## 🇧🇷 Sobre mim

💼 Desenvolvedor .NET com **+14 anos de experiência** em TI, especialista em sistemas escaláveis e arquitetura limpa.  
📍 Moro em **Suzano - SP**, atuando em **projetos remotos e internacionais**.  
🎓 Formado em TI pela **UNIBTA**, cursando **mestrado em tecnologia**.  
🧠 Foco em **boas práticas, SOLID, testes automatizados e microsserviços**.  
⚙️ Conhecimento em: `.NET Core`, `RabbitMQ`, `Kafka`, `Docker`, `Azure`, `SQL Server`, `PostgreSQL`, `MySQL`, `JWT`, `CQRS`, `DDD`.

📚 Estudando **React Native**, **DevOps** e **Inglês técnico para o mercado global**.

---

## 🇺🇸 About Me

💼 .NET Developer with **14+ years of experience**, focused on scalable software and clean architecture.  
📍 Based in **Suzano - SP, Brazil**, working on **remote and international projects**.  
🎓 Graduated in IT from **UNIBTA**, currently pursuing a **Master’s degree in Technology**.  
🧠 Passionate about **SOLID principles, automated testing, and microservices**.  
⚙️ Skilled with: `.NET Core`, `RabbitMQ`, `Kafka`, `Docker`, `Azure`, `SQL Server`, `PostgreSQL`, `MySQL`, `JWT`, `CQRS`, `DDD`.

📚 Currently studying **React Native**, **DevOps**, and **technical English**.

---

## 🚀 Tecnologias

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="40px"/>
</p>

---

## 🎯 Áreas de Atuação

- ✅ Microsserviços com .NET 6/8
- ✅ APIs REST seguras com JWT e validação
- ✅ Docker + Docker Compose
- ✅ Kafka e RabbitMQ para mensageria
- ✅ Testes automatizados (unitários e integração)
- ✅ Clean Architecture, SOLID, DDD, CQRS
- ✅ CI/CD com GitHub Actions / Azure DevOps
- ✅ Banco de dados: SQL Server, PostgreSQL, MySQL, SQLite

---

## 📷 Conteúdo e Contato

<p align="left">
  <a href="https://instagram.com/anfsusax" target="_blank">
    <img src="https://img.shields.io/badge/-@anfsusax-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
  </a>
  <a href="https://www.youtube.com/channel/UCXpdgdfF92RqvSytlx2LSKw" target="_blank">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/alex-feitoza-6056a5237" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:alexdevelopnet@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>

---

## 📊 GitHub Stats

<p align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=alexdevelopnet&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=alexdevelopnet&layout=compact&langs_count=8&theme=algolia"/>
</p>
>>>>>>> f20d29b09a5414dd1c5cf90b3fe8818e1f7d4a2e
