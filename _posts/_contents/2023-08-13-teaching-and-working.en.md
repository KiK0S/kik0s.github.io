> This is a ChatGPT translation that was not properly verified by any human being.

> Half-finished lemon tea
>
> Decorates a dirty desk
>
> Yeah, I'm worth a couple million
>
> Soon I'll be worth a hundred.
>
>
>
> **(c) LSP, "10 Little Negroes"**

<!--more-->

I remember a time when there was no money at all. Then I became a promising competitive programmer, and it turned out that smart schoolkids get showered with grants and prizes. It's a relatively cheap (because there aren’t that many olympiad winners) and very news-friendly way to show altruism. So thank you, grandpa, for an inefficient reward system.

I received 150 thousand rubles for one national olympiad. For another one a year later, 500 thousand. At HSE I was entitled to the Moscow stipend of 6.5 thousand a month and a Yandex stipend of 20 thousand a month. And that was even after I turned down a presidential grant of similar size that would have forced me to work in Russia for a couple more years after graduation. True, the stipends only lasted for the first year; after that I was left with the default HSE stipend of 1,800 rubles.

So I entered university with enough money for a couple of years ahead and a “passive income” from stipends. Around the same time I stopped taking money from my parents — although I still didn’t chip in for groceries or utilities.

When we arrived at HSE on September 1 as freshmen, Uncle Zhenya greeted us with the words “please don’t rush to start working.” He warned us that the first years are very tough, studying would be hard, and job offers would appear soon enough. I decided then that I’d postpone thinking about jobs and internships at least until the end of first year.

And I immediately started teaching. Teaching doesn’t count as a job if it’s not full-time, right?

![](/images/working-and-teaching-1.jpg)
*Home–school–work–home*

---

## From one generation to the next

My olympiad success had exactly one reason: great clubs where it was challenging, useful, and fun. The classes were held in different places but roughly by the same group of instructors. And that group gets approached right after graduation.

This is because the older you get, the worse you probably understand school olympiad programming. University competitions are very different in format from the school ones, and in university and at work programming is something else entirely: an olympiad contestant writes 300 lines in 30 minutes, whereas at work even 100 lines in eight hours might be considered suspiciously high and harmful productivity. Competitive code is constantly being written; production code is constantly being read. Priorities diverge.

After graduation you not only retrain from “olympiad-style” to “normal” programming — you also just plain fall behind. Informatics olympiads progress incredibly fast: advanced topics from five years ago are now considered classics. Tasks from the international olympiad in the 2000s can easily be solved by today’s national winners, who are still far from the international level.

That’s why a noticeable chunk of teachers are students who still remember what they crammed for the nationals.

So I started teaching in Tinkoff Generation from my first year, building the A' parallel group from scratch. It really was like laying down tracks in front of a moving train — every week we prepared a new lecture and a problem set. We had to design exams, answer students’ “Why doesn’t my code work?” questions, and give them emotional support before important competitions — a lot of things, really.

![](/images/working-and-teaching-2.jpg)
*Groundhog Week*

I was genuinely surprised how many things have to be done and discussed behind the scenes — the actual class takes less time and effort than preparing materials and providing tech support. It’s a separate challenge to go grade exams in the middle of your own test week. And at least a couple of times a day one of the students asks you to review their solution and help with a problem. You have no idea how much terrible code I read on a regular basis! But the workload was flexible, so it combined well with my studies.

---

## Internship

By second year I decided to move out from my parents — I didn’t have my own room at home, and during lockdown everyone was going nuts. I figured it would make sense to get an internship beforehand — to earn some money and polish my résumé.

Initially I wanted to intern in the summer but became a victim of COVID. As a true AMI student, I was firmly convinced that I could always get a summer internship at Yandex. But Yandex froze hiring when COVID started, and I got rejected after about the second interview. Toward summer they partially unfroze it. I tried again — and got rejected again because they found someone else for the remaining 1.5 positions. So I ended up without a summer internship.

In the middle of summer I tried asking whether anyone at T was looking for interns. They told me there was a position that fit me perfectly and sent me a posting with “javascript” and “php” in the description. “Hold on, there must be a terrible mistake,” I wrote, “I only know my C plus plus.” They confidently replied that the team had already seen my résumé and said I should come interview. So before the interview I read a bit about JS and wondered how I would wiggle out of the fact that I knew nothing about full-stack development.

It turned out that the posting copied from the internal portal was nonsense (haha, classic), and the advertising technologies department was actually looking for a C++ intern to build a high-load backend. During the interview we just chatted, they gave me some simple question to test my language knowledge, we discussed bit operations, and made a rough checklist of what I know and don’t know. Basically, I knew nothing :)). At best, I had heard about things.

They accepted me (mostly, I think, because of strong references from educational projects). That’s how my two years as a developer at T started.

Appreciate the avalanche of this story — without teaching I wouldn’t have found the internship, without the nationals I wouldn’t have gotten into teaching, without the clubs I wouldn’t have won the nationals, and the clubs were opened to me by very specific teachers when I was about 15, purely by chance.

