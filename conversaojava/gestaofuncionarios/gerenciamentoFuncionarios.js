// RN1 
function capturarDados () {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const salario = parseFloat(document.getElementById("salario").value);
    const departamento = document.getElementById("departamento").value;
    const dataContratacao = document.getElementById("data-contratacao").value;
  
    return { nome, idade, salario, departamento, dataContratacao };
  }
  
  // RN2
  function validarCampos(oNome,aIdade,oSalario,oDepartamento,aDataContratacao){
    if(oNome === "" || isNaN(aIdade) || isNaN(oSalario) || oDepartamento === "" || aDataContratacao === ""){
      alert("Por favor, preencha todos os campos.");
      return false;
    } else if (aIdade<=0 && oSalario<=0){
      alert("Por favor, preencha os campos corretamente. \nIdade e salário devem ser maiores que zero.");
      return false;
  } else {
      return true;
  }}
  
  // RN3
  // O botao do formulario chama essa funcao
  function adicionarFuncionario() {
    // "destructuring"
    const { nome, idade, salario, departamento, dataContratacao } = capturarDados();
  
    if (validarCampos(nome, idade, salario, departamento, dataContratacao)) {
      inserirLinha(nome, idade, salario, departamento, dataContratacao);
      limparCampos();
    }
}
  
  // RN4
  function inserirLinha(nome, idade, salario, departamento, dataContratacao) {
    const table = document.getElementById("tabela-funcionarios");
    const row = table.insertRow(-1);
    const cellNome = row.insertCell(0);
    cellNome.innerHTML = nome;
    const cellIdade = row.insertCell(1);
    cellIdade.innerHTML = idade;
    const cellSalario = row.insertCell(2);
    cellSalario.innerHTML = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const cellDepartamento = row.insertCell(3);
    cellDepartamento.innerHTML = departamento;
    const cellDataContratacao = row.insertCell(4);
    cellDataContratacao.innerHTML = dataContratacao;
  }
  
  // RN5
  function limparCampos() {
    const form = document.getElementById("funcionario-form");
    form.reset();
  }
S  