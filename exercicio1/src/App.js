import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const lanche1 = {nome : "X-Burguer", preco : 20.0};
  const lanche2 = {nome : "X-Salada", preco : 30.0};
  const lanche3 = {nome : "X-Tudo", preco : 40.0};

  const vetor = [lanche1, lanche2, lanche3];

  const buscar = {nome : "retirar", preco : 0  };
  const entregar = {nome : "entregar", preco : 7.00 };

  const vetor2 = [buscar, entregar];

  const[lancheSelecionado, setLancheSelecionado] = useState(-1);
  const[opcaoSelecionado, setOpcaoSelecionado] = useState(-1);
  const[quantidade, setQuantidade] = useState(0);
  const[resultado, setResultado] = useState(null);

  function calcular()
  {
    const lanche = vetor[lanche1];

    setResultado(
      <div className='resultado'>
        Nome : {lanche.nome} <br />
        Preço: {lanche.preco.toFixed(2)} <br />
      </div>
    );
  }


  return (
    <div>
      <h1>Hambuergueria da FATEC</h1>

      <table>
        <tr>
          <th>Nome do Lanche</th>
          <th>Preço</th>
        </tr>

        {vetor.map(
          (lanche) => (
            <tr>
              <td>{lanche.nome}</td>
              <td>{lanche.preco.toFixed(2)}</td>
            </tr>
          )
        )}

      </table>
      
      <table>
<tr>
<th>entregar (sim/não) </th>
<th>taxa de entrega</th>
</tr>

{vetor2.map(
(taxa) => (
<tr>
<td>{taxa.nome}</td>
<td>{taxa.preco.toFixed(2)}</td>
</tr>
)
)}
      </table>

      <form>
        <p>
          Escolha o lanche <br />
          <select value={lancheSelecionado} onChange={ (e) => setLancheSelecionado(e.target.value)}>
            <option value="-1">Selecione o lanche</option>
            {vetor.map(
              (lanche, indice) => (<option value={indice}>{lanche.nome}</option>)
            )}
          </select>
        </p>

        <p>
          Escolha a opção de retirada <br />
          <select value={opcaoSelecionado} onChange={ (e) => setOpcaoSelecionado(e.target.value)}>
            <option value="-1">Selecione a opção</option>
            {vetor2.map(
              (taxa, indice) => (<option value={indice}>{taxa.nome}</option>)
            )}
          </select>
        </p>

        <p>
          Digite a quantidade <br />
          <input type="text" value={quantidade} onChange={ (e) => setQuantidade(e.target.value)} />
        </p>

        <p>
          <input type="button" value="Processar Pedido" onClick={calcular} />
        </p>
      </form>

      {resultado}

    </div>
  );
}

export default App;