In junior and intern positions you experience roughly the same thing — you understand nothing, the tasks can be as simple as you like, and you still spend most of your time trying to figure out what’s going on and being incredibly clueless.

![](/images/working-and-teaching-3.jpg)

I didn’t get the simplest project for that goal because our services were used by a bunch of different departments, each in their own way, and everything was fairly tangled. Service A could pull data from service B, call Lua scripts, some other service ran scripts in Perl, all of that wrapped in some kind of protobuf-based code generation, and even launching the code was a nontrivial task if all you’d done before was `g++ main.cpp -o main`.

I remember spending two weeks on the first silly task like “pass this config parameter through,” constantly bugging my mentor and understanding nothing. Well, that’s life. After that I mostly handled various backlog chores. Sometimes interns are brought in for a specific three-month project, but I was invited more for a three-month cleanup of minor tasks. And after the internship they invited me on staff!

As a student, part-time work was a cool opportunity to gradually level up in development. My team had two strong seniors you could learn from. They mentored me — I could ping them whenever I got stuck, describe the problem, and we would solve it together. There were lots of people at work ready to answer questions as well. So the growth was relatively fast.

![](/images/working-and-teaching-4.jpg)
*The chill we deserved*

Teaching may be globally pointless, but it clearly helps your students — if not globally, then at least in achieving their short-term goals. Plus, in teaching you get very transparent feedback: either people will scold you or they’ll thank you. And I actually enjoy explaining things and talking to students. Looks like I’ll be running seminars at HSE in the fall.

---

## Job hunting in emigration

During the first two weeks after the war began I moved to Georgia, and I had to do something. Keeping my income in rubles was unreasonable. So I started looking for a new job and told my team lead that I’d be leaving soon.

In that regard I was in a terribly unlucky spot — I had a year and a half of experience that didn’t match the market well. I wrote C++ backends, but backends are usually written in, say, Go. C++ is used for games or embedded systems, and I wasn’t doing that anymore. And I was still a student without a degree.

I posted about my job search among friends, on LinkedIn, on Vas3k Club, and started applying to openings. Conversion from applications was insanely low. There were some interviews, but it all went so-so. Even if I did fine, they would still turn me down because my experience didn’t match the opening or there just wasn’t enough of it. The posts worked pretty well — I was ready to accept any offer at that point and got two via the posts: to parse Twitter data for one crypto startup and to build infrastructure in a crypto HFT with some friends. (*Note: High Frequency Trading is automated trading on an exchange.*)

I remember being a step away from an offer at EPAM, where they grilled me on C++ for two hours, assessed me as a mid-level, and at the end of the process added some extra interview where literally no one showed up. I remember sitting in their branded Zoom room with a fifteen-minute timer counting down when I was allowed to leave the interview that never happened. Afterwards I said I was no longer interested: it was wildly unpleasant that during hiring the company behaved as if working for them were such an honor.

![](/images/working-and-teaching-6.jpg)

So I went to my friends who were running a chill HFT. I worked there for about four months. I did some infrastructure development in Rust to pipe exchange data where it needed to go. Typically in HFT you do some unexciting data shuffling, work 12-hour days, and get a ton of money. In our case we depended heavily on the market situation and didn’t have that many tasks. And when I joined, the crypto market had calmed down, and we started earning little. So in our HFT I didn’t work that much, but I didn’t earn much either.

When it became clear that I was doing something not very fun for not very much money, I re-opened the job hunt. Almost everyone courting me was another HFT, because I’m an olympiad guy — they usually do well there. I went to a couple of interviews but kept running into bad processes everywhere. At one place they invited me, and only at the technical interview it turned out the role wasn’t a full-time position but a trainee program I was overqualified for. Somewhere else they for some reason assumed I was a senior, which I wasn’t, and the interviewer tore me apart so badly that I nearly cried after the call. And it wasn’t my fault that no one told me the expected skill level (I wouldn’t go interview for a senior HFT role on purpose, I’m not suicidal); it was his fault for boosting his ego at my expense when I couldn’t solve tasks I never intended to tackle.

At the same time I interviewed normally at some product companies, but they ghosted me because I didn’t have a diploma yet — “come back when you graduate!”

Eventually a startup found me through acquaintances, and that’s where I still work. And I actually kind of like the startup format — one of the key metrics is development speed, which means you can do more different tasks per unit time. The technical problems are different too: how do you solve a product issue _well enough_ under tight deadlines?

No matter how fun it was, by the end of the third year of my career I was generally tired of working.

---

## Complaining about capitalism

> I'm good at working smarter
>
> But I'm even better at not working at all.
>
> **(c) Ian McConnell, “Lazy”**

The important thing about work is that it takes a ridiculously huge amount of time. If you spend that much time working, at some point it stops mattering how much you can earn per hour — you’d rather keep that hour for yourself.

Sure, you can work for yourself — but that brings even more trouble separating life from work.

