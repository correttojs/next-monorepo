
terraform {
  required_providers {
    checkly = {
      source  = "checkly/checkly"
      version = "1.4.2"
    }
  }
}

variable "checkly_api_key" {}
variable "checkly_account_id" {}

provider "checkly" {
  api_key    = var.checkly_api_key
  account_id = var.checkly_account_id
}


resource "checkly_check" "browser-check" {
  for_each = fileset("${path.module}/tests", "*")

  name                      = replace(each.key, ".js", "")
  type                      = "BROWSER"
  activated                 = true
  frequency                 = 1440
  use_global_alert_settings = true

  script = file("${path.module}/tests/${each.key}")

}


resource "checkly_snippet" "checkly-snippet" {
  for_each = fileset("${path.module}/tests/snippets", "*")

  name   = replace(each.key, ".js", "")
  script = file("${path.module}/tests/snippets/${each.key}")

}



