---
title: "Mejorar el SEO en tu web con NextJS"
pubDate: 2024-02-19
description: "Si ya terminaste tu página web, portafolio, landing page, o página de presentación de producto con NextJS y quieres hacerla amigable con el SEO orgánico, este artículo te será de gran utilidad para que mejores la visibilidad de tu web en los motores de búsqueda sin costo adicional."
author: { image: "/images/profile.webp", name: "Vicente Jorquera" }
image:
  url: "/images/mejorar-seo-nextjs-home.webp"
  alt: "ViewTransitions en Astro"
  source: "Elaboración propia"
tags: ["SEO", "TypeScript", "Framework", "NextJS"]
slug: "mejorar-el-seo-en-tu-web-con-nextjs"
type: "posts"
keywords: ["SEO", "NextJS", "Optimiza NextJS", "SEO Friendly en NextJS"]
---

## ¿Qué es el SEO?

El S.E.O por sus siglas en inglés (Search Engline Optimization), que en español se traduce como **Optimización de motores de búsqueda**. La idea y el objetivo detrás del SEO es crear una estrategia que incremente la posición de tu web en los resultados de los motores de búsqueda. En palabras más simples, si quieres aparecer en la o las primeras páginas de búsqueda de Google u otros motores de búsqueda como **duckduckgo, bing, entre otros.**

## ¿Por qué darle prioridad a un buen SEO?

Como mencioné en el párrafo anterior el SEO es la optimización que se realiza de tu web para que los buscadores puedan encontrala de forma orgánica, esto se traduce en que los bots de manera automática y sin costo adicional encontrarán tu web.

Por otra parte, si tienes un mal SEO o simplemente no quieres optimizarlo, siempre puede optar por la opciones pagadas que te permitirán poner a tu web en los primeros resultados de búsqueda en el motor seleccionado. Sin embargo, es altamente recomendado que optimices el SEO de tu web para entregar una buena imagen y demostrar la calidad que puedes lograr a tus clientes.

## Mejorando el SEO de tu web

Los puntos a continuación son válidos si tienes una web cualquiera, es decir, puedes aplicar estas técnicas sin importar si tu web fue construida con NextJS, React, Astro, HTML puro u otra tecnología.

### Robots.txt

Este archivo es simple pero de mucha utilidad cuando intentamos que los bots en internet encuentren o eviten determinadas rutas que indiques en este archivo. En este caso el archivo _robots.txt_ es un archivo estático que debe estar ubicado en la siguiente ruta:

```sh
> /public/robots.txt
```

A continuación encontrarás un ejemplo de _robots.txt_ en el cual especificamos lo siguiente:

- **User-Agent:** En este punto permitimos que todos los agentes de usuario disponibles puedan encontrar la web, sin importar si es un agente de usuario móvil o de escritorio.
- **Disallow:** Esta regla nos permitirá indicar que rutas no queremos que sean escaneadas por los bots, a continuación la regla **Disallow** aparece dos veces, ya que en el ejemplo se bloquean dos rutas.
- **Allow:** Finalmente se encuentra la regla **Allow** que aparece una sola vez a diferencia de **Disallow**. Esto es así porque al establecer los bloqueos previos mediante **Disallow** le indicamos al archivo _robots.txt_ que todas las demás rutas están permitidas.

```sh
# Bloquea los robots en /api y /dashboard
User-agent: *
Disallow: /api
Disallow: /dashboard

# Permite el acceso a las siguientes rutas
User-agent: *
Allow: /
```

### Sitemap

Otro archivo importante es el Sitemap, esta es la forma más simple de comunicarse con los motores de búsqueda compartiendo la estructura de tu web con los bots, incluso con las personas que quieran leerlo y ver cuales son las rutas que contiene tu web.

Existen varias maneras de agregar y/o generar un Sitemap, sin embargo ya que el post trata sobre NextJS, el primer ejemplo será el ejemplo manual que puedes agregar en cualquier framework o tecnología similar y el segundo utilizará **getServerSideProps** para generar las rutas necesarias de forma automática.

**Caso 1: Agregando el Sitemap de forma manual**

Este archivo **Sitemap.xml** tenemos que ubicarlo en la carpeta _/public_, tal cual como hicimos con el archivo _robots.txt_, de esta manera:

```sh
> /public/sitemap.xml
```

El Sitemap debe contener lo siguiente:

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url>
<loc>https://www.vicentejorquera.dev/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/about/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/blog/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/blog/viewtransitions-en-astro-framework/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/contacto/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/proyectos/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/proyectos/encriptador-alura-latam-by-vicente-jorquera/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/proyectos/multi-step-form-vicente-jorquera-frontend-mentor/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/proyectos/smart-parking-institute-version/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/tags/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/tags/Astro/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/tags/JavaScript/</loc>
</url>
<url>
<loc>https://www.vicentejorquera.dev/tags/posts/viewtransitions-en-astro-framework/</loc>
</url>
</urlset>
```

El Sitemap en el ejemplo anterior es el Sitemap de mi web personal (la web donde estás leyendo esto) como puedes apreciar el archivo contiene una _<urlset />_ e internamente cada una de las _<url />_ que nuestra web tiene.

Esto puede ser un proceso tedioso y que puede generar diferentes problemas a medida que nuestra web va creciendo.

**Caso 2: Utilizar getServerSideProps para generar este archivo de forma automática**

Esta opción es la que deberíamos tener en cuenta como prioridad si nuestro proyecto está dedicado a compartir contenido o a modificar sus rutas constantemente, por ejemplo un blog, portafolio donde compartir proyectos y posts, una web de noticias, etc.

Para comenzar, debemos dirigirnos a la carpeta `/pages/` y crear un archivo llamado **sitemap.js** o **sitemap.ts** si utilizamos Typescript e internamente pegar el siguiente código:

```jsx
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!--We manually set the two URLs we know already-->
        <url>
        <loc>https://jsonplaceholder.typicode.com</loc>
        </url>
        <url>
        <loc>https://jsonplaceholder.typicode.com/guide</loc>
        </url>
        ${posts
          .map(({ id }) => {
            return `
        <url>
            <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
        </url>
        `;
          })
          .join("")}
    </urlset>
    `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
```

