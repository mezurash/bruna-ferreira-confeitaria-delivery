# Bruna Ferreira Confeitaria — Design System v2

## Direção
Boutique pâtisserie + marketplace limpo. Menos flyer, mais cardápio premium consultável. A hero deixa de depender de imagem e vira uma abertura centralizada, rápida e comercial.

## Tokens

### Tipografia
- Display: `Fraunces` — títulos editoriais, confeitaria artesanal, sensação premium.
- UI/body: `DM Sans` — leitura rápida, botões, cards e checkout por WhatsApp.

### Cores
- Fundo quente: `#fff7ef`
- Papel/card: `#ffffff`
- Texto principal: `#2b1a14`
- Texto secundário: `#7a655d`
- Cocoa/CTA principal: `#3f2219`
- Caramelo/acento: `#b66a3d`
- Creme: `#f8e2c8`
- WhatsApp/ação final: `#1f8f55`
- Linha: `#eadbd0`

### Componentes
- Hero centralizada, sem imagem, com copy curta e CTA duplo.
- Pills de confiança: preço, localização e pedido direto.
- Cards de produto com imagem quadrada, badge superior, título editorial e ações embaixo.
- Carrinho flutuante escuro, só aparece quando há seleção.
- Seção “como funciona” em 3 passos.

### Regras de uso
1. Uma ação primária por tela: `Ver cardápio` na hero, `Pedir` nos cards, `Pedir seleção` no carrinho.
2. Fotos dos bolos ficam nos cards, nunca na hero.
3. Nada de emojis na interface principal; visual deve vir de tipografia, espaçamento e fotos.
4. Radius alto e sombra suave para sensação de vitrine premium.
5. Mobile first: CTA com alvo mínimo de 44px.


## Refinamentos finais
- Favicon SVG com ícone de bolo em `assets/favicon.svg` para substituir o ícone genérico da aba.
- H1 reduzido em 4px no limite mínimo/máximo e com peso mais leve (`760`) para ficar mais elegante.
- Motion system: entrada suave por blocos, shimmer discreto em CTAs, hover tátil nos cards e badges com respiração leve.
- Cursor customizado: fatia de bolo no estado normal e cupcake em elementos clicáveis, com fallback nativo.
- Todas as animações respeitam `prefers-reduced-motion`.
