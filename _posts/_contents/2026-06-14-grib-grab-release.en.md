# I Released My First Game!

> This is a ChatGPT translation that was not properly verified by any human being.

Before reading this, go play [the actual game!!!!](/grib-grab)

{% include instagram-post.html url="https://www.instagram.com/p/DZPqM-viCxk/" %}

## My gaming background

For a very long time I thought I wanted to make games. When I was just learning programming, I thought it was the pinnacle of a programmer's career. It is incredibly cool: you have some art, buttons, interactivity, everything moves.

Of course, once you start learning to program, it turns out that all your programs are somehow console apps. Frameworks, graphical wrappers, and engines are very hard for beginners, so for a long time I did not really try game programming at all.

I wrote my first game-like project somewhere around 11th grade. I wanted to generalize Dual, a game I played with my best friend Petya. I wrote a client-server app over sockets using Python and pygame. Petya drew a few textures, and we got a hilarious desktop version. My idea was that you could play it by creating a room on a local network.

It turned out that running a game on someone else's computer is... hard. I found some packager that was supposed to generate an executable file with the game, but those tools worked terribly. I think I managed to make the game run on Windows and Linux, because I could test those on computers at home. Petya had a MacBook, nothing worked for him, and I abandoned the project.

![](/images/grib-grab-release-2.png)

