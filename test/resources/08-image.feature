Feature: Pruebas del objeto Image
  Con el fin de comprobar el comportamiento del objeto Image
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto Frame
    Given Que Image debe heredar de tipo Frame
    When LLame al constructor de la clase Image
    Then La instancia creada debe ser de tipo Image y Frame

  Scenario: Establecer imagen
    Given Que quiero establecer la imagen de un objeto Image
    When LLame al método setSrc del objeto Image
    Then El objeto Image debe responder image setted

  Scenario: Establecer layout circular
    Given Que quiero establecer layout circular de un objeto Image
    When LLame al método setRound del objeto Image
    Then El objeto Image debe responder round layout setted