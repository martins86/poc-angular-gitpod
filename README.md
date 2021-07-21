## Poc Parse Data Api

### Subindo o novo projeto

```
cd parse-data-api
ng serve --host 0.0.0.0 --disable-host-check
```

<br>

- Comandos <br />

```
ng g m feature/data-list --routing
ng g c feature/data-list
```
```
ng g interface feature/data-list/shrared/models/data-list --type=model
```

```
ng g service feature/data-list/shrared/services/data-list
```

- Libs <br />

- https://www.npmjs.com/package/stubby

```
npm i stubby
```