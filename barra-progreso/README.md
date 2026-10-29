# CustomProgressBarComponent

Componente de barra de progreso personalizable usando Bootstrap 5 y propiedades @Input() de Angular.

## Propiedades de entrada (@Input)

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| value | number | 0 | Valor de la barra (0-100) |
| color | string | 'primary' | Color de Bootstrap |
| striped | boolean | false | Estilo rayado |
| animated | boolean | false | Rayas animadas |
| showText | boolean | false | Muestra el porcentaje dentro de la barra |

## Uso

```html
<app-custom-progress-bar [value]="75" [color]="'success'" [striped]="true" [showText]="true"></app-custom-progress-bar>
```
