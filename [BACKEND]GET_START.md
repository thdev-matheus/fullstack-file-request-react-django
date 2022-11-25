# Iniciando o Back End Separadamente

<br>

## Clonando o repositório:
---
<br>
Se você deseja iniciar apenas o back end da aplicação, é bem fácil. Siga o passo-a-passo:

- Clone a aplicação para a sua máquina local

```shell
git clone <chave-para-clonagem-do-repositório>
```

- Em seguida entre na pasta que clonou do repositório

```shell
cd caminho/para/o/repositório/clonado
```

- Abra o projeto no seu vsCode ou ide preferida
```shell
code .
```
<br>

## Configurando o Back End:
---
<br>

- na pasta backend você precisará clonar o arquivo .env.example e renomeá-lo como .env (isso é muito importante pois a aplicação depende disso para funcionar)

- No seu arquivo .env você precisará preencher os dados que estão vazios com a sua configuração, veja:

```.env
POSTGRES_HOST={Não precisa configurar}
POSTGRES_USER=(Não precisa configurar)
POSTGRES_PASSWORD=(Não precisa configurar)
POSTGRES_DB=(Não precisa configurar)

PORT=(escolha uma porta)

SECRET_KEY=(escolha uma chave secreta para a aplicação)
```

- Perceba que exeistem outras configurações que você não precisou configurar. Isso se dá porque essas configurações servem para o postgres que é o banco relacional escolhido para a aplicação. Mas não se preocupe para iniciar o backend iremos usar o SQLite3

- Agora abra um terminal, no vs code mesmo e digite os seguintes comandos:

```shell
TESTE=TESTE python manage.py migrate
```

```shell
TESTE=TESTE python manage.py runserver
```

- prontinho agora o back end já está iniciado no endereço:

> localhost:8000

O ideal para testar a aplicação é usar um cliente http tal com o insomnia. Mas fique a vontade para testar e não esqueça de consultar a documentação. Vou deixar o link abaixo pra você.

<br>
<br>

<a href="https://thdev-matheus.github.io/fullstack-file-request-react-django/" target="_blank">CONSULTE A DOCUMENTAÇÃO AQUI!</a>

<br>

### E não esquece de me dar um feedback, hein? Isso é muito importante para o meu crescimento.

