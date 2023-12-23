# Directive in Vue

#### v-bind:attr -> dynamically bind / evaluate what inside the quotes. ("1 \* 3")

```js
<img v-bind:width="200 * 3" /> // which is 600 - as in react width={200 * 3}
```

#### v-if="condition" -> conditionally render the block

```js
<p v-if="true">Hello</p>
```

#### v-else -> conditionally render the block after v-if

```js
<p v-if="false">Hello</p>
<p v-else>Hi</p>
```

#### v-else-if='condition' -> conditionally render the block after v-if

```js
<p v-if="false">Hello</p>
<p v-else-if="true">Hi</p>
```

#### v-on:event='eventhandler' -> pass the evenet handler to elements - can provide fn values to evals (a single expressions)..

```js
<button v-on:click="handleClick">Click Me</button>
// Or use @ and any js evaluation
<button @click="count++" >Click Me</button>
```

# Data (variables) - anything inside the data is accessiable in template via {{}}

```js
<script>
data(){
  return {
    name:'Ali'
  }
}

</script>
<template>
  Hello{{name}}
</template>
```

# computed - object of funtions. a computed properties store the results of the calculation and only to be updated if any reactive dependencies are updated.

```js
<script>
computed: {
  id() {
    return this.name
  }
}

</script>
<template>
  Hello{{name}}
</template>
```

## TIP

```js
<img class='avatar' :class="{'sold-out':true}"/> // condionaly add the class sold-out if ture. so avatar sold-out. if condition is false not applied.
{/* Can add multiple condional key-values.  i.e :class="{'sold-out':true, 'hidden':hidden}"*/}

 // we can also pass an array of condtional calasses
 data(){
    return {
        soldOutClass:'sold-out',
        hidden:'hidden',
        soldOut:false,
        hidden:true
    }
 }
 <img class='avatar' :class="[soldOutClass,hiddenClass]"/>
 {/* OR */}
```
 <img class='avatar' :class="[soldout ? soldOutClass : '',{'hiden':hidden}]"/>
