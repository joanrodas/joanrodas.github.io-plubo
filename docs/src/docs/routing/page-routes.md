# Page Routes

## Adding page Routes

With Page Routes, you can modify the slug of an existing WordPress page route, being able to add slashes without using parent pages.

Page routes take 2 parameters:

| Parameter  | Type |
| ------------- | ------------- |
| **Route Path**  | String  |
| **Page ID**  | Int  |

Example:

```php
$routes[] = new PageRoute('about/us', 2);
```
## Route path

Like with template Routes, you can use the available syntax for your arguments (if any).

## Page ID

The page ID where you wish to go if accessing the indicated path.

## Custom Page Routes Plugin

![Custom Page Routes](/images/custom-routes.png)

A simple plugin build on top of Plubo Routes is available to creates custom page routes directly from the WordPress Admin:

[https://github.com/joanrodas/custom-page-routes](https://github.com/joanrodas/custom-page-routes)
