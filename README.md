## Poc Angular GitPod - Upload Change and Donwload CSV File

[![Open in Gitpod][open-gitpod-img]][open-gitpod-url]

<br>
<br>

https://martins86.github.io/poc-angular-gitpod/upload-change-donwload-csv/dist/upload-change-donwload-csv/

<br>
<br>

## Gerando a branch

```
git checkout -b upload-change-donwload-csv
```

<br>
<br>

## Gerando um o projeto

```
ng new upload-change-donwload-csv --routing=true --strict=true --style=scss
```

<br>
<br>

## Adicionando angular material

```
ng add @angular/material
```

<br>
<br>

## Adicionando bootstrap

```
npm install bootstrap
```

<br>
<br>

## Subindo o projeto

```
ng serve --host 0.0.0.0 --disable-host-check
```

<br>
<br>

## Criando compoentes

```
ng g m features --routing
ng g m features/upload --routing
ng g c features/upload

ng g m features/upload/components/input-upload
ng g c features/upload/components/input-upload

ng g m features/upload/components/table
ng g c features/upload/components/table

ng g interface features/upload/models/csv-type-a --type=model

ng g m shared/layout/top-bar
ng g c shared/layout/top-bar
```

<br>
<br>


## Build

```
ng build --aot --base-href './' --deploy-url './'
```

<br>
<br>


[open-gitpod-img]: https://gitpod.io/button/open-in-gitpod.svg
[open-gitpod-url]: https://www.gitpod.io/#https://github.com/martins86/poc-angular-gitpod