By the way, with the arrival of neural networks, I rewrote the whole thing in TypeScript in one day, and now the solo mode can be played on the web. It may also still be possible to run the server locally, but I have not tested it. Anyway, the link is [here](https://kik0s.github.io/DfVP).

### Graphics

Once I got to university, I realized that I liked the concept of game programming, but the industry itself seemed kind of insane. People get laid off, crunch is huge, and on average the pay is bad. Still, there are serious and technically interesting problems there. All that 3D math is very cool!

So in my second year I decided to make a small [3D engine](https://kik0s.github.io/3d-framework) of my own, to combine my new linear algebra knowledge with something that would actually resemble a 3D game. In short, I made something very strange: a 3D engine entirely on the CPU, drawing the screen pixel by pixel without using shaders at all. They were under the hood of some small library I used, but I only used the `setColor(x,y,color)` primitive myself.

![](/images/grib-grab-release-1.png)

I really enjoyed digging into that kind of stuff, and wanted to try something else. It turned out that at FCS there were not really any courses in a "visual" direction. I tried taking some course from the Harvard CS50 set that was supposed to be an introduction to game development. It was interesting, and I made several projects, but I did not like that they all came with a lot of default code, which meant I understood rather poorly what was actually happening. Like, making pictures move in a framework is not hard, but how does the framework itself work?

I watched some computer vision courses and related things, read a bit about OpenGL. I had no systematic knowledge at all, but I wanted to understand how all these visual systems work. So I went to a master's program in AI & Advanced Visual Computing. In theory, it was the optimal trajectory for figuring out what was under the hood. I will not rant about Ecole Polytechnique again here, but it was not worth it; in short, I never became an expert.

### Web

In parallel with all these graphics adventures, I worked as a software engineer, because I had to feed myself. Mostly I did backend, but in general I managed to do all kinds of things. In particular, I worked on software in the browser, and realized that the browser API makes it much easier to share software than assembling binaries that then have to be somehow sent to another operating system. As for downsides -- I do not know, I thought about it and did not find any for my case. Well, there was one: web code is written in JavaScript. But it turns out wasm, WebGL, and Emscripten have been solving that for a long time. You write in C++, and then it somehow builds itself from there.

And I thought: surely it is possible to make some framework for myself that builds both locally and for the web? Then I would be able to share my little game without any problems, while developing normally, on my own framework, with an understanding of the results and my own tooling. Yes, you cannot write AAA games on this, but by that point I had realized that this was not a career choice, but a hobby choice.

In short, I poked around, assembled a prototype on OpenGL / WebGL, and it seemed to work. I came up with my own ECS, which turned out quite reasonable and pleasant. I have an idea for a game I would like to make, but it turned out to be fairly large-scale, and after the first prototypes I realized I could not handle working on it.

## Mushrooms

At some point Lucy put together a funny art prototype for an Instagram portfolio: a little game with mushrooms where you have to catch mushrooms. And I thought: actually, this is very simple code; surely I should be able to make it.

{% include carousel.html id="grib-grab-prototype" images="/images/grib-grab-release-4.mp4" alt="Grib Grab prototype" %}

I decided it had to be a _proper_ game. I wanted to go through every stage of creation: test it properly, experiment, come up with some interesting twist, the whole checklist.

So I went off to prototype.

### Gameplay

I spent a long time thinking about what to build the prototype around. Obviously, the core process had to be simple: mushrooms fall, you move the hero and catch them. A few rectangles with images drawn on top. A counter too. If a mushroom falls -- that's it, game over.

All good, but very straightforward. Just catch everything you see.

Lucy came up with the concept of potions, which I later renamed recipes. The idea is that you need to catch exactly as many mushrooms of a specific type as the recipe asks for. This immediately adds some depth to the game, because you have to let some mushrooms pass so you do not overfill the basket.

A prototype of such a game can be assembled in half a day when the ECS, rendering utilities, and web build are already written. Oh, and a text-rendering utility too -- freetype is such a terrifying terror that at first it was easier to insert digits as images.

{% include carousel.html id="grib-grab-gameplay" images="/images/grib-grab-release-5.mp4" alt="Grib Grab gameplay" %}

At that point you can basically stop, publish, and write yet another tutorial for Habr. But I wanted a _proper_ game. Maybe small and simple, but proper.

### Improving forever

It quickly became clear that if you do not need to catch certain mushrooms because they would spoil the recipe, then it is also bad to let them fall. We decided to add shooting, so you could shoot down the mushrooms you were not going to collect. Falling to the ground, accordingly, would take away lives.

That was better, but it was still impossible to play. Mushrooms spawned through my randomizer, and it could happily spawn mushrooms in different parts of the screen at the same time -- and of course you cannot catch them all! You could, of course, replay the level with knowledge of the random sequence and shoot one of the two... but that is all hacks.

The problem is simple: you can break mushrooms from far away and ahead of time with shots. But you can only catch what is right now on your level. I wanted it to be possible to catch some mushroom in advance. That is how the trap mechanic was born.

In general, at that point the game was finished from a gameplay perspective. It is a very simple game. We went off to try it and tested, tested, and tested until we were blue in the face.

![](/images/grib-grab-release-6.jpg)

Off the top of my head, the following had to be added:
- To make the game playable on a phone, I already had a homemade joystick and buttons. It turned out they were impossible to play with because they were too small, so I had to move them to the web level and add big emoji buttons.
- Since there are buttons and there is the web, it would be good to write everywhere which button corresponds to what -- and ideally allow changing key bindings too.
- To have key bindings, you need a settings menu.
- To have a settings menu, you need a main menu and a pause menu.
- When mushrooms appear, break, fall, get eaten, and so on, you need to add little shakes and particles; otherwise there is no vibe.
- We needed to add some audio track; otherwise there is no vibe.
- And since there is audio, we needed a volume slider.
- Of course we needed a tutorial.
- And if there is a tutorial, we need browser cache so it does not show up every time the game starts.
- By the way, completed levels and endless-mode results also need to be cached.
- Speaking of endless mode, we need to add result sharing to get the Wordle effect.
- And to make endless mode interesting, while still letting friends compete with each other, the random seed needs to depend on the calendar day.

And I am omitting things like calibrating numeric parameters: movement, shooting, speeds, level difficulties.

At some point we realized that shooting bullets was strange, so we came up with shooting bats. Then a very sensible limitation appeared on its own: there are only three available bats total, for both traps and shots. Recharge timers were added for them, and they started returning to the player.

{% include carousel.html id="grib-grab-gameplay" images="/images/grib-grab-release-7.mp4" alt="Grib Grab gameplay" %}

Around the same time we realized that three lives is a very strange constraint if there is already a recipe, where you are already balancing between limitations. After thinking a bit, we realized these are simply two different modes: an easier one, without recipes and with lives, and a harder one, with recipes and without lives.

There are probably another dozen potential decisions like this, but we decided to stop with what we have now.

### Active development

Initially, I spent a lot of time on the engine itself, making various cool things just to leave them in a drawer. Usually I had one weekend every two weeks when I could sit down seriously for about four hours and write some code. That probably lasted around half a year in total, with long breaks for various side quests.

At some point, when the core gameplay was ready and we had decided it would be a game about catching mushrooms, it was time for polish -- which, as you can see from the previous section, eats 90% of the effort. My enthusiasm would not have been nearly enough, because you have to redo absolutely everything in circles about ten times. Fortunately, at that moment agentic AI happened, and I got Pro Codex. I stopped writing code and started prompting: I rewrote half the code from draft repositories into a normal engine/game separation, and built all the small features and improvements from the lists above. It was a gorgeous experience, because almost all the necessary actions are completely obvious but manual -- so you can think during the day about what needs to be done, and then with one request set the agent to work while you watch a movie with your wife in the evening.

![](/images/grib-grab-release-3.png)

So, here it is! I made my first _proper_ game, and I am very happy with it. I hope that one day I will finish other, cooler projects on the same engine.

![](/images/grib-grab-release-8.png)
