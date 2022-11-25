# Iniciando a aplicação com o docker compose

<br>

## Clonando o repositório:
---
<br>
Se você possui o docker juntamente com o docker compose em sua máquina, então fica mais fácil subir os containers da aplicação. Siga o passo-a-passo:

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
POSTGRES_HOST=database
POSTGRES_USER=(escolha um nome usuário)
POSTGRES_PASSWORD=(escolha uma senha)
POSTGRES_DB=(escolha um nome para o db)
PORT=5432

SECRET_KEY=(escolha uma chave secreta para a aplicação)
```

- Agora que já configurou o .env o backend está pronto para ser iniciado. Vamos para a configuração do front.

<br>

## Configurando o Front:
---
<br>

- Depois que o back end estiver pronto pra ser iniciado, retorne ao terminal e entre na pasta frontend

```shell
cd caminho/para/o/repositório/frontend
```

- Execute o comando do NPM para instalar as dependências

> é importante que seja usado o NPM como gerenciador de pacotes!

```shell
npm i
```

- Perfeito! Agora estamos prontos para executar a nossa aplicação full stack através do docker compose.


```shell
docker compose up
```

> Vale ficar ligado na sua versão do docker compose se não for a versão 2.x você deve executar como "docker-compose"

- Feito! O build juntamente com a inicialização dos containers deve levar em torno de 1 minuto a 1min20s a depender da sua máquina.

Basta ir nno navegador e acessar:

> localhost:3000

para acessar a aplicação.

<br>

### E não esquece de me dar um feedback, hein? Isso é muito importante para o meu crescimento.

