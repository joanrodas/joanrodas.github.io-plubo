# Action Routes

## Adding action routes

Action routes take 3 parameters:

| Parameter  | Type |
| ------------- | ------------- |
| **Route Path**  | String  |
| **Action**  | Callable  |
| **Config**  | Array (optional)  |

Example:

```php
$routes[] = new ActionRoute(
    'sendEmail/{user_id:number}',
    function ($matches) {
        $user = get_user_by('ID', $matches['user_id']);
        $to = $user->user_email;
        $subject = 'Hello world';
        $message = 'Sent with Plubo Routes!';
        $headers = ['Content-Type: text/html; charset=UTF-8'];
        wp_mail($to, $subject, $message, $headers);
    }
);
```

## Route path

Like with template Routes, you can use the available syntax for your arguments (if any).

## Action

The action to execute.
