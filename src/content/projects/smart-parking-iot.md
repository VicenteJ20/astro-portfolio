---
title: Smart Parking - IoT
fullTitle: Sistema de administración de estacionamientos
pubDate: 2023-01-03
description: Esta es la solución planteada para nuestro proyecto de integración en INACAP, consiste en una combinación de hardware y software para crear una solución que permita administrar plazas y lugares de estacionamiento. Este proyecto en cuestión está desarrollado por un grupo de trabajo conformado por estudiantes de Ingeniería en Informática de la sede INACAP Curicó.
author:
  image: /images/profile.webp
  name: Vicente Jorquera
image:
  url: /images/home-image-landing.webp
  alt: imagen representativa
  source: Imagen de stock en Unsplash
tags:
  - React
  - TypeScript
  - AWS
slug: smart-parking-institute-version
type: proyectos
links:
  repo: https://github.com/VicenteJ20/estacionamiento-inteligente-cliente
keywords:
  - Proyecto de integración
  - proyecto universidad
  - administrador de estacionamientos
  - software de administración de estacionamientos
  - proyecto en grupo
  - inacap
  - curicó
  - vicente jorquera curicó
  - vicente jorquera chile
  - proyecto grupal inacap curicó
  - INACAP CURICÓ
  - proyecto IoT
  - iot
  - react iot
  - arduino
  - raspberry pi pico
  - raspberry
---

## Problemática encontrada

Tras una investigación en la zona, incluyendo la propia sede que utilizamos como ejemplo para testear el proyecto, notamos que los guardias deben estar constantemente rondando a través del estacionamiento para identificar si hay o no lugares disponibles para estacionarse y quién puede hacerlo ya que hay zonas seccionadas para solo docentes o estudiantes puedan ubicarse en esa zona en específico. Si bien las rondas son algo normal, la necesidad de estar prestando atención constante a los lugares del estacionamiento hace que su trabajo sea ineficiente.

## Solución propuesta

La solución general cuenta internamente de tres soluciones más pequeñas indicas a continuación.

### Hardware

Esta solución hace referencia a como gestionamos la parte física que requiere ir en el lugar que nuestro cliente espera automatizar, para esto utilizamos los siguientes elementos:

- Raspberry Pi 4: como servidor intermedio entre la infraestructura en nube, la parte física.
- Raspberry Pi Pico / Arduino UNO: estas placas nos ayudan a seccionar la zona que queremos administrar, dejando que varios sensores (lugares de estacionamiento) vayan conectados a estas placas de desarrollo, permitiéndonos identificar de mejor manera en qué área están los sensores. (Áreas => forma de administrar ubicaciones según cliente).
- Sensores ultrasónicos: debido a que un punto importante para nosotros es conservar el costo lo más contenido posible sin perder calidad, escogimos los sensores ultrasónicos HC-SR04, que tienen una medición máxima de 4 metros, por lo tanto es más que suficiente para lo que los usaríamos.
- Cableado: requerido para proporcionar energía a los sensores y placas previamente mencionadas.

A continuación, se encuentra la topología de la infraestructura local orientada a mostrar como se comunican los sensores y las placas. En este punto cabe menciona que en caso de usar la Rapsberry Pi Pico W, los sensores cableados a los Arduinos se eliminan y son reemplazados con una red wifi dedicada para conectar los sensores de forma inalámbrica.

![topología local](https://vicentejorquera.s3.amazonaws.com/smart-parking-v1/topologia-local.webp)

### Infraestructura

Como segunda solución interna, desarrollamos también una infraestructura en nube. Como selección grupal escogimos desarrollar en AWS debido a que INACAP tienen contratos con la misma por lo que podemos acceder a créditos de consumo, evitando que invirtiéramos nuestro dinero durante el proceso de desarrollo, los servicios de AWS que utilizamos en concreto son los siguientes:

- **Internet Gateway:** para dar salida y entrada de datos a nuestra topología a través de internet.
- **ELB (Elastic Load Balancer):** este servicio nos permite redirigir el tráfico entrante a los servidores correspondientes, esto debido a que nuestras APIs está divididas en varias servidores, a modo de evitar que toda nuestra infraestructura se caiga en caso de que un servidor se sature.
- **EC2 (Elastic Compute Cloud):** nuestros servidores de API y servidor de instancias de aplicación para clientes.
- **RDS (Relation Database Service):** servicio dedicado a autogestionar servidores de bases de datos, escogimos este servicio y no una EC2 es que este servicio ofrece la infraestructura como servicio, permitiéndonos olvidarnos de la administración del servidor, parches de seguridad entre otras tareas necesarias a la hora de tener un servidor de bases de datos.
- **MongoDB Atlas:** un servicio similar a RDS pero dedicado a MongoDB una base de datos no relacional de alto rendimiento también hosteada en AWS.

La infraestructura en cuestión luce de la siguiente manera:

![infraestructura cloud](https://vicentejorquera.s3.amazonaws.com/smart-parking-v1/topologia-cloud.webp)


### Software

La tercera solución es el software, en este caso escogimos desarrollar una aplicación web con React y NextJS. Junto a esto también utilizamos TypeScript, y algunas librerías descritas más adelante, con la finalidad de hacer una app que sea atractiva visualmente para nuestros clientes pero que no deje de lado la eficiencia.

#### APIs

Nuestras APIs está seccionadas en dos grupos, las API Rest que utilizamos para interactuar con la base de datos y mantener las acciones que pueden realizar nuestros usuarios y las APIs Websocket que utilizamos para comunicar el servidor y el cliente en tiempo real.

**API REST:**

- NextJS 14
- TypeScript
- Prisma ORM
- NextAuth
- Mongoose

**API Websocket:**

- NodeJS
- Express
- JavaScript


#### Aplicación cliente

Utilizamos NextJS 14 con TypeScript y TailwindCSS. Esta aplicación tiene las siguientes funcionalidades:

- Visualización en tiempo real del estado de los sensores, detallando su número identificador y zona aplicada (Arduinos / Pi Pico W).
- Visualizar conteo de espacios libres y usados por plaza de estacionamiento y sección dedicada.
- Administrar y reorganizar ubicaciones de sensores.
- Administrar usuarios y roles.
- Solicitar nuevos sensores y nuevo despliegue en una nueva plaza de estacionamiento.

El proyecto no se encuentra disponible de momento, esto debido a que la infraestructura es demasiado compleja para mantener la app funcionando en un hosting gratuito. Sin embargo, el código fuente está disponible en GitHub de forma parcial (sin mantenimiento) en el siguiente enlace: [repo link](https://github.com/VicenteJ20/estacionamiento-inteligente-cliente)