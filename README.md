# **Gestor de Usuarios - CRUD Local con API JSONPlaceholder**

Este proyecto tiene como objetivo implementar un **CRUD** de usuarios utilizando **JavaScript puro**, donde:  

- Se realiza un `GET` inicial para obtener un listado de usuarios desde la API de JSONPlaceholder.  
- Todo el **CRUD** (Crear, Leer, Actualizar y Eliminar) se gestiona localmente, sin interactuar con la API después del `fetch`.  
- Se incluye una funcionalidad de **búsqueda** para filtrar usuarios por su nombre.

---

## **Instrucciones**

1. **Haz un Fork del Proyecto**  
   Realiza un **fork** de este repositorio y clónalo a tu máquina local para comenzar a trabajar en tu solución.

2. **Objetivo**  
   Debes desarrollar un conjunto de funcionalidades que permita gestionar usuarios localmente con las operaciones de **Crear**, **Leer**, **Actualizar** y **Eliminar** (CRUD), junto con un **buscador** de usuarios. El listado inicial de usuarios debe obtenerse mediante un `fetch` desde la API de JSONPlaceholder, pero todas las demás operaciones deben gestionarse localmente.

3. **Operaciones a Implementar**

   - **Obtener (GET)** un listado de usuarios desde la API de JSONPlaceholder.
   - **Crear (POST)** un nuevo usuario en la lista local.
   - **Actualizar (PUT)** un usuario existente en la lista local.
   - **Eliminar (DELETE)** un usuario de la lista local.
   - **Buscar (Filtrar)** usuarios por su nombre localmente (sensible a coincidencias parciales).
   
---

## **Requisitos**

### **1. Obtener (GET) el listado inicial de usuarios**  
- Realiza un `fetch` al endpoint:  
  `https://jsonplaceholder.typicode.com/users`  
- Obtén un listado inicial de usuarios.  
- Almacena los usuarios obtenidos en una estructura de datos local (ej.: un array).  
- Cada usuario debe tener la siguiente información:
  - `id`: Identificador único.
  - `name`: Nombre del usuario.
  - `email`: Correo electrónico.
  - `phone`: Teléfono.
  - `company.name`: Nombre de la empresa.

### **2. Crear un usuario localmente**  
- Agrega un nuevo usuario a la lista local.  
- El nuevo usuario debe tener la misma estructura que los usuarios obtenidos con el `GET`.
- Asigna un `id` único al nuevo usuario (puedes usar un contador interno o cualquier otro mecanismo).

### **3. Actualizar un usuario localmente**  
- Permite editar los datos de un usuario existente en la lista local.  
- La actualización debe ser realizada en base al `id` del usuario.

### **4. Eliminar un usuario localmente**  
- Elimina un usuario de la lista local en base a su `id`.  
- Debes asegurarte de que la lista se actualice correctamente después de eliminar un usuario.

### **5. Buscar usuarios por nombre**  
- Implementa una función que permita filtrar usuarios por su nombre.
- La búsqueda debe ser insensible a mayúsculas y minúsculas, y permitir coincidencias parciales.

---

## **Criterios de Evaluación**

1. **Gestión Local de Datos**  
   - Después de realizar el `GET`, toda la información debe ser manejada localmente en memoria.  
   - Las operaciones de **Crear**, **Actualizar** y **Eliminar** deben operar sobre los datos locales, sin realizar nuevas solicitudes a la API.

2. **Modularidad y Organización del Código**  
   - El código debe estar bien estructurado, con funciones claras para cada operación (CRUD y búsqueda).  
   - Utiliza buenas prácticas de programación para dividir el código en componentes lógicos.

3. **Validaciones y Manejo de Errores**  
   - Asegúrate de que las operaciones de **Crear**, **Actualizar**, y **Eliminar** sean seguras y manejen correctamente los casos de error, como intentar eliminar un usuario inexistente.

4. **Búsqueda Eficiente**  
   - La función de búsqueda debe ser eficiente y realizar comparaciones insensibles a mayúsculas y minúsculas.

5. **Resultados Esperados**  
   - El sistema debe comportarse de la siguiente manera:
     - **GET**: Recupera el listado inicial de usuarios correctamente.
     - **POST**: Crea un usuario con una estructura adecuada y un `id` único.
     - **PUT**: Actualiza un usuario existente correctamente.
     - **DELETE**: Elimina un usuario de manera efectiva.
     - **Buscar**: Devuelve resultados relevantes según el nombre ingresado.

6. **Código Limpio y Legible**  
   - El código debe ser fácil de leer y entender. Usa nombres descriptivos para las funciones y variables.

---

## **Instrucciones para Entregar el Proyecto**

1. Realiza un **commit** con todos los cambios realizados.
2. Una vez que hayas completado el ejercicio, sube tus cambios a tu repositorio.
3. Abre un **Pull Request** con la solución al repositorio original.

---

## **Extras (Opcional)**

- Implementa un sistema para limitar los resultados de búsqueda a los primeros 10 usuarios.

---

Este ejercicio está diseñado para evaluar tus habilidades en la gestión de datos localmente, la manipulación de arrays y la implementación de operaciones CRUD usando JavaScript. ¡Buena suerte!
