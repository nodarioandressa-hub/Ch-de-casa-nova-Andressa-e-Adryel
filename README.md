# 🏡 Chá de Casa Nova - Andressa e Adryel

Um site elegante e responsivo para celebrar o chá de casa nova de Andressa e Adryel!

## 📋 Características

✨ **Design Moderno**: Layout limpo e atraente com cores aconchegantes
📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos (desktop, tablet, mobile)
🎨 **Customizável**: Cores, textos e imagens podem ser facilmente personalizadas
⚡ **Interativo**: Menu hamburger, scroll suave, animações fluidas e feedback visual
💬 **Integração WhatsApp**: Formulário de contato e presentes conectados ao WhatsApp
🖼️ **Galeria**: Seção de fotos com efeitos hover

## 📁 Estrutura do Projeto

```
cha-casa-nova/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Documentação
└── assets/
    ├── imagens/        # Fotos do evento e decoração
    ├── icones/         # Ícones personalizados
    └── fontes/         # Fontes customizadas
```

## 🚀 Como Usar

### 1. **Clonar o Repositório**
```bash
git clone https://github.com/nodarioandressa-hub/Ch-de-casa-nova-Andressa-e-Adryel.git
cd cha-casa-nova
```

### 2. **Abrir no Navegador**
Simplesmente abra o arquivo `index.html` no seu navegador favorito!

### 3. **Customizar o Site**

#### ✏️ Informações Básicas
Edite o arquivo `index.html` e procure por:
- `[Data do evento]` - Adicione a data (ex: 15 de Junho de 2024)
- `[Horário]` - Adicione o horário (ex: 14h às 18h)
- `[Endereço]` - Adicione o local do evento
- `[Sua cidade, Estado]` - Adicione sua localização
- `contato@example.com` - Adicione seu email
- `(XX) XXXXX-XXXX` - Adicione seu telefone

#### 📱 Número de WhatsApp
No arquivo `script.js`, procure por `5585999999999` (aparece 2 vezes) e substitua pelo seu número:
- **Formato**: código do país + DDD + número (sem espaços ou caracteres especiais)
- **Exemplo**: `5585987654321`

#### 🎨 Cores Personalizadas
Em `style.css`, modifique as variáveis no início do arquivo:
```css
:root {
    --cor-primaria: #8B4513;      /* Marrom principal (menu, títulos) */
    --cor-secundaria: #D2691E;    /* Marrom secundário (hover) */
    --cor-acento: #F4A460;        /* Cor de destaque (botões) */
    --cor-fundo: #FFF8F0;         /* Cor de fundo das seções */
}
```

#### 🖼️ Adicionar Imagens
1. Crie a pasta `assets/imagens/` no seu projeto
2. Adicione suas fotos nessa pasta
3. Substitua os nomes dos arquivos em `index.html`:
```html
<img src="assets/imagens/sua-foto.jpg" alt="Descrição da foto">
```

## 🎨 Seções do Site

### 1. **Navegação** 📍
- Menu sticky (fica fixo no topo ao rolar)
- Links para todas as seções
- Menu hamburger responsivo para dispositivos móveis

### 2. **Hero (Início)** 🎉
- Apresentação visual atraente com gradiente
- Título principal
- Botão para confirmação de presença
- Animações ao carregar

### 3. **Sobre** 📋
- Informações do evento
- Data, horário e local
- Descrição do chá de casa nova
- Imagem decorativa

### 4. **Galeria** 🖼️
- Grid responsivo de fotos
- Efeito de zoom ao passar o mouse
- Sombras dinâmicas
- 6 espaços para imagens

### 5. **Lista de Presentes** 🎁
- 6 cards com sugestões de presentes
- Ícones representativos
- Descrição e preço de cada item
- Botões integrados com WhatsApp
- Customizáveis

### 6. **Contato** 💬
- Formulário de confirmação de presença
- Campos: Nome, Email, Telefone, Presença, Mensagem
- Integração com WhatsApp
- Informações de contato
- Links para redes sociais

### 7. **Rodapé** 📝
- Copyright
- Informações de direitos autorais

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos avançados, Grid, Flexbox, media queries
- **JavaScript**: Interatividade, validações e integrações
- **Font Awesome 6.4.0**: Ícones vetoriais gratuitos
- **WhatsApp Web API**: Integração de mensagens

## 📱 Responsividade

O site é totalmente responsivo com breakpoints otimizados para:
- **Desktop**: 1200px+ (layout completo com 2 colunas)
- **Tablet**: 768px - 1199px (layout adaptado)
- **Mobile**: até 767px (layout coluna única, menu hamburger)

## ✨ Funcionalidades Principais

✅ **Scroll Suave**: Navegação suave entre seções
✅ **Menu Responsivo**: Hamburger menu em dispositivos móveis
✅ **Validação de Formulário**: Valida campos obrigatórios e email
✅ **Integração WhatsApp**: Envia mensagens direto para WhatsApp
✅ **Animações**: Fade in, zoom, slide up nas imagens
✅ **Hover Effects**: Efeitos visuais ao passar o mouse
✅ **Temas Personalizáveis**: Cores fáceis de modificar

## 📝 Notas Importantes

1. **Número de WhatsApp**: Não esqueça de atualizar em ambos os lugares (formulário e presentes)
2. **Imagens**: Use imagens de alta qualidade (mínimo 1200px de largura)
3. **Compressão**: Comprima as imagens para melhor performance
4. **Domínio**: Para usar em produção, hospede em serviço como GitHub Pages, Netlify ou Vercel
5. **SEO**: Para melhorar indexação no Google, adicione meta tags no `<head>`

## 🎯 Melhorias Futuras

- [ ] Contador regressivo até o evento
- [ ] Mapa de localização integrado
- [ ] Sistema de RSVP com banco de dados
- [ ] Galeria com lightbox/modal
- [ ] Seção de fotos do evento (pós-evento)
- [ ] QR code com informações
- [ ] Newsletter/mailing list
- [ ] Opção de pagamento (presentes)

## 🚀 Deploy (Colocar Online)

### **Opção 1: GitHub Pages** (Gratuito)
1. Fazer push do código para GitHub
2. Ir em Settings > Pages
3. Selecionar branch `main`
4. Pronto! Site estará em: `https://seu-usuario.github.io/Ch-de-casa-nova-Andressa-e-Adryel`

### **Opção 2: Netlify** (Gratuito)
1. Conectar repositório GitHub
2. Deploy automático
3. Domínio customizado opcional

### **Opção 3: Vercel** (Gratuito)
1. Conectar repositório GitHub
2. Deploy um clique
3. Performance otimizada

## 👥 Suporte e Contribuições

Encontrou um bug? Tem uma sugestão?
- Abra uma **Issue** no repositório
- Faça um **Pull Request** com melhorias

## 📧 Contato

Para dúvidas sobre o site:
- Entre em contato com Andressa ou Adryel

---

**Feito com ❤️ para Andressa e Adryel**

*Última atualização: 2024*
