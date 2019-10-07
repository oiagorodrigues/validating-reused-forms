# validating-reused-forms

This project is a snippet to validate reusable forms.

## Techs

- [Vue](https://vuejs.org/) - To easily build our app.
- [BootstrapVue](https://bootstrap-vue.js.org/) - To easily build our interfaces.
- [Vuelidate](https://vuelidate.netlify.com/) - To define our validation rules

## WorkFlow

When you clone this project, use `yarn` to install and run it.

After that, you will see an empty list. Just head to the New page and create a person for you.
I have created one form to be used with two component (`New`, `Show`) that use the same strutucture of the form.

All the validations is defined in the Form component, but the logic envolving the form will be handled by the parent calling it.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
