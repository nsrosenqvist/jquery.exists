jQuery Exists
=============

A jQuery plugin to check whether an element exists and if so run the callback on
the element.

## Installation

```bash
npm install @nsrosenqvist/jquery.exists
```

## Usage

```js
$('.maybe-exists').exists(function() {
    $(this).addClass('definitely-exists');
});

if ($('.maybe-exists').exists()) {
    alert('exists');
}
```

## License
MIT
