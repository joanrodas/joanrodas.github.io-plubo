---
title: "Plugin structure"
description: "Plubo is a simple and fast WordPress plugin boilerplate with some useful scripts to speed up your development."
lead: "Plubo is a simple and fast WordPress plugin boilerplate with some useful scripts to speed up your development."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "structure"
weight: 200
toc: true
---

## Simple structure

```bash
Your plugin
|
├── admin
│   ├── admin-menus.php
│   ├── admin.php
│   ├── ajax-actions.php
│   ├── crons.php
│   ├── emails.php
│   └── post-actions.php
├── includes
│   ├── activator.php
│   ├── blade.php
│   ├── deactivator.php
│   ├── i18n.php
│   ├── loader.php
│   └── utils.php
├── languages
├── plubo
├── plugin-placeholder.php
├── public
│   ├── api-endpoints.php
│   ├── custom-fields.php
│   ├── custom-post-types.php
│   ├── public.php
│   ├── routes.php
│   ├── shortcodes.php
│   └── taxonomies.php
├── react
│   ├── apps
│   ├── apps.php
├── resources
│   ├── assets
│   │   ├── fonts
│   │   ├── scripts
│   │   └── styles
│   ├── directives
│   └── views
└── uninstall.php
