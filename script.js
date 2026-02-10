const form = document.getElementById('formEndereco');
const lista = document.getElementById('listaEnderecos');

let enderecos = JSON.parse(localStorage.getItem('enderecos')) || [];

function atualizarLista() {
    lista.innerHTML = '';
    enderecos.forEach((e) => {
        const li = document.createElement('li');
        li.textContent = `${e.logradouro}, ${e.numero} - ${e.bairro}, ${e.cidade}/${e.estado} - CEP: ${e.cep}`;
        lista.appendChild(li);
    });
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const endereco = {
        logradouro: logradouro.value,
        numero: numero.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        cep: cep.value
    };

    if (endereco.cep.length !== 8 || isNaN(endereco.cep)) {
        alert('CEP inválido');
        return;
    }

    enderecos.push(endereco);
    localStorage.setItem('enderecos', JSON.stringify(enderecos));
    form.reset();
    atualizarLista();
});

atualizarLista();
