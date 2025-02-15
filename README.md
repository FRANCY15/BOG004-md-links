# **MDLinks Librería**

## **Índice**

* [1. Descripción de la libreria](#1-descripción-de-la-librería)
* [2. Instalación](#2-instalación)
* [3. Guía de uso](#3-guía-de-uso)
* [4. Desarrollo de la librería](#4-desarrollo-de-la-librería)
* [5. Creadora](#5-creadora)

***

## 1. **Descripción de la librería**

Esta librería busca principalmente apoyar los proyectos, en la lectura e identificación de archivos markdown, y dentro de ellos validar el código de estado de los links o urls existentes.


![ObjetoUrlValidada](https://github.com/FRANCY15/BOG004-md-links/blob/mdLinks/img/objetoUrlValidada.PNG)

## 2. **Instalación**

Para la instalación de la librería se debe digitar el siguiente comando a través de la terminal de su editor de código, desde la terminal de Git Bash.

`npm i md-links.francy`
 
## 3. **Guía de uso**

<p> Para usar la librería, posterior a la instalación e importación de la misma, existen 2 formas de ejecutarlo.

<p> Options:

- [ ] `' '` no ingresa ninguna opción, de esta manera la función no realiza validación, por lo cual imprime solo el texto del link encontrado, ubicación del archivo y url. Retorna un objeto como el siguiente: 

![ObjetoSinOptions](https://github.com/FRANCY15/BOG004-md-links/blob/mdLinks/img/objetoSinValidacion.PNG)

- [ ] `'--validate' || '--v'` le solicita a la función realizar la validación de los links encontrados, por lo cual imprime el texto del link encontrado, ubicación del archivo, url, código de estado, y ok. Retorna un objeto como el siguiente:

![ObjetoConValidate](https://github.com/FRANCY15/BOG004-md-links/blob/mdLinks/img/objetoUrlValidada.PNG)

- [ ] `'--stats' || '--s'` le solicita a la función realizar imprimir las estadísticas, por lo cual imprime Total de links encontrados, y cantidad de links no repetidos. Retorna un objeto como el siguiente:

![ObjetoConStats](https://github.com/FRANCY15/BOG004-md-links/blob/mdLinks/img/objetoStats.PNG)

- [ ] `'--stats' && '--validate'` le solicita a la función realizar las estadísticas y la validación, por lo cual imprime Total de links encontrados, cantidad de links no repetidos, y cuantos links rotos se encontrarón. Retorna un objeto como el siguiente:

![ObjetoConStats&Validate](https://github.com/FRANCY15/BOG004-md-links/blob/mdLinks/img/objetoStatsValidate.PNG)

<p> Ejecución:

### **El usuario debe ingresar la ruta ya sea relativa o absoluta entre comillas**

- [ ] Desde la la terminal de Git Bash se debe ejecutar el comando `mdLinks <'ruta del archivo o diredtorio a examinar'> <options>`

### **Desarrollo de la librería**

<p> Para el desarrollo del proyecto se estableció una ruta de trabajo, a través de un flujograma de procesos, el cual se puede observar a continuación.

[Flujograma de trabajo - MDLinks](https://lucid.app/lucidchart/59d4dea8-a682-469e-98ea-2185e979fc24/edit?invitationId=inv_f0ed0629-4644-4208-bdb8-51b670f1b30a)


### **Creadora**

<p> Francy Milena Corredor Ramírez
<p> Estudiante Laboratoria
<p> Cohort BOG-004
<P> GitHub: https://github.com/FRANCY15
