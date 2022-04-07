---
title: "Plubo Routes"
description: "Creating routes."
lead: "WordPress routes made simple."
date: 2021-10-06T08:49:31+00:00
lastmod: 2021-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "routes"
weight: 630
toc: true
---

✔️  No need to write rewrite rules and tags manually\
✔️  Easily extendable with hooks\
✔️  Ready to use with blade templates

<br/>

## Getting started

`composer require joanrodas/plubo-routes`

> You can also install Plubo Routes as a standalone WordPress plugin, simply downloading the zip and placing it in the plugins folder.

<br/>

## Adding new routes

```php
<?php
use PluboRoutes\PluboRoutesProcessor;
use PluboRoutes\Route;

PluboRoutesProcessor::init();

add_filter('plubo/routes', function($routes) {
  $routes[] = new Route(
    'route_name',
    'example/{city:word}/{id:number}',
    'template_path'
  );
  return $routes;
}); ?>
```

### Available syntax:
* number (numbers only)
* word (a-Z only)
* slug (a valid WordPress slug)
* date (yyyy-mm-dd date)
* year (4 digits)
* month (01-12)
* day (01-31)
* digit (single digit 0-9)
* jwt (JWT token)
* ip (IPv4)

> You can also use custom regex patterns using the format ***{variable_name:regex_patter}*** like ***{author:([a-z0-9-]+)}***

<br/>

## Route Actions

You can execute your custom functions:

```php
<?php add_action('plubo/route_{route_name}', function() {
  #Execute code
}); ?>
```
