# 🌥 Weather Extension 🌥
### Extensão que mostra o tempo real no seu navegador!

Já pensou em trabalhar, estudar ou apenas navegar pela internet sem se preocupar com o tempo lá fora? Ou ainda descobrir a temperatura neste exato momento que te ajudará a planejar a roupa que você vai levar para o compromisso sem ficar naquele "põe casaco e tira casaco"?

Desenvolvi uma extenção para o Chrome que mostra a temperatura de São Paulo de forma simples, prática e cheia de estilo. Não será preciso abrir aba ou pesquisar, tudo vai estar na sua frente com um clique.

### 🌧 Organização:
- [x] Descisão do tema.
- [x] Estudo sobre criação de extensão para navegadores.
- [x] Ativar o modo do desenvolvedor.
- [x] Procurar a melhor API.
- [x] Organização visual.
- [x] Arrumar o JavaScript.
- [x] Teste 1 - 2.

### 🌦 Estrutura do Projeto:
~~~
manifest.json
content.js
index.html
index.css
~~~

### 🌥 Configuração do Projeto:
O arquivo mais importante do nosso projeto é o manifest.json. Ele é o ponto de partida de qualquer extensão. Nele descrevemos todas as propriedades do nosso projeto desde o seu nome, autor, versão e até mesmo quais permissões ele irá solicitar e quais arquivos ele irá importar.

~~~json
{
    "manifest_version": 2,
    "name": "Weather Extension",
    "version": "0.1",
    "author": "EricaSantos-FullStack https://github.com/EricaSantos-FullStack",
    "description": "Extensão do Chrome que mostra o clima de São Paulo de forma simples, prática e cheia de estilo.",

     "browser_action": {
      "default_icon": "myicon.png",
      "default_popup": "index.html"
      }

}
~~~

➫ **manifest_version:** Essa é a versão do manifesto. Esse número é dado pela plataforma que dita as regras que serão utilizadas na interpretação do arquivo. Até o momento, está no 2.

➫ **name, version, author, description:** Estes campos representam exatamente o que os seus nomes indicam. Aqui ditamos qual é a versão da extensão, o nome dela, sua descrição e o autor.

➫ **browser_action:** Nesta propriedade dizemos ao Chrome qual é o comportamento padrão da nossa extensão. Sendo o *default_popup* para sempre que o usuário clicar no ícone da extensão, uma janelinha abrirá e o *deafult_icon* para incluir um icone a sua aplicação.

### 🌤 Testando a Extensão:
Para testar a extensão dentro do Chrome vá em chrome://extensions/ ou por meio do caminho: Menu > Mais Ferramentas > Extensões.

➫ **Habilite o Modo do desenvolvedor** depois clique em ...  
➫ **Carregar sem Compactação** e selecione o caminho do diretório onde estão os arquivos do seu projeto.

//////imagem ////

➫ **Ative a extensão e fixe na sua barra de navegação**

### ☀ Resultado:

//imagem

#### ❥ Agradecimentos Especiais:

Tem horas que o bloqueio criativo aparece e inciste em ficar, porém é nesses momentos que encontramos sempre a pessoa certa para dar o emburranzinho que precisamos para tirar o projeto do papel e torná-lo realidade. 
Gostaria de agradecer ao Lucas Galdino pelo apoio e paciência.
GitHub: https://github.com/LucasGaldinno
