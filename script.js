const form = document.getElementById("pedidoForm");

const pizza = document.getElementById("pizza");
const quantidade = document.getElementById("quantidade");
const total = document.getElementById("total");
const mensagem = document.getElementById("mensagem");

// Preços das pizzas
const precos = {
    "Calabresa": 35,
    "Mussarela": 32,
    "Frango com Catupiry": 40,
    "Portuguesa": 38,
    "Quatro Queijos": 42
};

// Atualiza o valor total
function calcularTotal() {

    const sabor = pizza.value;
    const qtd = Number(quantidade.value);

    if (!sabor || !qtd) {
        total.textContent = "R$ 0,00";
        return;
    }

    const valor = precos[sabor] * qtd;

    total.textContent = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Atualiza o total quando o usuário muda o sabor
pizza.addEventListener("change", calcularTotal);

// Atualiza o total quando muda a quantidade
quantidade.addEventListener("input", calcularTotal);

// Envio do formulário
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;
    const sabor = pizza.value;
    const tamanho = document.getElementById("tamanho").value;
    const qtd = quantidade.value;
    const observacao = document.getElementById("observacao").value;

    const pagamentoSelecionado =
        document.querySelector('input[name="pagamento"]:checked');

    if (!pagamentoSelecionado) {
        alert("Selecione uma forma de pagamento.");
        return;
    }

    const pagamento = pagamentoSelecionado.value;

    const valorTotal = precos[sabor] * Number(qtd);

    mensagem.innerHTML = `
        <div class="sucesso">
            Pedido realizado com sucesso! 🍕<br><br>

            <strong>Cliente:</strong> ${nome}<br>
            <strong>WhatsApp:</strong> ${whatsapp}<br>
            <strong>E-mail:</strong> ${email || "Não informado"}<br>
            <strong>Endereço:</strong> ${endereco}<br><br>

            <strong>Pizza:</strong> ${sabor}<br>
            <strong>Tamanho:</strong> ${tamanho}<br>
            <strong>Quantidade:</strong> ${qtd}<br>
            <strong>Pagamento:</strong> ${pagamento}<br>
            <strong>Total:</strong> ${valorTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}
            <br><br>

            ${observacao ? `<strong>Observação:</strong> ${observacao}` : ""}
        </div>
    `;

    // Rola até a mensagem
    mensagem.scrollIntoView({
        behavior: "smooth"
    });
});
 