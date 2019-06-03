Feature: Pruebas del objeto Select
  Con el fin de comprobar el comportamiento del objeto Select
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto Frame
    Given Que Select debe heredar de tipo Frame
    When LLame al constructor de la clase Select
    Then La instancia creada debe ser de tipo Select y Frame

  Scenario: Selecionar una opción
    Given Que quiero seleccionar una opcion de un objeto Select
    When LLame al método getValue del objeto Select
    Then El objeto Select debe responder el valor actual

  Scenario: Establecer el placeholder
    Given Que quiero establecer un placeholder de un objeto Select
    When LLame al método setPlaceholder del objeto Select
    Then El objeto Select debe responder placeholder setted

  Scenario: Agregar opciones a objeto select
    Given Que quiero establecer opciones a un objeto Select
    When LLame al método addOption del objeto Select
    Then El objeto Select debe responder option added
