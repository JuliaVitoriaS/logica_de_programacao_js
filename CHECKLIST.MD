# setup inicial de um repositorio de um GitHub no visual Studio Code Local 

1. Limpar credencias de sistema
2. Limpar os dados do navegador 
3. Abrir o repositório no GitHub
4. Copiar a url do repositório (HTTPS)
5. Abrir o VS code 
6. se houver algum projeto aberto no VS code, então feche (CTRL + k  f)
7. Se houver algum usuario logado no VS code, então clique 'SAIR'
8. Verifique as variaveis `user.name`e `user.email` globais :
~~~bash
git config --global user.name 
git config -- user.email
~~~
9. Se as variaveis retornarem algum valor,redefina ambas as variaveis:
~~~bash
git config --global --unset user.name
git config --global --unset  user.email
~~~
10. Faça a clonagem do repositório no computador local:
~~~bash
git clone https://github.com/<usuario>/<repositorio>.git
~~~
11. Abra o projeto clonodo no VS Code:
~~~bash
code -r <repositorio_local>/
~~~
12. Faça login no VS Code Local para sincronizar suas extensões e temas
13. Ative o salvamento automático _(Auto Save)_:Arquivo > Salvamento automático 
