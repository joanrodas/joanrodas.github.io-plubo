# Blade templates and directives

Plubo uses ``Jenssegers\Blade`` to be able to use Blade templates and directives in your admin pages, emails, shortcodes or custom routes.

In a shortcode, you could write something like this:
```php
return $this->blade->template('test-template', ['param1' => $some_param]);
```

## Views

Blade views are located in ``resources/views``. In the example above, you would need a template ``resources/views/test-template.blade.php``.


## Directives

You can create custom Blade directives in ``resources/directives``.

Plubo also includes some useful directives.
