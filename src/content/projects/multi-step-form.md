---
title: 'Multi step form - Frontend Mentor'
fullTitle: 'Formulario multi paso con React + Redux + TypeScript'
pubDate: 2024-02-15
description: 'Esta es mi solución al desafío Multi-step-form de Frontend Mentor, un proyecto donde apliqué diferentes tecnologías para hacer un formulario multi paso persistiendo el estado y compartimentando el acceso a entre diferentes componentes con ayuda de Redux-Toolkit, si bien podía usar Local Storage o Session Storage, consideré que era mejor opción demostrar que también sé trabajar con Redux'
author:
    image: '/images/profile.webp'
    name: 'Vicente Jorquera'
image:
    url: '/images/multi-step-form-lg.webp'
    alt: 'Desktop demo social links profile'
    source: 'Elaboración propia'
tags: ["React", "JavaScript", "React"]
slug: 'multi-step-form-vicente-jorquera-frontend-mentor'
type: 'proyectos'
links:
    repo: https://github.com/VicenteJ20/multi-step-form
    demo: https://www.vicentejorquera.dev/proyectos/multi-step-form
---


## El desafío

El desafío expuesto en Frontend Mentor es construir un formulario multi paso (multi-step-form) lo más cercano al diseño que entrega Frontend Mentor, considerando las siguientes funcionalidades:

- Hacer que los usuarios completen cada campo obligatorio del formulario antes de avanzar al paso siguiente.
- Permitir volver atrás para actualizar sus selecciones.
- Mostrar un resumen de las selecciones del usuario en el último paso y permitir confirmar orden o volver atrás.
- Ver los estados de "hover" y "focus" de todos los elementos inactivos de la página.
- Recibir mensajes de validación en caso de que exista un campo obligatorio vacío.
- Recibir mensajes de validación en el formulario si:
	- Un campo obligatorio se ha omitido.
	- La dirección de email no encuentra correctamente formateada.
	- Se intenta avanzar pero no se han hecho ninguna selección o no se ha rellenado la información correspondiente.

Se requiere utilizar HTML, CSS y JavaScript pero puede usar cualquier herramienta que le permita al desarrollador completar este desafío.

## Tecnologías escogidas

- **TypeScript:** Personalmente disfruto utilizar TypeScript en lugar de JavaScript si es posible, esto porque cometo menos errores al programar al recibir avisos sobre propiedades que me he olvidado mientras desarrollo, puedo crear interfaces o tipos que me permiten estructurar los objetos que voy creando al momento de desarrollar el software. 
- **React:** Si bien es posible completar este desafío sin utilizar librerías de Frontend como React, lo utilicé debido al conocimiento que tengo y porque puedo unirlo fácilmente a otras tecnologías como Redux toolkit.
- **Redux Toolkit:** Como mencioné justo en el punto anterior, esta librería la utilicé junto a React para compartir el estado entre componentes concentrando la información en un solo lugar, si bien pude utilizar Session Storage o Local Storage para lograr lo mismo, considero que React Redux es una excelente alternativa, sobre todo en aplicaciones web modernas y que requieren escalar con el tiempo.

## Conclusiones

Con el fin de desarrollar correctamente este proyecto me sumergí en el ecosistema de React, utilizando la librería sobre ViteJS, una popular herramienta que te permitirá crear apps de javascript con diferentes frameworks y librerías, junto a Redux para manejar el estado entre componentes, algo que tiene mucho potencial debido a la constante necesidad de modularizar las aplicaciones y acceder al contenido en el lado del cliente. Si quieres visitar mi proyecto puedes hacer clic en [aquí](https://multi-step-form.vicentejorquera.dev/your-info) o acceder al [código fuente](https://github.com/VicenteJ20/multi-step-form)
