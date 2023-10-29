# Lista de Pacientes

## Descripción del Proyecto

El código proporcionado detalla la estructura y funcionalidad de una interfaz de usuario diseñada para gestionar una lista de pacientes. Esta desarrollado con la lógica de una aplicación CRUD.

Utiliza tecnologías estándar web como HTML, CSS y JavaScript, además de la librería Bootstrap para estilizar la interfaz. A continuación, se desglosa el código en sus componentes esenciales para entender su funcionamiento y estructura.

## Interfaz

![interfazCRUD](https://github.com/AlbertoJaimes/ListaPacientes/assets/107129295/647a01be-b582-4f8a-8a4f-297a65dc7b0e)


## Que es un CRUD

CRUD es un acrónimo que se utiliza en el ámbito de desarrollo de software para referirse a las cuatro operaciones básicas que se pueden realizar sobre los datos en una aplicación o sistema: Create (Crear), Read (Leer), Update (Actualizar) y Delete (Eliminar). Estas operaciones forman la base de muchos sistemas de información y son esenciales para la gestión de datos.

### 1. Create (Crear):
   - Esta operación se refiere a la creación y almacenamiento de nuevos registros o datos en el sistema. Por ejemplo, agregar un nuevo paciente a una lista, crear una nueva entrada en una base de datos, o añadir un nuevo archivo a un sistema de gestión documental.

### 2. Read (Leer):
   - La operación de lectura implica recuperar y mostrar datos existentes. Esto podría incluir mostrar una lista de pacientes, leer registros de una base de datos, o cargar un archivo existente.

### 3. Update (Actualizar):
   - Actualizar se refiere a modificar datos existentes. Por ejemplo, cambiar el nombre o el diagnóstico de un paciente existente, actualizar un registro en una base de datos, o editar y guardar un archivo existente.

### 4. Delete (Eliminar):
   - La operación de eliminación implica eliminar datos existentes del sistema, como borrar un paciente de la lista, eliminar un registro de una base de datos, o eliminar un archivo.

Las aplicaciones CRUD son fundamentales en muchos sistemas, desde aplicaciones web simples hasta sistemas de gestión de bases de datos complejos. Permiten a los usuarios y a otros sistemas interactuar con los datos de una manera estructurada y controlada, garantizando la integridad y la gestión efectiva de los datos.

## Desglose del Código

### 1. Estructura Básica:

Declaración DOCTYPE: (`<!DOCTYPE html>`): Establece el tipo de documento a HTML.
Elemento HTML: (`<html lang="es">`): Inicia la estructura del documento HTML y especifica el idioma como español.

### 2. Cabeza del Documento (`<head>`):

Codificación de Caracteres: (`<meta charset="UTF-8" />`): Define la codificación de caracteres del documento como UTF-8.

Configuración de Vista: (`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`): Establece configuraciones iniciales de vista para dispositivos móviles.

Título del Documento: (`<title>Lista de Pacientes</title>`): Define el título de la página.

Favicon: (`<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />`): Proporciona un icono para la pestaña del navegador.

Estilos Bootstrap: (`<link rel="stylesheet" href="/css/bootstrap.css" />`): Incluye los estilos de Bootstrap para estilizar la interfaz.

### 3. Cuerpo del Documento (`<body>`):

Encabezado (`<header>`): Crea un encabezado con un fondo azul y un título centrado.

Contenedor Principal (`<div class="container">`):

Área de Ingreso: Define un área para ingresar un nuevo nombre de paciente y un botón para añadirlo a la lista.

Área de Lista: (`<div id="patientList"></div>`): Define un área donde se mostrará la lista de pacientes.

Pie de Página (`<footer>`): Crea un pie de página con un mensaje de copyright.

### 4. Scripts (`<script>`):

JavaScript: (`<script src="/js/index.js"></script>`): Incluye el JavaScript de Bootstrap.

JavaScript Personalizado:

Carga Inicial: Carga cualquier paciente existente desde el Local Storage o inicializa una lista vacía si no hay datos.

`renderPatients()`: Función que genera la lista de pacientes en el DOM.

`addPatient()`: Función que añade un nuevo paciente a la lista y vuelve a renderizar la lista.

`Event Listener`: Añade un event listener al campo de entrada para que al presionar la tecla Enter, se llame a la función addPatient.

`editPatient()`: Función que permite editar el nombre de un paciente existente a través de un cuadro de diálogo prompt.

`deletePatient()`: Función que permite eliminar un paciente de la lista.

Renderizado Inicial: Llama a `renderPatients` para mostrar cualquier paciente existente al cargar la página.