En el código anterior la función generateSiteMap(posts) se encarga de generar automáticamente las rutas al Sitemap a medida que vamos generando nuevos posts en nuestra web. Finalmente, nuestro proyecto volverá a generar este archivo cada que modifiquemos las rutas de los posts, ya sea agregando o removiendo documentos.

### Etiquetas Canonical

Estas etiquetas son las encargadas de indicarle a los motores de búsqueda cual es la URL que representa a tu web en caso de que haya contenido repetido o muy similar. Puedes indicarlo de la siguiente manera:

```jsx
import Head from "next/head";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Canonical Tag Example</title>
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
      </Head>
      <p>This post exists on two URLs.</p>
    </div>
  );
}

export default IndexPage;
```

Como podemos ver en el ejemplo anterior, le estamos indicando que el Post existe en dos URLs, dejando evidencia a través de la etiqueta Canónica cual es la URL original donde fue publicado nuestro artículo.

Esto es algo muy importante a considerar cuando estamos construyendo nuestro blog o portafolio y queremos compartir nuestros artículos en varios lugares, dando a entender a los bots de internet cual es la web oficial donde fue publicado originalmente el artículo y por lo tanto a quién o qué entidad le pertenece.

### Renderizado y Ranking

En este punto no hay mucho que explicar con código, sin embargo, es de suma importancia que escojamos la metodología que mejor se adapta al proyecto que estamos desarrollando:

- **SSG: Static Site Generation:** Esta técnica es ampliamente utilizada para crear sitios web que sean rápidos, seguros y fáciles de implementar. Esto implicar generar páginas HTML estáticas a partir de plantillas o componentes en tiempo de construcción, en lugar de hacerlo bajo demanda en tiempo de ejecución.
- **ISR: Incremental Static Regeneration:** Es un método de renderizado que permite utilizar la generación estática por cada página, sin la necesidad de realizar una reconstrucción completa de toda la aplicación, es decir que las páginas estáticas puedan ser generadas bajo demanda. Esto es de gran utilidad cuando queremos conservar las ventajas de la estrategia **SSG** en proyectos que requieran información que cambia cada ciertos intervalos de tiempo.
- **SSR: Server Side Rendering:** Esta técnica es la preferida por los motores de búsqueda, debido a que todo el contenido se genera en el servidor y luego se envía al cliente, es muy fácil para los buscadores encontrar y entender el contenido de tu web. Esta es una excelente opción si lo que buscamos es mejorar el SEO y aumentar la carga inicial de tu web o aplicación web.
- **CSR: Cliente Side Rendering:** La Renderización del lado del cliente es una técnica que envía al navegador una página en blanco y luego mediante JavaScript genera el contenido, en este caso el navegador cliente toma un rol más importante en la creación y representación de la interfaz de usuario. Haciendo que esta técnica sea ideal cuando se tienen muchas partes interactivas en el lado del cliente y en el caso de equipos actuales representa una carga inicial más rápida al enviar únicamente el esqueleto de la web, sin embargo, al tener equipos con hardware reducido o muy antiguos esto se vuelve un dolor de cabeza debido a que se vuelve mucho más lento y en el caso de que el equipo cliente tenga desactivado el JavaScript este directamente no podrá cargar la web.

### Estructura

La estructura de tu web parece ser algo básico, sin embargo cuando se construye mal el HTML el puntaje que te otorgan los motores de búsqueda respecto al SEO también baja, por ende, utilizar los encabezados, secciones, etiquetas de párrafo, elementos a, divs, entre otros elementos, se vuelve algo muy necesario. Por suerte, HTML es un lenguaje muy fácil de aprender y entender por lo que podemos mejorar su estructura y mejorar el SEO de nuestra web.

## Conclusiones

Tener un buen SEO es de suma importancia para promocionar nuestra web, marca personal, negocio o lo que sea que queramos comunicar mediante una página web. En realidad no es algo tan difícil de hacer como hemos visto a lo largo del artículo.

Hoy en día existen frameworks que pueden ayudarnos crear aplicaciones y webs de manera eficiente, bien estructurada y en poco tiempo, un framework versátil es NextJS que puede ser usado para generar muchos tipos de aplicaciones, sin embargo, páginas web estáticas como este blog, pueden ser creadas de manera más eficiente con otros frameworks como Astro, Svelte o similares.
