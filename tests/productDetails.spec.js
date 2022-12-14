const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.values(productDetails()), 'object')
    // Teste que os dois objetos são diferentes entre si.
    const objeto01 = Object.values(productDetails('pao', 'queijo')[0]);
    const objeto02 = Object.values(productDetails('pao', 'queijo')[1]);
    assert.strictEqual(objeto01 === objeto02, false);
    // Teste que os dois productIds terminam com 123.
    const object01 = Object.values(productDetails('pao', 'queijo')[0].details);
    const object02 = Object.values(productDetails('pao', 'queijo')[1].details);
    const toStr01 = object01.toString();
    const toStr02 = object02.toString();
    assert.strictEqual(toStr01.slice(toStr01.length - 3) && toStr02.slice(toStr02.length -3), '123');
  });
});
