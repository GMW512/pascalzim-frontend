async function executarCodigo() {
    const codigo = document.getElementById('codigo').value;
  
    const resposta = await fetch('https://pascalzim-backend.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ codigo })
    });
  
    const resultado = await resposta.text();
    document.getElementById('saida').textContent = resultado;
  }
  