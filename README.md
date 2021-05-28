## Poc Template Angular GitPod

[![Open in Gitpod][open-gitpod-img]][open-gitpod-url]

<br>
<br>

## Gerando um novo projeto web

```
ng new template-guide --routing=true --strict=true --style=scss
```
<br>
<br>

## Lista

```
ng g m features --routing

ng g m features/people-page --routing
ng g c features/people-page
ng g class features/people-page/shared/models/data-person --type=model --skip-tests
ng g s features/people-page/shared/services/person

ng g m features/product-page --routing
ng g c features/product-page
ng g class features/product-page/shared/models/data-product --type=model --skip-tests
ng g s features/product-page/shared/services/product

ng g m features/login-page --routing
ng g c features/login-page

ng g m features/register-page --routing
ng g c features/register-page

ng g class core/models/data-user-session --type=model --skip-tests
ng g s core/auth/auth

```

[open-gitpod-img]: https://gitpod.io/button/open-in-gitpod.svg
[open-gitpod-url]: https://www.gitpod.io/#https://github.com/martins86/poc-angular-gitpod