And salaried employment doesn’t follow supply and demand. People can’t choose not to work because then they’d have nothing to eat, so business gets to set the rules. Like a default 40-hour workweek, even though everyone would be better off if we all worked effectively for 20–30 hours and went about our lives.

Workers, in turn, hustle the employer however they can by doing nothing. The overwhelming majority of people on the job market have negative productivity — they provide no value, do their work poorly, and you constantly have to finish things after them. They take three-hour lunches, ignore DMs during work hours, miss deadlines. Often the cost of the chair they’re sitting on is higher than the profit from their work.

So usually, if you simply do your job well, you’re already a 2x employee. If you do it with enthusiasm, you’re 10x. Unfortunately business won’t pay you 10x — it counts your years of experience, waits for the next quarter to update your contract, and so on. And business doesn’t want to create a huge gap between the 10x folks and workers with negative productivity, so as not to crank up tension inside the company. Everyone is comfortable when there are roles defined by the market, and the only thing your quality impacts is how fast you move up that ladder. And of course there’s a role beyond which there’s basically nowhere else to grow.

![](/images/working-and-teaching-7.jpg)

I think it would make more sense to call the career ladder a career escalator. You can train your skills and run up it faster, but in general you can do nothing at all and it will still take you to the required floor eventually, just on years of experience. The hardest part is not to pick the wrong escalator that leads somewhere useless.

As a diligent worker, I don’t like this system — it’s not profitable to work efficiently because you can work inefficiently for the same money. Career growth is slow and, even though it depends on how engaged you are, you still eventually hit the same ceiling in the medium term. And in any case you sell the company more of your time than you’d like to sell, while no one is willing to buy less.

---

## Cursed IT

IT turned out to be a very funny industry for several reasons.

First, it’s wildly opaque to outsiders. The field is still forming, and most people know nothing about development or computers, so it’s easy to explain to your boss that you’re not playing Dota while working remotely but researching incident causes and improving performance.

Second, demand for specialists turned out to be higher than supply, so even in the CIS they started paying decent money rather than the standard 30 thousand a month. For people from poorer regions that’s a strong enough reason for everyone to suddenly start retraining.

Third, most programming boils down to searching for information online and copy-pasting. That’s almost always enough for micro-level tasks. No one cares about the macro level because business priorities are urgency, not quality.

And we’ve reached a point where IT folks have become a separate social class that everyone wants to join via various boot camps. We change jobs every six months because that’s the most effective way to raise your salary. We generate tons of terrible code, and thanks to self-presentation skills we get the “senior” label without even knowing where UDP is used.

![](/images/working-and-teaching-8.jpg)

Everything is broken:
* Hiring is broken; it evaluates you in the wrong categories. My favorite question is when recruiters ask which version of C++ a candidate uses. If you answer anything but the latest one, you hear a condescending “alright, not a big deal” in response, as if half of the new features hadn’t been in Boost for years.
* Labeling people as seniors, middles, and juniors is broken — the grading is based not on your role and responsibilities but on abstract coolness. Obviously you can handle senior tasks in a place with low engineering culture and fail mid-level tasks in strong teams.
* Reward systems are broken; they can’t keep up with an employee’s growth, and it’s economically more efficient to quit than to stay.

For example, quite a few of my acquaintances take on two full-time jobs so they can work two hours a day at each and earn their six digits. And that’s, like, good for them, but it annoys me to justify that choice to myself every day — that right now I’m doing something interesting for reasonable money instead of five boring cushy gigs for a lot.

---

## About the future

Because you hang out at work every day, work becomes your main activity, kind of the thing you do with your life. In that paradigm it’s incredibly stupid to do something dumb just for the money. You want your work to have meaning and to suit you. Working solely for money is also dumb because it’s like spending half your life preparing for a vacation from that same life. It’s some kind of vicious circle.

It’s hard to think about this while you’re in university because university is the main focus and work is just somewhere nearby. But in reality I’m terrified of the moment when school ends and only work remains. That would mean I’d need a job that isn’t just any job but a good one that fits a much broader set of criteria.

I’m 21 now and earn almost more than my dad with a PhD who works at one of the few superconductors manufacturers. Over the next few years I’ll probably climb the career escalator even higher. And still I won’t be able to make enough to afford housing. Maybe I’ll save up for a down payment, but who would even give me a mortgage now?

So what’s the outlook? Try to work as little as possible for the biggest paycheck doing boring tasks? Start my own startup? Go into academia? Grow a blog/YouTube/TikTok?

Since I was 11, when I first programmed something, I was sure I liked coding and just needed to keep developing in it. And now, ten years later, with solid achievements, a résumé, education, projects — I keep wondering: who do I even want to be when I grow up?

> Text by [Kostya Amelichev](https://instagram.com/i_love_vozpet0s), illustrations by [Lusya Svinarenko](https://instagram.com/deadmarla)
>
> This longread is part of the “After Classes” series where I talk about my student life. In the next chapter I’ll cover trials, police vans, protests, the war, and emigration. You can follow the releases of the longreads on Telegram at [два семь три два пять](https://t.me/blog_27325)
