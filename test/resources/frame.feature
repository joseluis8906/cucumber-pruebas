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

  Scenario: Establecer únicamente el ancho de un objeto Frame
    Given Que quiero establecer el ancho de un objeto Frame
    When LLame al método setWidth del objeto Frame
    Then El objecto Frame debe responder width setted

  Scenario: Establecer únicamente el alto de un objeto Frame
    Given Que quiero establecer el alto de un objeto Frame
    When LLame al método setHeight del objeto Frame
    Then El objecto Frame debe responder height setted

  Scenario: Acceder únicamente el ancho de un objeto Frame
    Given Que quiero acceder al ancho de un objeto Frame
    When LLame al método getWidth del objeto Frame
    Then El objecto Frame debe responder un numero de ancho

  Scenario: Acceder únicamente el alto de un objeto Frame
    Given Que quiero acceder al alto de un objeto Frame
    When LLame al método getHeight del objeto Frame
    Then El objecto Frame debe responder un numero de alto

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

  Scenario: Establecer el estilo del borde de un objeto Frame
    Given Que quiero establecer el estilo del borde de un objeto Frame
    When LLame al método setBorderStyle del objeto Frame
    Then El objecto Frame debe responder border style setted
  
  Scenario: Establecer la clase css de un objeto Frame
    Given Que quiero establecer la clase css de un objeto Frame
    When LLame al método setClass del objeto Frame
    Then El objecto Frame debe responder class setted

  Scenario: Acceder la clase css de un objeto Frame
    Given Que quiero acceder a la clase css de un objeto Frame
    When LLame al método getClass del objeto Frame
    Then El objecto Frame debe responder el nombre de la clase css

  Scenario: Establecer el nodo padre de un objeto Frame
    Given Que quiero establecer el nodo padre de un objeto Frame
    When LLame al método setParent del objeto Frame
    Then El objecto Frame debe responder parent setted

  Scenario: Acceder al nodo padre de un objeto Frame
    Given Que quiero acceder al nodo padre de un objeto Frame
    When LLame al método getParent del objeto Frame
    Then El objecto Frame debe responder un objeto

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

  Scenario: Acceder al display de un objeto Frame
    Given Que quiero acceder al display un objeto Frame
    When LLame al método getDisplay del objeto Frame
    Then El objecto Frame debe responder con el tipo de display

  Scenario: Acceder al tipo de fuente de un objeto Frame
    Given Que quiero acceder al tipo de fuente un objeto Frame
    When LLame al método getFontFamily del objeto Frame
    Then El objecto Frame debe responder el nombre de fuente

  Scenario: Establecer el tamaño de fuente de un objeto Frame
    Given Que quiero establecer la dimension de fuente de un objeto Frame
    When LLame al método setFontSize del objeto Frame
    Then El objecto Frame debe responder font size setted

  Scenario: Establecer la negrilla de un objeto Frame
    Given Que quiero establecer la negrilla de un objeto Frame
    When LLame al método setFontWeight del objeto Frame
    Then El objecto Frame debe responder font weight setted

  Scenario: Establecer dimensiones máximas de un objeto Frame
    Given Que quiero establecer las dimensiones maximas de un objeto Frame
    When LLame al método setMaxSize del objeto Frame
    Then El objecto Frame debe responder max size setted

  Scenario: Establecer dimensiones minimas de un objeto Frame
    Given Que quiero establecer las dimensiones minimas de un objeto Frame
    When LLame al método setMinSize del objeto Frame
    Then El objecto Frame debe responder min size setted

  Scenario: Establecer los margenes de un objeto Frame
    Given Que quiero establecer los margenes de un objeto Frame
    When LLame al método setMargin del objeto Frame
    Then El objecto Frame debe responder margin setted

  Scenario: Acceder a los margenes de un objeto Frame
    Given Que quiero acceder a los margenes de un objeto Frame
    When LLame al método getMargin del objeto Frame
    Then El objecto Frame debe responder el valor del margen

  Scenario: Establecer el padding de un objeto Frame
    Given Que quiero establecer el padding de un objeto Frame
    When LLame al método setPadding del objeto Frame
    Then El objecto Frame debe responder padding setted

  Scenario: Acceder al padding de un objeto Frame
    Given Que quiero acceder al padding de un objeto Frame
    When LLame al método getPadding del objeto Frame
    Then El objecto Frame debe responder el valor del padding

  Scenario: Establecer la opacidad de un objeto Frame
    Given Que quiero establecer la opacidad de un objeto Frame
    When LLame al método setOpacity del objeto Frame
    Then El objecto Frame debe responder opacity setted

  Scenario: Establecer si el objeto Frame es seleccionable
    Given Que quiero establecer que un objeto Frame es seleccionable
    When LLame al método setSelect del objeto Frame
    Then El objecto Frame debe responder selectable setted

  Scenario: Establecer la alineación vertical del objeto Frame
    Given Que quiero establecer la alineacion vertical de un objeto Frame
    When LLame al método setVAlign del objeto Frame
    Then El objecto Frame debe responder vertical align setted

  Scenario: Establecer la visibilidad del objeto Frame
    Given Que quiero establecer la visibilidad de un objeto Frame
    When LLame al método setVisibility del objeto Frame
    Then El objecto Frame debe responder visibility setted