Feature: Pruebas del objeto Destop
  Con el fin de comprobar el comportamiento del objeto Desktop
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto Frame
    Given Que Desktop debe heredar de tipo Frame
    When LLame al constructor de la clase Desktop
    Then La instancia creada debe ser de tipo Desktop y Frame

  Scenario: Abarcar dimensiones del navegador
    Given Que el objeto Desktop debe abarcar las dimensiones del navegador
    When LLame al método fill del objeto Desktop 
    Then El objeto Desktop debe responder space filled