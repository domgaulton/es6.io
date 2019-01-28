# System JS

* Means we don't need to run npm packages - much quicker prototype / test case solution
* `npm init` then `npm install browser-sync`
* Add following script to package.json

```json
"server": "browser-sync start --directory --server  --files '*.js, *.html, *.css'"
```

* Add this to index.html file
```html
<script src="https://jspm.io/system@0.19.js"></script>
<script>
  System.config({ transpiler: 'babel' });
  System.import('./main.js');
</script>
```

