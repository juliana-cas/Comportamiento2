Diagramas: https://drive.google.com/drive/folders/1ljATjb2zkQcQ_U77_xZxTtc4NXRLu8_r?usp=sharing
Explicacion de double dispatch:
El Double Dispatch es un patrón de diseño que se usa para resolver el problema de la selección de métodos en tiempo de ejecución en lenguajes de programación que no soportan el envío múltiple directamente. En el contexto del patrón de comportamiento Visitor, el Double Dispatch permite que una operación que se ejecuta dependa del tipo de dos objetos: el visitante (Visitor) y el elemento que está siendo visitado. 

Funciona asi: 

Primero, se tiene una jerarquía de elementos que pueden ser “visitados”. 

Luego, se define una interfaz Visitor con un método de visita para cada tipo de elemento. 

Cuando un visitante visita un elemento, el elemento invoca el método de visita correspondiente al tipo del visitante y se pasa a sí mismo como argumento. 

Eso simula un envío doble: el método que se ejecuta no solo depende del tipo del visitante, sino también del tipo del elemento. De esta manera, diferentes visitantes pueden realizar diferentes operaciones en el mismo tipo de elemento, y un visitante puede tratar de manera diferente a los distintos tipos de elementos 
