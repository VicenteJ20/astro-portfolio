---
title: "ViewTransitions en Astro"
pubDate: 2024-02-25
description: "Si te ha ocurrido como a mi, que he creado mi primer proyecto en Astro y he intentado usar las nuevas transiciones y me ha tocado ver como los scripts que incluían mis páginas .astro quedaban inutilizables posterior a navegar entre las páginas."
author: {
    image: "/images/profile.webp",
    name: "Vicente Jorquera"
}
image:
  url: "/images/view-transitions-bg.webp"
  alt: "ViewTransitions en Astro"
  source: "Elaboración propia"
tags: ["Astro", "JavaScript"]
slug: "viewtransitions-en-astro-framework"
type: "posts"
---

## ¿Por qué ocurre este problema?

Por defecto cuando utilizamos Astro lo que creamos en una web en formato de MPA (Multi Page Application) donde el comportamiento normal es tener diferentes páginas cada que se hace una petición, esto conlleva que aunque usemos un layout este vuelve cargarse cada que cambiamos de páginas. Por otra parte, tenemos las SPA (Single Page Application) donde el comportamiento es diferente, acá nos encontramos con la posibilidad de tener elementos que no van a volver cargarse como el layout si este ya estaba cargado. Lo mismo ocurre con los scripts, esto hace que el script esté activo y funcional solo la primera vez que se carga la página y si volvemos a la página sin recargarla, el script funcionará correctamente debido a que nuestra página con las ViewTransitions de Astro ha cambiado su funcionamiento de MPA a una SPA.

## ¿Es necesario utilizar las ViewTransitions en Astro?

Este punto realmente es algo subjetivo, esto quiere decir que depende del cliente o del desarrollador si quiere que su aplicación visualmente tenga transiciones al momento de cambiar la página, que si es cierto, hace que se vea mucho más moderna y atractiva la web pero requiere algunas consideraciones previas, como puede ser el hecho de tener una SPA en lugar de una MPA o la necesidad de cargar código de JavaScript extra en el navegador cliente, lo que podría impactar negativamente si tus usuarios utilizan bloqueadores o directamente desactivan el JavaScript en el navegador perdiendo así la funcionalidad de tu web.

## Mi problema con las ViewTransitions

En mi caso personal me estaba adentrando en el mundo de Astro construyendo mi blog siguiendo el tutorial básico (sin llegar a la parte de las ViewTransitions) y tenía un layout que se veía de la siguiente manera:

```astro
<GeneralLayout title={frontmatter.title}>
	<article>
		<slot />
	</article>
</GeneralLayout>
```

En el código anterior notarás que tengo un `<slot />` esto así porque en Astro es la forma de pasarle un children a tu componente, en este caso particular como lo dice es un layout, esto significa que este layout se carga una vez y no vuelve a cargarse a menos que se cambie o exista una página que hace uso de un layout distinto.

El código a continuación es el script que utilicé para agregar el atributo `target="_blank"` en todos los elementos a que se encuentran dentro del article.

```js
 <script>
    const links = document.querySelectorAll(".article-md a");

    links.forEach((item) => {
        item.setAttribute("target", "_blank");
        item.setAttribute("rel", "noopener noreferrer");
    });
</script>
```

La funcionalidad del código es algo bastante simple en realidad, sin embargo lo que te comentaré más adelante es algo que puedes utilizar con cualquier script, sin importar si es algo más complejo o aún más simple.

## La solución

Luego de investigar un poco en internet y revisar la documentación de Astro me encontré con la siguiente solución:

```js
 <script transition:persist>
    window.links = document.querySelectorAll(".article-md a");

    window.links.forEach((item) => {
        item.setAttribute("target", "_blank");
        item.setAttribute("rel", "noopener noreferrer");
    });
</script>
```

Como puede ver en el código anterior, podemos agrega el atributo `transition:persist` para hacer que nuestro script persista o visto de otra manera, mantenga la funcionalidad aunque se haya navegado a través de la página.

Adicionalmente, en lugar de utilizar una constante, se utiliza el objeto window y se le asigna links el cual será reemplazo por lo nuevos atributos cada que se haga un cambio de página, esto con el fin de mantener el funcionamiento aún cuando nuestro script ya fue cargado una sola vez en el lado del cliente.

## Conclusiones

Como podemos ver Astro es un framework muy versátil y agnóstico, esto quiere decir que podemos usarlo en modo stand-alone como lo utilicé acá, donde utilizamos únicamente Astro y JS o podríamos implementar React u otras librerías para complementar y expandir su funcionamiento.

Sin embargo, gracias a las funcionalidades que ofrece creo que es una excelente opción para construir páginas estáticas o páginas donde nos interesa cargar la menor cantidad de JavaScript al cliente sin hacer que la web se vea poco atractiva o funcional esto de la mano de implementaciones como las ViewTransitions que se aplican de una manera muy simple y le dan un aspecto moderno a cualquier web.
