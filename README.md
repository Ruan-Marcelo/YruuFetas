# Yruu Festa

Site institucional da **Yruu Festa**, buffet profissional para eventos em Ribeirao Preto e regiao.

O projeto foi desenvolvido como uma landing page estatica, com foco em apresentacao dos servicos, prova social, contato rapido pelo WhatsApp, SEO local e boa experiencia em dispositivos moveis.

## Objetivo

O site tem como objetivo converter visitantes em pedidos de orcamento, apresentando de forma direta:

- servicos de buffet e eventos;
- galeria de fotos e videos;
- avaliacoes e depoimentos;
- assistente de orcamento via WhatsApp;
- informacoes de contato;
- configuracoes tecnicas para indexacao no Google.

## Recursos

- Layout responsivo para celular, tablet e desktop.
- Galeria de eventos com lightbox.
- Carrossel de imagens e videos usando Swiper.
- Cards de servicos carregados dinamicamente por `servicos.json`.
- Filtros de servicos por categoria.
- Modal de servico com chamada para orcamento.
- Chatbot de orcamento que monta uma mensagem estruturada para o WhatsApp.
- FAQ curto com dados estruturados `FAQPage`.
- SEO tecnico com title, description, canonical, Open Graph, Twitter Card e Schema.org.
- `robots.txt` e `sitemap.xml` configurados para o dominio oficial.
- Arquivo `CNAME` para dominio customizado no GitHub Pages.
- Carregamento sob demanda dos videos para reduzir peso inicial da pagina.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- JSON
- Bootstrap Icons
- Swiper.js
- GitHub Pages

## Estrutura

```txt
.
|-- index.html
|-- servicos.json
|-- robots.txt
|-- sitemap.xml
|-- CNAME
`-- assets
    |-- CSS
    |   `-- style.css
    |-- JS
    |   `-- scripts.js
    |-- imgs
    `-- videos
```

## Como Rodar Localmente

Por ser um site estatico, basta abrir o arquivo `index.html` no navegador.

Para testar com um servidor local simples:

```bash
python -m http.server 8000
```

Depois acesse:

```txt
http://localhost:8000
```

## Configuracao do Dominio

Dominio oficial:

```txt
https://www.yruufesta.shop/
```

O arquivo `CNAME` deve conter:

```txt
www.yruufesta.shop
```

No provedor DNS, o dominio raiz deve apontar para os IPs do GitHub Pages e o subdominio `www` deve apontar para:

```txt
Ruan-Marcelo.github.io
```

Depois da propagacao, ative `Enforce HTTPS` nas configuracoes do GitHub Pages.

## SEO

O projeto inclui:

- meta description;
- canonical URL;
- Open Graph para compartilhamento;
- Twitter Card;
- schema `LocalBusiness`;
- schema `FAQPage`;
- sitemap;
- robots;
- textos alternativos em imagens;
- telefone e Instagram clicaveis.

## Manutencao

Para adicionar ou alterar servicos, edite o arquivo:

```txt
servicos.json
```

Cada servico possui titulo, descricao, categoria, status ativo e conteudo do modal.

Para alterar telefone, WhatsApp ou Instagram, revise:

- `index.html`
- `assets/JS/scripts.js`
- `servicos.json`

## Deploy

O deploy pode ser feito pelo GitHub Pages a partir da branch configurada no repositorio.

Fluxo sugerido:

```bash
git add .
git commit -m "Descricao da alteracao"
git push origin main
```

## Licenca

Projeto desenvolvido para uso da Yruu Festa. Todos os direitos de marca, imagens e conteudo pertencem aos respectivos proprietarios.
