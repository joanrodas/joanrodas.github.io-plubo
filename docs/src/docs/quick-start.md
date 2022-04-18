# Quick start

There are 3 options to start using Plubo:

## 1. Using Plubo as a Github template

If you intend to use GitHub for your project, your best option is to create a new repo using Plubo as a template, just clicking the ***Use this template*** button in the repo.

[![Use Template](https://img.shields.io/badge/-Use%20template-2da44e?style=for-the-badge&logo=github)](https://github.com/joanrodas/plubo/generate)

::: tip Info
When using Plubo as a template, a GitHub Action will be executed right after the repo creation, modifying the filenames and classes to match your new project name.<br><br>
The pipeline files will be autoremoved after.
:::

## 2. Install with composer

```bash
composer create-project joanrodas/plubo <PROJECT_NAME>
```

After creating the project, use the command `php plubo add` to add Alpine.js, React and/or environment variables to your project.

## 3. Clone or download the repo manually

You can clone the project repo or download the code manually, although it's not the recommended approach.
