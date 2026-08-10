// ===== Menu Hamburger =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== Scroll Suave =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Formulário =====
const formulario = document.getElementById('formulario');

if (formulario) {
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const presenca = document.getElementById('presenca').value;
        const mensagem = document.getElementById('mensagem').value;

        if (!nome || !email || !presenca) {
            alert('Por favor, preencha os campos obrigatórios!');
            return;
        }

        const mensagemWhatsApp = `
Olá! Sou ${nome}

Nome: ${nome}
Email: ${email}
Telefone: ${telefone || 'Não informado'}
Presença: ${presenca}
${mensagem ? `Mensagem: ${mensagem}` : ''}
        `.trim();

        const numeroWhatsApp = '5585999999999';
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemWhatsApp)}`;

        window.open(urlWhatsApp, '_blank');

        alert('Obrigado! Sua mensagem foi enviada via WhatsApp. 🎉');

        formulario.reset();
    });
}

// ===== Galeria Interativa =====
const galeriaItems = document.querySelectorAll('.galeria-item');

galeriaItems.forEach(item => {
    item.addEventListener('click', function () {
        const img = this.querySelector('img');
        console.log('Galeria clicada:', img.alt);
    });
});

// ===== Botão Confirmar Presença =====
const btnConfirmar = document.querySelector('.btn-principal');
if (btnConfirmar && btnConfirmar.textContent === 'Confirme sua Presença') {
    btnConfirmar.addEventListener('click', () => {
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== Botões de Presentear =====
const botosPresentear = document.querySelectorAll('.presente-card .btn-secundario');

botosPresentear.forEach(botao => {
    botao.addEventListener('click', function () {
        const card = this.closest('.presente-card');
        const nomeProduto = card.querySelector('h3').textContent;
        const preco = card.querySelector('.preco').textContent;

        const numeroWhatsApp = '5585999999999';
        const mensagem = `Olá! Gostaria de presentear com: ${nomeProduto} (${preco})`;
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

        window.open(urlWhatsApp, '_blank');
    });
});

// ===== Animação de Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.galeria-item, .presente-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== Validação de E-mail =====
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

if (formulario) {
    formulario.addEventListener('submit', function (e) {
        const email = document.getElementById('email').value;
        if (!validarEmail(email)) {
            e.preventDefault();
            alert('Por favor, insira um e-mail válido!');
        }
    });
}

// ===== Feedback Visual nos Botões =====
document.querySelectorAll('.btn-principal, .btn-secundario').forEach(botao => {
    botao.addEventListener('mousedown', function () {
        this.style.transform = 'scale(0.98)';
    });

    botao.addEventListener('mouseup', function () {
        this.style.transform = '';
    });

    botao.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});

console.log('Script carregado com sucesso! 🎉');
