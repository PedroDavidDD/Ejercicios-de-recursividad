Feature: Cajero Automático

  Scenario: Escenario 1 - Límite diario de retiro
    Given el usuario ingresa su PIN "1234"
    And selecciona la cuenta "123-456"
    And el límite diario de retiro es de 1000
    And el usuario ya ha retirado 1000 hoy
    When el usuario intenta retirar 1500
    Then el sistema muestra el mensaje "Límite diario de retiro alcanzado, vuelve otro día."

  Scenario: Escenario 2 - Cancelar transacción
    Given el usuario ingresa su PIN "1234"
    And selecciona la cuenta "123-456"
    When el usuario intenta retirar 500
    And el usuario cancela la transacción
    Then el sistema muestra el mensaje "Transacción cancelada."
    And el sistema devuelve la tarjeta

  Scenario: Escenario 3 - Consulta de saldo
    Given el usuario ingresa su PIN "1234"
    And selecciona la cuenta "123-456"
    When el usuario consulta su saldo
    Then el sistema muestra el saldo disponible en la cuenta

  Scenario: Escenario 4 - Impresión de comprobante
    Given el usuario ingresa su PIN "1234"
    And selecciona la cuenta "123-456"
    When el usuario retira 200
    Then el sistema muestra el mensaje "Retiro exitoso."
    And el sistema imprime un comprobante con los detalles de la transacción

  Scenario: Escenario 5 - Cambio de PIN fallido
    Given el usuario ingresa su PIN antiguo "1234"
    And selecciona la cuenta "123-456"
    When el usuario intenta cambiar su PIN a "5678"
    And confirma el nuevo PIN con "5679"
    Then el sistema muestra el mensaje de error "Los PINs no coinciden."