Feature: Pruebas del objeto InputText
  Con el fin de comprobar el comportamiento del objeto InputText
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Heredar de un objeto Frame
    Given Que InputText debe heredar de tipo Frame
    When LLame al constructor de la clase InputText
    Then La instancia creada debe ser de tipo InputText y Frame

  Scenario: Establecer placeholder
    Given Que quiero establecer el placeholder del objeto InputText
    When LLame al método setPlaceholder de la clase InputText
    Then El objeto InputText debe responder placeholder setted

  Scenario: Establecer escritura secreta
    Given Que quiero establecer escritura secreta del objeto InputText
    When LLame al método setPassword de la clase InputText
    Then El objeto InputText debe responder secret mode setted

  Scenario: Establecer escritura monetaria
    Given Que quiero establecer escritura monetaria del objeto InputText
    When LLame al método setCurrency de la clase InputText
    Then El objeto InputText debe responder currency mode setted

  Scenario: Establecer limite de caracteres
    Given Que quiero establecer limite de caracteres del objeto InputText
    When LLame al método setMaxLength de la clase InputText
    Then El objeto InputText debe responder max length setted

  Scenario: Reiniciar el contenido del control
    Given Que quiero reiniciar el value del objeto InputText
    When LLame al método reset de la clase InputText
    Then El objeto InputText debe responder input reseted

  Scenario: Establecer alineación del contenido
    Given Que quiero establecer la alineación del contenido del objeto InputText
    When LLame al método setTextAlign de la clase InputText
    Then El objeto InputText debe responder text align setted