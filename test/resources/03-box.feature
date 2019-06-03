Feature: Pruebas del objeto Box
  Con el fin de comprobar el comportamiento del objeto Box
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto Frame
    Given Que Box debe heredar de tipo Frame
    When LLame al constructor de la clase Box
    Then La instancia creada debe ser de tipo Box y Frame

  Scenario: Establecer margen de controles hijo
    Given Que quiero establcer margenes a controles hijos del objeto Box
    When LLame al método setBorderWidth de la clase Box
    Then El objeto box debe responder child margin setted

  Scenario: Establecer la alineacion de los controles hijo
    Given Que quiero establcer la alineacion de los controles hijos del objeto Box
    When LLame al método setAlignment de la clase Box
    Then El objeto box debe responder alignment setted
    