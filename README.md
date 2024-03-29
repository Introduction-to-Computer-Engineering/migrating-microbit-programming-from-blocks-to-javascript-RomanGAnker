# CPE 1040 - Introduction to Computer Engeneering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

### 1. Summary

This assignment asks you to go through a [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, and write parallel programs using the JavaScript equivalent of the code in the course modules. This assignment is submitted through Github.

### 2. Requirements

#### 2.1 Section programs

1. The CS course is broken down into thematic sections. There are 5 sections + 1 midterm project + 5 sections + final project. Each section has 4 parts. You want the _Activity_ part, which contains the section's CS material and Blocks.

2. You need to write a _working_ JavaScript (JS) program for the micro:bit for each of these sections/projects, for a total of 12.  

3. For the non-project sections, you are required to use the JS equivalent of the material from the section. _**Note:** For these programs, you are allowed to look at the JS translation of Blocks programs._

4. For the midterm project, you are required to use the JS equivalent of the material from all 5 preceding sections.  _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._ (An aside: if you don't know how to read a statement like "you are not allowed to", the intended and preferred interpretation is "you can do whatever you want and won't be penalized by me, but, if you want to learn most effectively, I suggest that you do not resort to...".)

5. For the final project, you are required to use the JS equivalent of the material from all 10 preceding non-project sections. _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._

#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags

_**Note:** Add your program descriptions below._

### v0.1

v.01 is a simple JavaScript program that displays a character doing Jumping Jacks using LED lights. Activity_1.js **

### v0.2

v.02 is a JavaScript program that uses the "B" button to initialize the second movement of the jumping jack action using LED lights. Activity_2.js

### v0.3
v0.3 Is a small game that uses RNG to determine who wins, a player wins after getting a score of 2. Button AB will display current score. Activity_3.js

### v0.4
v0.4 Is an alternate version of Rock, Paper, Scissors called "Bunny, Carrot, Gun". Shaking the Microbit will initialize one of the 3 potential options. Activity_4.js

### v0.5
v0.5 Utilizes plot points and LED lights to create a moving sprite across the Microbit. Can be a valuable asset in creating a game. Activity_5.js

### v0.6 
v0.6 (MiniProject) is the early devlopment of a game where the player has to dodge LED lights to win. MidtermProject.js

## v0.7
V0.7 is an activity where pressing "A" displays random LED points on the Microbit. Pressing "B" uses RNG to display either a happy or sad face. Activity_7.js

## v0.8
v0.8 Uses the "A" and "B" button to simulate the flipping of a coin. Activity_8.js

## v0.9
v0.9 is an activity that converts decimals into simple Binary numbers. Activity_9.js

## v1.0
v1.0 is an activity that used Radio to communicate between Microbit devices. Pressing either "A" or "B" displays LED on the receiving Microbits display. Activity_10.js

## 1.1
v1.1 Utilizes arrays, RNG and "for" functions to randomly display LED lights on the Microbit screen using the input of "A". Activity_11.js

## v1.2 
v1.2 is a completed game where the player uses the "A" and "B" buttons to move a sprite in order to dodge LED lights. Surviving for 20 seconds makes the player win. The player sprite has an HP pool of 6 and dies when they run out. FinalProject.js

## Designs


Designing game framework: 
  1. Player must avoid LED sprites with a predictable path but travel very fast and awkwardly. (Game was too boring)
  2.  LED Sprite that travels across the top of the Microbit shooting sprites downward at a player sprite who can only move horizontally. (Ended up being too buggy and relatively boring).
  3. Player Sprite that needs to avoid enemy LED sprites (Player can move on X and Y axis) (Could not consistenly and smoothly implement X and Y movement).
  4. Player sprites that move predictably around Microbit, but player can only move on X axis. (I decided adding an RNG factor would be more engaging)
  5. Player sprite that can move along X access and enemy sprites that move using RNG directions at a relatively quick speed. (Ultimately ended up using this concept and decided to start developing the framework around this idea)
  
  Polishing:
  1. I first needed to add a Health pool and a Game Over screen when the player was eliminated.
  2. I edited the movement of the different sprites so that they were not too fast or too slow. 
  3. I added a winning variable if the player survived for 20 seconds.
  4. I had to alter the winning variable so that it would not display "Winner" even if the player lost. 
  5. Lastly, I made the Winning screen more engaging so the player knew to press "A+B" to start a new game. 
  
   


### Midterm project

_**Note:** My Midterm Project is a simple program that illustrates the framework around what my final project will be. It contains many of the concepts I intend to use on my final project, but not on the scale that I intend my final project to be. 

#### Goal

To make an interactive game that allows the player to dodge LED lights to survive. 

#### Design process

** Struggles for Midterm Project: 
1. Plotted LED light but could not get it to collide with my sprite.
2. Difficulty creating a fluid control system of the player sprite
3. Enemy sprite is traveling way too fast to avoid. 
4. Player sprite moves very sporatically.
5. Struggling with ending functions properly using {}.
#### JS Constructs & objects

**Javascript code I utilized in my midterm project were: LED, button input, Strings, collision, game sprites, forever and on start functions, and pauses. 

### Final project

**My Final Project is a game where the player must avoid contact with other LED sprites. If the player is hit, they will lose one HP. 
Pressing "A" makes the player sprite move left horizontally and pressing "B" makes the player sprite move right horizontally. Pressing "A+B" resets the game. Some aspects of JavaScript I used to code this game were loops, basic functions, game functions, strings, sprites, score, LEDs and a few others. 
