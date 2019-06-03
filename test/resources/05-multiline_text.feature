Feature: Pruebas del objeto Multiline
  Con el fin de comprobar el comportamiento del objeto Multiline
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto InputText
    Given Que Multiline debe heredar de tipo InputText
    When LLame al constructor de la clase Multiline
    Then La instancia creada debe ser de tipo Multiline y InputText

  Scenario: Establecer multi linea
    Given Que quiero establecer escritura multi linea en el objecto Multiline
    When LLame el metodo setMultiline del objeto Multiline
    Then El objecto Multiline debe responder multi line setted