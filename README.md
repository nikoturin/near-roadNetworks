Integrante Equipo 6: Ramsés Hernández.

# near-roadNetworks
POC para creación de SMART-CONTRACT's NEAR  para cliente e interoperabilidad

Se logró realizar la carga de datos de inter-operabilidad, además de saldos simulados por incremento, es decir, se trabajará aún en el POC para la carga de SALDOS NEARS y la descarga de datos simulando distintas redes carreteras interactuando con wallet NEAR BC.

Cuenta Master NEAR: gasram.testnet

1.- Se creo proyecto a través de NPX:

npx create-near-app [options] new-near-bc

2.- Se realiza "near login"
3.- Se crea la subcuenta para signar contracto new-near-bc.gasram.testnet
4.- Se ejecuta yarn start para ejecutar y compilar.
5.- Se obtiene wasm en el siguiente path "out/main.wasm"
6.- Se ejecutaron las siguientes instrucciones de comando para deploy:

near deploy --accountId new-near-bc.gasram.testnet --wasmFile out/main.wasm

7.- Testing realizado en el directorio contract/assembly código de prueba: __test__/main.spec.ts

  - yarn asp

8.- Se crearon las siguiente funciones:

Funciones HeartBeat para validar comunicación.

hearBeat: near call new-near-bc.gasram.testnet heartBeat '{"value":10}' --account-id gasram.testnet
getHeartBeat: near view new-near-bc.gasram.testnet getHeartBeat '{}'

Funciones para agregar mount, aunque en este caso solo es un número incremantal, se buscará obtener montos reales de las cuentas de clientes e inter-operabilidad.

setAmount: near call new-near-bc.gasram.testnet setAmount '{"value":2000}' --account-id gasram.testnet
getAmount: near view new-near-bc.gasram.testnet getAmount '{}'

Funciones una vez validado el monto, se agregan las transacciones por cruce y/o caseta a la Blockchain para emitir los montos enter operadoras.

setTransPass: near call new-near-bc.gasram.testnet setTransPass '{"dataRaw":"{Name:Ramses,Amount:2000,Operator:1}"}' --account-id gasram.testnet
getTransPass: near view new-near-bc.gasram.testnet getTransPass '{"accountId":"gasram.testnet"}'


Nota: está claro que aún falta realizar el POC a través de saldos derivado de NEAR, además de carga de registros reales a cada cruce, donde la blockchain podrá garantizar la integridad de los datos a las OPERADORAS e adminstradoras.
