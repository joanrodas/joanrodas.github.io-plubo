# Advanced Options


## Extra parameters

Sometimes, you need to pass static query vars in your templates. For example, to identify that two differnt routes share some common functionality (like being in a custom dashboard). You can do so with an extra argument in the route config:

```php
'extra_vars' => [
    'lss_page' => 'dashboard'
],
```

## Limiting access to logged in users

By default, routes are accessible by logged in and guest users.

You can limit access to a specific route to logged in users:

```php
'guest' => false,
```

## Limiting access to guests

In case you need a guest only route (like some custom login form), you can add:

```php
'logged_in' => false,
```

## Limiting access by roles

You can limit access by role:

```php
'guest' => false,
'allowed_roles' => 'student',
```

```php
'guest' => false,
'allowed_roles' => array('student', 'teacher'),
```

```php
'guest' => false,
'allowed_roles' => function($matches) {
    if($matches['page_id'] === 4) {
        return array('student', 'teacher');
    }
    return 'administrator';
},
```

::: warning
You need to specify ``'guest' => false`` if you don't want guests to be able to access the route.

You are able to limit access to only guest and users with specific roles in the rare case where you need it.
:::

## Limiting access by capabilities

You can also limit access by capabilities:

```php
'guest' => false,
'allowed_capabilities' => 'publish_posts',
```

```php
'guest' => false,
'allowed_capabilities' => array('publish_posts', 'access_dashboard'),
```

```php
'guest' => false,
'allowed_capabilities' => function($matches) {
    if($matches['page_id'] === 10) {
        return array('publish_posts', 'access_dashboard');
    }
    return 'access_dashboard';
},
```

::: warning
You need to specify ``'guest' => false`` if you don't want guests to be able to access the route.

You are able to limit access to only guest and users with specific capabilities in the rare case where you need it.
:::

## Basic Auth

You can add basic auth (username and password access) to your custom routes.

Although basic auth is usually not the best idea, it can be great for limiting access temporarily to a page for testing purposes.

```php
'basic_auth' => [
    'user1' => 'password1',
    'user2' => 'password2'
],
```
