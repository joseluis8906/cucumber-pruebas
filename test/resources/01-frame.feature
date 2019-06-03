Feature: Pruebas del objeto Frame
  Con el fin de comprobar el comportamiento del objeto Frame
  se hacen llamados a funciones para verificar el estado interno
  de los mismos.

  Scenario: Creación de un objeto Frame
    Given Que quiero crear un objeto de tipo Frame
    When LLame al constructor de la clase Frame
    Then La instancia creada debe ser de tipo Frame

  Scenario: Agregar controles hijos a un objeto Frame
    Given Que quiero agregar controles a objetos Frame
    When LLame al método addChild del objeto Frame
    Then El objecto Frame debe responder child added

  Scenario: Accceder a controles hijos de un objeto Frame
    Given Que quiero acceder a los controles de un objeto Frame
    When LLame al método getChilds del objeto Frame
    Then El objecto Frame debe responder con un array de objetos

  Scenario: Agregar manejadores de eventos a un objeto Frame
    Given Que quiero agregar manejadores de eventos a un objeto Frame
    When LLame al método addEvent del objeto Frame
    Then El objecto Frame debe responder handler added
  
  Scenario: Eliminar manejadores de eventos de un objeto Frame
    Given Que quiero eliminar manejadores de eventos de un objeto Frame
    When LLame al método removeEvent del objeto Frame
    Then El objecto Frame debe responder handler removed

  Scenario: Establecer elemento html a un objeto Frame
    Given Que quiero establecer el elemento html a un objeto Frame
    When LLame al método setHtml del objeto Frame
    Then El objecto Frame debe responder html setted

  Scenario: Establecer nivel de profundidad de un objeto Frame en el DOM
    Given Que quiero establecer el nivel de profundidad de un objeto Frame
    When LLame al método setZIndex del objeto Frame
    Then El objecto Frame debe responder z-index setted

  Scenario: Establecer las dimensiones de un objeto Frame
    Given Que quiero establecer las dimensiones de un objeto Frame
    When LLame al método setSize del objeto Frame
    Then El objecto Frame debe responder dimension setted

  Scenario: Acceder a las dimensiones de un objeto Frame
    Given Que quiero acceder a las dimensiones de un objeto Frame
    When LLame al método getSize del objeto Frame
    Then El objecto Frame debe responder una tupla ancho y alto

  Scenario: Acceder elemento html de un objeto Frame
    Given Que quiero acceder al elemento html de un objeto Frame
    When LLame al método getHtml del objeto Frame
    Then El objecto Frame debe responder un elemento html

  Scenario: Establer la posición de un objeto Frame
    Given Que quiero establecer la posición de un objeto Frame
    When LLame al método setPosition del objeto Frame
    Then El objecto Frame debe responder position setted

  Scenario: Acceder la posición de un objeto Frame
    Given Que quiero acceder la posición de un objeto Frame
    When LLame al método getPosition del objeto Frame
    Then El objecto Frame debe responder una tupla con X y Y

  Scenario: Establecer el foco de un objeto Frame
    Given Que quiero establecer el foco de un objeto Frame
    When LLame al método setFocus del objeto Frame
    Then El objecto Frame debe responder focus setted

  Scenario: Establecer el color de fondo de un objeto Frame
    Given Que quiero establecer el color de fondo de un objeto Frame
    When LLame al método setBackgroundColor del objeto Frame
    Then El objecto Frame debe responder background color setted

  Scenario: Establecer una imagen de fondo a un objeto Frame
    Given Que quiero establecer una imagen de fondo a un objeto Frame
    When LLame al método setBackgroundImage del objeto Frame
    Then El objecto Frame debe responder background image setted

  Scenario: Establecer la posicion de una imagen de fondo a un objeto Frame
    Given Que quiero establecer la posicion de una imagen de fondo a un objeto Frame
    When LLame al método setBackgroundPosition del objeto Frame
    Then El objecto Frame debe responder background position setted

  Scenario: Establecer las dimensiones de una imagen de fondo a un objeto Frame
    Given Que quiero establecer las dimensiones de una imagen de fondo a un objeto Frame
    When LLame al método setBackgroundSize del objeto Frame
    Then El objecto Frame debe responder background size setted

  Scenario: Establecer el ancho del borde de un objeto Frame
    Given Que quiero establecer el ancho del borde de un objeto Frame
    When LLame al método setBorderSize del objeto Frame
    Then El objecto Frame debe responder border size setted
  
  Scenario: Establecer la clase css de un objeto Frame
    Given Que quiero establecer la clase css de un objeto Frame
    When LLame al método setClass del objeto Frame
    Then El objecto Frame debe responder class setted
  
  Scenario: Establecer el nodo padre de un objeto Frame
    Given Que quiero establecer el nodo padre de un objeto Frame
    When LLame al método setParent del objeto Frame
    Then El objecto Frame debe responder parent setted

  Scenario: Establecer color de fuente de un objeto Frame
    Given Que quiero establecer el color de fuente un objeto Frame
    When LLame al método setColor del objeto Frame
    Then El objecto Frame debe responder color setted

  Scenario: Establecer el tipo de cursor de un objeto Frame
    Given Que quiero establecer el tipo de cursor un objeto Frame
    When LLame al método setCursor del objeto Frame
    Then El objecto Frame debe responder cursor setted

  Scenario: Establecer el display de un objeto Frame
    Given Que quiero establecer el display un objeto Frame
    When LLame al método setDisplay del objeto Frame
    Then El objecto Frame debe responder display setted

  Scenario: Establecer el tamaño de fuente de un objeto Frame
    Given Que quiero establecer la dimension de fuente de un objeto Frame
    When LLame al método setFontSize del objeto Frame
    Then El objecto Frame debe responder font size setted

  Scenario: Establecer la negrilla de un objeto Frame
    Given Que quiero establecer la negrilla de un objeto Frame
    When LLame al método setFontWeight del objeto Frame
    Then El objecto Frame debe responder font weight setted

  Scenario: Establecer los margenes de un objeto Frame
    Given Que quiero establecer los margenes de un objeto Frame
    When LLame al método setMargin del objeto Frame
    Then El objecto Frame debe responder margin setted

  Scenario: Establecer el padding de un objeto Frame
    Given Que quiero establecer el padding de un objeto Frame
    When LLame al método setPadding del objeto Frame
    Then El objecto Frame debe responder padding setted

  Scenario: Establecer la opacidad de un objeto Frame
    Given Que quiero establecer la opacidad de un objeto Frame
    When LLame al método setOpacity del objeto Frame
    Then El objecto Frame debe responder opacity setted

  Scenario: Establecer si el objeto Frame es seleccionable
    Given Que quiero establecer que un objeto Frame es seleccionable
    When LLame al método setSelectable del objeto Frame
    Then El objecto Frame debe responder selectable setted

  Scenario: Establecer la alineación vertical del objeto Frame
    Given Que quiero establecer la alineacion vertical de un objeto Frame
    When LLame al método setVAlign del objeto Frame
    Then El objecto Frame debe responder vertical align setted

  Scenario: Establecer la visibilidad del objeto Frame
    Given Que quiero establecer la visibilidad de un objeto Frame
    When LLame al método setVisibility del objeto Frame
    Then El objecto Frame debe responder visibility setted