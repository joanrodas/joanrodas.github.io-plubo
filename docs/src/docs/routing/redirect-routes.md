# Redirect Routes

## Adding Redirects

Redirect routes take 3 parameters:

| Parameter  | Type |
| ------------- | ------------- |
| **Route Path**  | String  |
| **Redirect URL**  | String \| Callable  |
| **Config**  | Array (optional)  |

Example:

```php
$routes[] = new RedirectRoute(
    'city/{city:word}',
    function ($matches) {
        return 'https://www.google.com/search?q=' . $matches['city']; //SAGE 10 example
    },
    array(
        'status' => 302, //Default 301
        'external' => true, //Default false
    )
);
```
## Route path

Like with template Routes, you can use the available syntax for your arguments (if any).

## Redirect URL

The redirect URL can be a string or a callable.

- **String:** The URL where you wish to redirect when accessing the indicated path.
- **Callable:** Function that takes the matches array as a parameter and returns the URL where you wish to redirect (string)

## Available options

- **Status:** Redirect HTTP status code. 301 Permanent redirect by default.
- **External:** Boolean value to indicate if the redirect URL is local or external.
