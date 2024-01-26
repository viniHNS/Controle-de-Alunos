# Gerador de Ficha Escolar (Node.js)

Este repositório contém um Gerador de Ficha Escolar desenvolvido em Node.js, uma ferramenta que permite criar fichas escolares para alunos. Essa aplicação é útil para instituições educacionais que desejam automatizar o processo de criação de fichas escolares.
###### Observação: Este projeto não está otimizado para dispositivos móveis.

## Funcionalidades

- Gere fichas escolares com as informações do aluno e outras informações relevantes.
- Suporte para exportar as fichas escolares em PDF.
- Armazene e gerencie informações dos alunos de forma organizada.

## Pré-requisitos

Antes de utilizar o Gerador de Ficha Escolar, certifique-se de que você possui as seguintes dependências instaladas:

- [Node.js](https://nodejs.org/) - A aplicação é escrita em Node.js, portanto, você precisará da versão adequada para a sua plataforma.
- [npm](https://www.npmjs.com/) - O npm é o gerenciador de pacotes do Node.js e será usado para instalar as dependências.
- [MongoDB](https://www.mongodb.com/) - O MongoDB é um banco de dados NoSQL que será usado para armazenar as informações dos alunos.
 ###### Esta aplicação requer uma conexão com a internet para seu correto funcionamento, pois a mesma utiliza bibliotecas via CDN

## Como Usar

1. Clone este repositório em seu ambiente local:

```bash
git clone https://github.com/viniHNS/gerador-ficha-escola.git
```
 ###### Ou baixe o repositório em formato ZIP e extraia os arquivos.


2. Instale as dependências do projeto:

```bash
npm install
```
3. Configure as variáveis de ambiente, no arquivo `.env`, com as informações do seu banco de dados:

```bash
PORT = "Porta da aplicação"
CONNECTION_STRING = "Sua string de conexão"
```
4. Inicie a aplicação: 

```bash
npm start
```
Ou, se preferir utilizar o script .bat (Windows):

```bash
start.bat
```

###### Para iniciar este script de forma automática, adicione-o ao seu diretório de inicialização do Windows. Para isso, pressione a tecla Windows + R, digite `shell:startup`. Em seguida, copie o arquivo `start.bat` para este diretório.

5. Acesse a aplicação em seu navegador:

```bash
http://localhost:{Porta Configurada}/
```

## Contribuições

Se você deseja contribuir para o desenvolvimento deste projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Clone o seu fork localmente.
3. Implemente suas melhorias ou correções.
4. Envie um pull request para este repositório.

Todas as contribuições são bem-vindas! Certifique-se de descrever claramente suas alterações no pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## To do

- [ ] Melhorar rota de consulta



