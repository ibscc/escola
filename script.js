//Armazenar os dados
let dados =;

//Gerar ID aleatório com 5 dígitos
fuction gerarId() {
     return Math.floor(10000 + Math.random()*90000);
    }

    //Adicionar dados à tabela 
document.getElementByld('form').addEventListener('submit',function(event){
    event.preventDefault();

    const descricao = document.getElementByld('descricao').value;
    cost valor = parseFloat(document.getElementByld('valor').value.replace(',','.')); //Aceita centavos
    const tipo = document.getElementByld('tipo').value;

    //Captura a data do input e formata corretamente
    const dataInput = new Date(document.getElementByld('data').value);
    const data = `${String(dataInput.getDate()).padStart(2,'0')}/${String(dataInput.getMonth()+1).padStart(2,'0')}/${dataInput.getFullYear()}`;//Formato DD/MM/AAAA

  //Adiciona os dados ao array
  dados.push({ id: gerarld(), descricao, valor, tipo, data}); 

