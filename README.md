# NG - Supplement Store || E-commerce React App

Esta es una aplicación web de e-commerce desarrollada con React JS y Vite, utilizando Firebase para la gestión de la base de datos.

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Características](#características)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Funcionalidades Principales](#funcionalidades-principales)
7. [Autor](#autor)

## Descripción

Esta aplicación permite a los usuarios navegar por una lista de productos, ver los detalles de cada producto, agregar productos al carrito y finalizar la compra. Utiliza Firebase Firestore para almacenar los datos de los productos y las órdenes.

## Características

- Listado de productos
- Filtrado de productos por categoría
- Detalle de productos
- Carrito de compras
- Finalización de compra
- Generación de orden de compra
- Visualización de órdenes

## Tecnologías Utilizadas

- [React JS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/) (Firestore)
- [React Router](https://reactrouter.com/)
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente.

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/nico-giusepetti/entrega-final-react-giusepetti.git

2. **Instala las dependencias:**

   ```bash
   npm install

3. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev

## Uso

Una vez que el servidor de desarrollo esté en funcionamiento, puedes acceder a la aplicación desde tu navegador. 

## Funcionalidades Principales

### Home Page

- **Listado de Productos**: Muestra una lista de todos los productos disponibles en la tienda.
- **Filtrado por Categorías**: Permite filtrar los productos según las categorías definidas.

### Categorías

- **Vista Filtrada de Productos**: Muestra productos que pertenecen a una categoría específica seleccionada por el usuario.

### Detalle de Producto

- **Imagen del Producto**: Muestra una imagen del producto.
- **Descripción**: Proporciona una descripción detallada del producto.
- **Precio**: Muestra el precio del producto.
- **Marca**: Informa sobre la marca del producto.
- **Cantidad Disponible**: Muestra la cantidad disponible en stock.
- **Agregar al Carrito**: Permite al usuario agregar el producto al carrito de compras.

### Carrito de Compras

- **Listado de Productos en el Carrito**: Muestra los productos que el usuario ha agregado al carrito.
- **Cantidad y Precio Total**: Muestra la cantidad de cada producto y el precio total del carrito.
- **Eliminar Productos**: Permite al usuario eliminar productos del carrito.
- **Eliminar Carrito**: Permite al usuario eliminar el carrito de compras de manera total.
- **Finalizar Compra**: Redirige al usuario a la página de checkout para completar la compra.

### Checkout

- **Formulario de Compra**: Permite al usuario ingresar sus datos personales (nombre, teléfono, email) para poder finalizar la compra.
- **Finalizar Compra**: Permite al usuario completar la compra y generar una orden.

### Gestión de Órdenes

- **Listado de Órdenes**: Muestra una lista de todas las órdenes generadas por los usuarios.
- **Detalle de Órdenes**: Proporciona detalles sobre cada orden, incluyendo el ID y el total.

## Autor
© Nicolás Giusepetti - 2024


