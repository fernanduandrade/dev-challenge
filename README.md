# App de Classificação

## Para o backend é necessário ter instalado o python na sua máquina e instalar uma virtualenv para controlar os pacotes da aplicação 📦 

<li>No Linux

   ```sh
   python3 -m venv venv
   ```

</li>

<li>No Windows

   ```sh
   py -3 -m venv venv
   ```

</li>

<li>No Mac
   
   ```sh
   virtualenv venv
   ```

</li>

### Após ativar a virtualenv entre no diretório backend para instalar os pacotes

   ```sh
   (venv)cd backend && pip install -r requirements.txt
   ```

### Migre o banco de dados

   ```sh
   (venv) python manage.py migrate
   ```

### Rode o servidor

   ```sh
   (venv) python manage.py runserver
   ```
## Para o frontend entre no diretório e instale as dependêcias 

```sh
   npm i
```
### Com as dependências instaladas inicie o projeto em React

```sh
   npm run start
```