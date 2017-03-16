QUnit.test( "Suma consecutivos", function( assert ) {
  assert.equal(sumaNumerosConsecutivos(5), 15, "Arreglo Creado" );
});

QUnit.test( "Suma consecutivos", function( assert ) {
  assert.deepEqual(pares(10), [2,4,6,8,10], "Arreglo Creado" );
});

QUnit.test( "Residuos", function( assert ) {
  assert.equal(residuo(3,2), 1, "Residuo correcto" );
  assert.equal(residuo(21,3), 0, "Residuo correcto" );
});
