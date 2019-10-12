# MyArcadeScoreBridge
Score and achievement API to allow HTML5 game developers to submit scores, medals, and achievements to WordPress Arcade sites powered by MyArcadePlugin.

This API will allow site owners to collect scores, generate leader boards and run contests. Additionally, it will help game developers to promote their games and make them more popular.

# How to use MyArcadeScoreBridge in your HTML5 / JS games?

There are only two simple steps to follow in order to make your game score and leader board ready.

## Step 1
Import 'myarcadebridge.js' into your game. You can do this in two ways:

### Option 1
Import the JavaScript file directly in your index.html.

```javascript
<script src="myarcadebridge.js"></script>
```

### Option 2
Additionally, you could load the file dynamically.

```javascript
var js = document.createElement('script');
js.type = 'text/javascript';
js.src = 'myarcadebridge.js';
document.body.appendChild(js);
```

## Step 2
Now, you are ready to submit scores and achievements to user sites. The bridge offers you the functions `myarcade_submit_score` and `myarcade_submit_achievement`.

### Submitting scores
Many games submit achieved scores on game over but some of them offer a button to submit scores. You can use any method you like in your game. Just make sure that the scores are submitted only once.

To submit scores just call `myarcade_submit_score` and pass the achieved score to the function.

```javascript
myarcade_submit_score( score );
```

### Submitting medals or achievements
In some games users are able to gain medals or achievements while playing. With MyArcadeScoreBridge you can submit achievements at any during the game play. Therefor use the function `myarcade_submit_achievement`.

In order to submit a medal or achievement you will need to create an achievement object. The object should contain following fields:

* **title:** Achievement/Medal title
* **description:** A detailed description of this achievement
* **score:** Score associated with this achievement
* **icon:** An URL to a badge, trophy for this achievement

#### Example

```javascript
var achievement = {
 title: "Your achievement title",
 description: "Achievement description.",
 score: score,
 icon: "https://site.com/trophy.png"
};

myarcade_submit_achievement( achievement );
```