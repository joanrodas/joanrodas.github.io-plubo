# Adding Routes

![Plubo Routes](/images/plubo-routes-banner.png)

Plubo uses Plubo Routes, a small library to add custom routes easily, and without having to worry about rewrite rules, rewrite tags, templates or flushing permalinks every time you need to change something.

There are different types of routes:

- Route (template)
- RedirectRoute
- ActionRoute
- PageRoute

## How to add a new route

You can add new routes in ``General > Routes.php``, inside the function ``add_routes``.

```php
add_filter( 'plubo/routes', array($this, 'add_routes') );
public function add_routes( $routes ) {
    //Your routes
    return $routes;
}
```

## Basic routes

Basic routes take 3 parameters:

| Parameter  | Type |
| ------------- | ------------- |
| **Route Path**  | String  |
| **Template file name**  | String \| Callable  |
| **Config**  | Array (optional)  |

Examples:

```php
$routes[] = new Route('clients/list', 'template_name');

//SAGE 10 example
$routes[] = new Route(
    'dashboard/{subpage:slug}',
    function($matches) {
    		$subpage = 'dashboard/' . $matches['subpage'];
    		return locate_template( app('sage.finder')->locate($subpage) );
		},
    [
        'name' => 'my-route'
    ]
  );
```

## Available syntax

You can use the format ***{variable_name:type}*** with any of the available types:

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

::: tip Note
You can also use custom regex patterns using the format ***{variable_name:regex_pattern}*** like ***{author:([a-z0-9-]+)}***
:::

## Custom Actions

Named routes provide a hook to execute your custom actions:

```php
add_action('plubo/route_{route_name}', function($matches) {
    //Do something
});
```
