Feature: Pruebas del objeto Window
  Con el fin de comprobar el comportamiento del objeto Window
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto Frame
    Given Que Window debe heredar de tipo Frame
    When LLame al constructor de la clase Window
    Then La instancia creada debe ser de tipo Window y Frame

  Scenario: Abrir instancias con el método open
    Given Que quiero crear instancias de tipo Window
    When LLame al método open de la clase Window
    Then El objeto Window debe responder opened

  Scenario: Cerrar instancias con el método close
    Given Que quiero poder cerrar un instancia de tipo Window
    When LLame al método close de la clase Window
    Then El objeto Window debe responder closed

  Scenario: Establecer barra de menú
    Given Que quiero establecer un menú a instancias de tipo Window
    When LLame al método enableMenu de la clase Window
    Then El objeto Window debe responder menu enabled

  Scenario: Establecer barra de titulo
    Given Que quiero establecer una barra de titulo a objetos de tipo Window
    When LLame al método enableTitleBar de la clase Window
    Then El objeto Window debe responder title bar enabled

  Scenario: Establecer layout
    Given Que quiero establecer un contenedor layout a instancias de tipo Window
    When LLame al método setLayout de la clase Window
    Then El objeto Window debe responder layout setted