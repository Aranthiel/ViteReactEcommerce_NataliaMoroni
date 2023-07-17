# React JS - Proyecto Finalde Natalia Moroni  - Comision 43250

Este proyecto es el resultado del desarrollo del proyecto final del curso de React JS dictado por CoderHouse. El objetivo del proyecto es crear una aplicación de comercio electrónico (e-commerce) donde se puedan vender productos de un rubro a elección.

## Descripción del proyecto

El proyecto consiste en desarrollar una aplicación de e-commerce con las siguientes características:

- Los usuarios pueden ingresar, navegar por los productos y ver los detalles de cada producto.
- Desde la página de detalle de un producto, se puede ver su descripción, foto y precio, y agregarlo al carrito.
- Cuando el carrito contiene al menos un producto, se muestra un listado compacto de la orden con el precio total.
- Al ingresar el nombre, apellido, teléfono y correo electrónico (verificado ingresándolo dos veces), se activa el botón "Realizar compra".
- Al hacer clic en "Realizar compra", se guarda la orden en la base de datos, incluyendo todos los productos, la fecha y se muestra el número de orden.

## Requerimientos del proyecto

El proyecto cumple con los siguientes requerimientos:

- React Router: La navegación entre las diferentes vistas se gestiona mediante React Router.
- Firebase: Se utiliza Firebase como base de datos para almacenar los productos y las órdenes generadas.
  - Se implementan al menos dos colecciones en Firebase:
    - **items**: Contiene el catálogo completo de productos, incluyendo el enlace para la foto, el precio unitario, la descripción y la categoría.
    - **orders**: Almacena las órdenes generadas, que incluyen los productos, sus descripciones, precios y la fecha de la compra.
- Componentes sugeridos:
  - NavBar
  - CartWidget
  - ItemListContainer
  - ItemList
  - ItemDetailContainer
  - ItemDetail (que incluye el selector de cantidad, la descripción y el botón "Agregar al carrito")
  - Checkout (que muestra los detalles de compra, como los items con sus cantidades y el total de la orden, y solicita el nombre, apellido, teléfono y correo electrónico del comprador)
  - Brief (detalle de compra)

## Requisitos adicionales (opcional)

Los siguientes requisitos son opcionales y no se incluyen en los criterios de evaluación del proyecto, pero puedes implementarlos para agregar más funcionalidades:

- **Autenticación/Inicio de sesión**: Implementar algún servicio de autenticación disponible en Firebase para evitar el flujo de ingreso de correo electrónico. Si un usuario está autenticado, el checkout debería mostrar "Comprar como [correo electrónico del usuario]" para evitar compras con cuentas no deseadas.
- **Wishlist**: Implementar una lista de deseos donde los usuarios puedan guardar productos para comprar en otro momento. Los productos se pueden guardar desde la página de detalle o desde la lista de productos, y se puede acceder a ellos desde la barra de navegación o el menú desplegable. La lista de deseos debe tener acceso para agregar esos productos al carrito.
- **Producto personalizado**: Permitir agregar características seleccionables a un producto (por ejemplo, talla, color, etc.) sin modificar el precio. Las selecciones se detallarán en el checkout, por ejemplo: 1 x camisa (roja) $200 y 2 x camisa (verde) $400.
- **Validación de stock**: Validar el stock al intentar generar la orden y mostrar un mensaje si no hay suficiente stock disponible.

## Instalación y ejecución

Sigue estos pasos para instalar las dependencias y ejecutar el proyecto:

1. Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [aquí](https://nodejs.org/).

2. Clona este repositorio en tu máquina local o descarga los archivos del proyecto.

3. Abre una terminal en la carpeta raíz del proyecto.

4. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install

Una vez finalizada la instalación, puedes ejecutar el proyecto en modo de desarrollo con el siguiente comando:
    ```bash
    npm run dev

Esto iniciará la aplicación en un servidor local y podrás acceder a ella en tu navegador

##  Librerías adicionales utilizadas
En este proyecto se utilizaron las siguientes librerías adicionales:

- **React Router**: Librería para la gestión de la navegación en aplicaciones de React.
- **Firebase**: Plataforma de desarrollo de aplicaciones web que proporciona una base de datos en tiempo real y autenticación de usuarios.


