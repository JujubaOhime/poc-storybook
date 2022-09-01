# Commits

Tendo como base esse [post](https://medium.com/@larymagal/usando-commit-lint-para-gerar-releases-no-github-actions-27f4b808d52f) da [Laryssa](https://github.com/laryssamagalhaes), os commits enviados ao repositório deverão seguir o seguinte padrão:

<img width="450" alt="padrão do commit" src="https://miro.medium.com/max/1400/1*kp2vQ5s25yGQTH7JCuelTg.png" />

**1.** Já existem alguns tipos pré-determinados, mas é possível criar novos, se for necessário:

|     | Tipo         | Significado                                                                          |
| --- | ------------ | ------------------------------------------------------------------------------------ |
| 🎁  | **feat**     | Adicionou nova feature                                                               |
| 🐞  | **fix**      | Consertou um bug                                                                     |
| 📚  | **docs**     | Alterou apenas documentação                                                          |
| 💅  | **style**    | Alterou apenas (ou majoritariamente) o estilo                                        |
| ♻️  | **refactor** | Refatorou alguma parte do código                                                     |
| 🚀  | **perf**     | Realizou mudanças de código com intuito de melhorar perfomance (improvements)        |
| 🕵️‍♀️  | **test**     | Adicionou ou ajustou teste(s)                                                        |
| 🚧  | **build**    | Fez mudanças relacionadas ao processo de build ou ferramentas/bibliotecas auxiliares |
| 🗑   | **revert**   | Reverteu um commit anterior                                                          |
| 📦  | **chore**    | Alterações que não afetam o usuário diretamente                                      |
| ⚙️  | **ci**       | Integração contínua                                                                  |

**2.** O escopo diz respeito a parte do projeto que o commit está fazendo alterações, por exemplo, um fix de um bug no perfil ficaria algo assim:

     fix(profile): ...

**3.** A mensagem seria uma descrição do que foi feito no commit em poucas palavras, mas não muito genérica:

     feat(calendar): add holidays to the calendar

