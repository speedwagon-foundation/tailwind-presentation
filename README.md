# WDP3 Projekt

* Thema: Utility Based CSS / Tailwind CSS
* Team: Andreas Zauner, Lukas Hofwimmer 
* Zeitaufwand: 1h aktuell

## Beschreibung und Notizen

Utility Based CSS ist ein Design-Prinzip nach welchem jede CSS Property in eine eigene Klasse gekapselt wird. So bietet TailwindCSS beispielsweise `text-xs` für sehr kleinen Text und `text-9xl` für sehr großen Text an. Dadurch kann [bikeshedding](https://levelup.gitconnected.com/bikeshedding-in-software-development-b800fa97ddcd) effektiv vermieden werden. Der bekannteste Vertreter dieser Gattung ist das bereits erwähnte TailwindCSS.

Aufgrund einer prädisponierten Begeisterung für TailwindCSS war das Projekt-Team sozusagen prädestiniert für dieses Thema.

### Notes

talk about PurgeCSS (The Good)

## Outline

* Introduction:
    * Utility based CSS はなにですか
    * Tailwind origins
* Classic CSS vs. Tailwind
    * First examples
    * (dis)advantage?
* Inline vs. Tailwind, Or Why not just inline CSS?      
    * "Isnt tailwind just inline css???" 
* Sensical Defaults (Colors, Shadows)
    * Settings 
    * https://tailwindcss.com/docs/configuration
    * https://tailwindcss.com/docs/dark-mode
* What about Responsive Design?
    * Showcase responsive features 
    * https://tailwindcss.com/docs/responsive-design
* Configuration
    * Development setup
    * Building  (just in time mode)
* Our opinion 😎

## Code Examples

### Introduction - Utility based CSS は何ですか。

Was ist Utility based CSS?
Utility

mit tailwind sind 99% aller CSS properties abgedeckt

https://tailwindcss.com/docs/installation
```html
<h1 class="text-3xl font-bold underline">
 Hello world!
</h1>
```

Tailwind vs. inline css
https://tailwindcss.com/docs/utility-first

https://tailwindcss.com/docs/hover-focus-and-other-states
<button class="md:bg-fuchsia-600 hover:bg-violet-400">
  Save changes
</button>

Sensical Defaults
https://tailwindcss.com/docs/customizing-colors
https://tailwindcss.com/docs/customizing-spacing
https://tailwindcss.com/docs/screens
ur-sexy shadows https://tailwindcss.com/docs/drop-shadow

Responsive Design
https://tailwindcss.com/docs/responsive-design
relativ quick eigentlich. nur erklären, dass die breakpoints/media queries über : prefix gehandhabt wird.
https://tailwindcss.com/docs/screen-readers
über accessibility reden https://tailwindcss.com/docs/screen-readers
über dark mode reden

Development setup
- Tailwind wird mittels npm package installiert.
- Von da weg setup auf tailwindcss.com befehlen
- Wird tailwind nicht sehr groß, wenn alle prefixes zur verfügung stehen sollen?
- Nein, weil tailwind automatisch neu kompiliert wird, sodass die css file, die dann im browser geladen wird, nur die benötigten prefixes enthält.

Our opinion😎
- CSS ist genau dort, wo es sich strukturell auch befindet bzw. wo es gebraucht wird.
- Man hat auf Anhieb ein wesentlich besseres Verständniss, wie die das gestylte HTML im Browser aussehen wird.
- die defaults sind legit einfach ultra geil
- keine .unnötige-komische-abstrakte-willkürliche-tyrannische-unverständliche CSS Class names (jedes wort auf presentation per click nacheinander einbleden)
- file sizes ultra klein
