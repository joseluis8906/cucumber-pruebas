Feature: Pruebas del objeto Button
  Con el fin de comprobar el comportamiento del objeto Button
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto Frame
    Given Que Button debe heredar de tipo Frame
    When LLame al constructor de la clase Button
    Then La instancia creada debe ser de tipo Button y Frame

  Scenario: Responder al evento MouseMove
    Given Que quiero ejecutar eventos de mouse move de un objeto Button
    When LLame al método addEvent del objeto Button
    Then El objeto Button debe responder mousemove handler added

  Scenario: Responder al evento Click
    Given Que quiero ejecutar eventos de mouse click de un objeto Button
    When LLame al método addEvent del objeto Button
    Then El objeto Button debe responder click handler added

  Scenario: Establecer imagen de icono
    Given Que quiero establecer una imagen como icono de un objeto Button
    When LLame al método setIcon del objeto Button
    Then El objeto Button debe responder icon setted
