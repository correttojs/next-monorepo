# Checkly Tests

Replica of Tests hosted on [checkly](https://app.checklyhq.com/).

### The repo consists of:

- Templates: handlebars template test template
- handlebars CodeSnippets
- generated build: executable playwright tests
- handlebars compiler

### Get started

- Install the workspace dependencies

`yarn install`

- Edit the `Templates` files or the `CodeSnippets`

- Run the tests

`yarn test`

### Publish Terraform template to checkly

See https://www.checklyhq.com/docs/integrations/terraform/

- Install Terraform https://www.terraform.io/downloads

```
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

- Add `TF_VAR_checkly_api_key=cu_xxx` and `TF_VAR_checkly_account_id=xxx`
- Publish to checkly

`yarn terraform`
