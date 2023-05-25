function agendar(event) {
  event.preventDefault()
  console.log("Entrou no agendar")

  // Verifica se o nome esta vazio
  if (document.getElementById('nome').value === "") {
    alert("Por favor, preencha o seu nome!");
    return;
  }

  if (document.getElementById('fone').value === "") {
    alert("Por favor, preencha seu telefone!");
    return;
  }

  // Verifica se um horário não foi selecionado
  if (document.getElementById('horario').value === "") {
    alert("Por favor, escolha um horário!");
    return;
  }

  // Verifica se um dia não foi selecionado

  if (document.getElementById('date').value === "") {
    alert("Por favor, escolha um dia!");
    return;

  } else {
    // Obtenha a data selecionada pelo usuário
    const dataSelecionada = document.getElementById('date').value;

    // Exiba um alerta com a data selecionada
    alert(`Agendamento realizado para a data: ${dataSelecionada}`);


    // Armazene a data selecionada em uma variável
    const dataAgendada = dataSelecionada;

    // Faça algo com a data armazenada, como enviá-la para um servidor ou exibi-la em outra parte da página
    console.log(`A data agendada é ${dataAgendada}`);

  }

  const servicos = [
    'Cabelo',
    'Barba',
    'Cabelo e Barba',
  ]
  
  
  const servicoescolhido = document.getElementById('inputState').value;

  localStorage.setItem('nome', document.getElementById('nome').value);
  localStorage.setItem('fone', document.getElementById('fone').value);
  localStorage.setItem('horario', document.getElementById('horario').value);
  localStorage.setItem('date', document.getElementById('date').value);
  localStorage.setItem('inputState', servicos[servicoescolhido]);
  console.log(servicos);
  console.log(servicoescolhido);

}

function inicia() {

  document.querySelector('#formAgendamento').addEventListener('submit', agendar);

}

function carregarcliente() {

  console.log(localStorage.getItem('nome'))
  console.log(localStorage.getItem('motivoCliente'));
  document.getElementById('nome').innerHTML = localStorage.getItem('nome');
  document.getElementById('fone').textContent = localStorage.getItem('fone');
  document.getElementById('horario').textContent = localStorage.getItem('horario');
  document.getElementById('date').textContent = localStorage.getItem('date');
  document.getElementById('tipo').textContent = localStorage.getItem('inputState');
  document.getElementById('motivoCliente').textContent = localStorage.getItem('motivoCliente');
  
  if (localStorage.getItem('motivoCliente') != null) {
    alert('Seu agendamento foi desmarcado, confira o motivo no campo Motivo do Desmarcamento');
  }

  localStorage.removeItem('motivoCliente');
  
}

function carregarbarbeiro() {

  console.log(localStorage.getItem('nome'))
  console.log(localStorage.getItem('motivoBarbeiro'));
  document.getElementById('nome').innerHTML = localStorage.getItem('nome');
  document.getElementById('fone').textContent = localStorage.getItem('fone');
  document.getElementById('horario').textContent = localStorage.getItem('horario');
  document.getElementById('date').textContent = localStorage.getItem('date');
  document.getElementById('tipo').textContent = localStorage.getItem('inputState');
  document.getElementById('motivoBarbeiro').textContent = localStorage.getItem('motivoBarbeiro');
  
  if (localStorage.getItem('motivoBarbeiro') != null) {
    alert('Cliente optou pelo cancelamento do agendamento, confira a causa em: Motivo do desmarcamento!');
  }

  localStorage.removeItem('motivoBarbeiro');

}

function resetar() {

  localStorage.clear();
  document.getElementById('nome').innerHTML = ""
  document.getElementById('fone').textContent = ""
  document.getElementById('horario').textContent = ""
  document.getElementById('date').textContent = ""
  document.getElementById('tipo').textContent = ""
  document.getElementById('motivoBarbeiro').textContent = ""

  let motivoDesmarcamento = prompt('Digite o motivo do desmarque');
  localStorage.setItem('motivoCliente', motivoDesmarcamento);

 }

 document.getElementById('inputState').value

function cancelaragendamento() {

      localStorage.clear();
      document.getElementById('nome').innerHTML = ""
      document.getElementById('fone').textContent = ""
      document.getElementById('horario').textContent = ""
      document.getElementById('date').textContent = ""
      document.getElementById('tipo').textContent = ""
      document.getElementById('motivoCliente'.textContent = "")

      const motivoDesmarcamentoCliente = prompt('Digite o motivo do desmarque');
      localStorage.setItem('motivoBarbeiro', motivoDesmarcamentoCliente);
      confirm('Tem certeza?')

    }
  
window.addEventListener('load', inicia);