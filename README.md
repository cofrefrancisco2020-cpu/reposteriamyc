# Repostería M y C — sitio web

Sitio estático listo para subir a GitHub y desplegar en Vercel. No requiere instalación, compilación ni claves.

## Abrir localmente

Abre `index.html` en un navegador. Para probarlo como sitio web, ejecuta en esta carpeta:

```powershell
python -m http.server 4173
```

Luego visita `http://127.0.0.1:4173/`.

## Subir a GitHub y Vercel

1. Crea un repositorio nuevo en GitHub.
2. Sube **todo el contenido de `Vercel 1` a la raíz del repositorio**: `index.html`, `styles.css`, `script.js`, `robots.txt`, `brief-marca.md` y la carpeta `assets`.
3. En Vercel, importa ese repositorio. Selecciona **Other** como framework si Vercel lo solicita. Deja vacío el comando de compilación y publica desde la raíz del repositorio.
4. Cuando tengas el dominio definitivo, actualiza en `index.html` la URL canónica y las URL absolutas de Open Graph; agrega un `sitemap.xml` para ese dominio.

## Archivos

- `index.html`: contenido y estructura de la página.
- `styles.css`: identidad visual y diseño adaptable a escritorio y celular.
- `script.js`: menú móvil, animaciones suaves y consulta por WhatsApp.
- `assets/`: solo imágenes finales del sitio y favicon; no contiene subcarpetas.
- `brief-marca.md`: fuentes, decisiones y pendientes de validación.

Todos los botones de pedido y el formulario abren WhatsApp al **+56 9 6163 0944**. El formulario prepara el mensaje en el navegador; no almacena datos.

## Imágenes y revisión antes de publicar

Las cinco fotografías del catálogo son recreaciones con IA basadas en las imágenes de Facebook e Instagram entregadas por el usuario. El pie de limón y los calzones rotos también se recrearon desde publicaciones de Paola en Instagram; las mini tartaletas se muestran explícitamente como una idea para consultar. El retrato de Paola es una interpretación mejorada a partir de una fotografía pequeña.

**Antes de publicar**, muéstrale a Paola el retrato y todas las imágenes generadas para que confirme que representan fielmente su trabajo. En una publicación de Instagram ella destaca que sus fotografías son de productos reales, así que conviene su aprobación para usar estas recreaciones como catálogo. Confirma también la disponibilidad de productos y los datos de contacto. No se inventaron precios, dirección, horario ni testimonios.

La marca visual del encabezado es un tratamiento tipográfico provisional; se puede sustituir por el logo oficial si Paola facilita el archivo original de buena calidad.
