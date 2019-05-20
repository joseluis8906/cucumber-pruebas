Feature: Pruebas del objeto Frame
  Con el fin de comprobar el comportamiento del objeto Frame
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Creación de un objeto Frame
    Given Que quiero crear un objeto Frame
    When LLame al constructor de la clase 'Frame'
    Then La instancia creada debe ser de tipo 'Frame'