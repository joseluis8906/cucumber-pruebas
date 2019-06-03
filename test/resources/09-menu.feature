Feature: Pruebas del objeto Menu
  Con el fin de comprobar el comportamiento del objeto Menu
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto Frame
    Given Que Menu debe heredar de tipo Frame
    When LLame al constructor de la clase Menu
    Then La instancia creada debe ser de tipo Menu y Frame

  Scenario: Agregar items al menu
    Given Que quiero agregar items al objeto tipo Menu
    When LLame al método addItem de la clase Menu
    Then El objeto Menu debe responder item added
