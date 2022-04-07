---
title: "Quick Start"
description: "Summary of how to start using Plubo."
lead: "Summary of how to start using Plubo."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 110
toc: true
---

## Requirements

- PHP >= 7.3
- Composer
- node >= v12

## Get PLUBO

There are 2 options to start using Plubo:

### 1. As a GitHub template

If you intend to use GitHub for your project, your best option is to create a new repo using this one as a template, just clicking the ***Use this template*** button.

> When using Plubo as a template, a pipeline will be executed right after the repo creation, modifiyng the filenames and classes to match your new project name. The pipeline files will be autoremoved.

### 2. With composer

`composer create-project joanrodas/plubo <PROJECT_NAME>`

> After creating the project, use the command php plubo add to add Alpine.js, React and/or environment variables to your project.
