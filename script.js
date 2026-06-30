const PHONE = '5516994653554';
const MONEY = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const cards = [...document.querySelectorAll('.cake-card')];
const cartTotal = document.querySelector('#cart-total');
const cartPrice = document.querySelector('#cart-price');
const cartBar = document.querySelector('.cart-bar');
const cartBtn = document.querySelector('#cart-whatsapp');
const state = new Map();
function encode(text) { return encodeURIComponent(text); }
function messageFor(name, qty) { return `Olá, Bruna! Vim pelo site e quero reservar ${qty} fatia(s) de ${name} para o delivery de sábado 04/07. Pode confirmar disponibilidade e forma de pagamento?`; }
function hrefFor(name, qty) { return `https://wa.me/${PHONE}?text=${encode(messageFor(name, qty))}`; }
function syncSingleLink(card) {
  const name = card.dataset.name;
  const count = Number(card.querySelector('.count').textContent || 1);
  card.querySelector('.single-order').href = hrefFor(name, count);
}
function renderCart() {
  let qty = 0, total = 0;
  for (const item of state.values()) { qty += item.qty; total += item.qty * item.price; }
  cartTotal.textContent = qty === 1 ? '1 fatia selecionada' : `${qty} fatias selecionadas`;
  cartPrice.textContent = MONEY.format(total);
  cartBar.classList.toggle('show', qty > 0);
}
cards.forEach(card => {
  const countEl = card.querySelector('.count');
  const plus = card.querySelector('[data-action="plus"]');
  const minus = card.querySelector('[data-action="minus"]');
  const add = card.querySelector('.add-cart');
  plus.addEventListener('click', () => { countEl.textContent = Math.min(20, Number(countEl.textContent) + 1); syncSingleLink(card); });
  minus.addEventListener('click', () => { countEl.textContent = Math.max(1, Number(countEl.textContent) - 1); syncSingleLink(card); });
  add.addEventListener('click', () => {
    const name = card.dataset.name;
    const qty = Number(countEl.textContent || 1);
    state.set(name, { qty, price: Number(card.dataset.price) });
    add.textContent = 'Adicionado ✓';
    setTimeout(() => add.textContent = 'Atualizar seleção', 900);
    renderCart();
  });
  syncSingleLink(card);
});
cartBtn.addEventListener('click', () => {
  const lines = ['Olá, Bruna! Vim pelo site e quero reservar estas fatias para o delivery de sábado 04/07:', ''];
  let total = 0;
  for (const [name, item] of state.entries()) {
    lines.push(`• ${item.qty}x ${name} — ${MONEY.format(item.qty * item.price)}`);
    total += item.qty * item.price;
  }
  lines.push('', `Total estimado: ${MONEY.format(total)}`, '', 'Pode confirmar disponibilidade, entrega/retirada e forma de pagamento?');
  window.open(`https://wa.me/${PHONE}?text=${encode(lines.join('\n'))}`, '_blank', 'noopener');
});
window.addEventListener('load', () => setTimeout(() => document.querySelector('#loader').classList.add('hidden'), 650));
