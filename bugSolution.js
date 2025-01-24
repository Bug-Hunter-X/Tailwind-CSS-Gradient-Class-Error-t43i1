```javascript
// Solution: Adjust class order or add more specific CSS
<div class="rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white"></div>

/* Or add specific CSS rules to override potential conflicts */
.my-gradient {
  background-image: linear-gradient(to right, blue 50%, purple 50%);
}
<div class="my-gradient p-4 text-white rounded-lg shadow-lg"></div>
```