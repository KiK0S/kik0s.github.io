> This is a ChatGPT translation that was not properly verified by any human being.
>
> Half-drunk lemon tea
>
> Adorns the dirty table
>
> Yeah, sure, I’m worth a couple million
>
> Soon I’ll be worth a hundred.
>
>
>
> **(c) LSP, “Ten Little Indians”**

<!--more-->


I remember very clearly the time when I didn’t have any money. Then I became a promising competitive programmer—and it turned out that smart high-schoolers get showered with grants and scholarships. It’s a relatively cheap (because there aren’t that many olympiad winners) yet great-looking act of altruism for the nightly news. So yeah, thanks grandpa for an inefficient incentive system.

One All-Russian olympiad brought me 150,000 rubles. Another, a year later, paid out 500,000. At HSE I was entitled to the Moscow scholarship of 6.5 thousand a month, plus a Yandex scholarship of 20 thousand a month. And that’s even after I turned down a presidential grant of a comparable size, because it would’ve obligated me to work in Russia for a couple of years after graduation. The scholarships only ran for the first year, though, and then I was back to the default 1,800-ruble HSE stipend.

So I showed up at the university with a couple of years’ worth of savings and the illusion of “passive income” from scholarships. Around the same time I stopped taking money from my parents—although I still wasn’t chipping in for groceries or utilities.

When we arrived at HSE on September 1st as freshmen, Uncle Zhenya greeted us with “please don’t go get a job right away.” He warned us that the first years are brutal, that classes would be hard, and job offers would start coming in soon enough. I decided I’d put internships and part-time jobs off until at least the end of first year.

And then I immediately went to teach. Teaching doesn’t count as work if it isn’t full time, right?

![](/images/working-and-teaching-1.jpg)
*Home–uni–work–home*

---

## Passing it on

There was exactly one reason I was successful in olympiads: great clubs where everything was hard and useful and fun. The clubs ran in different venues but with mostly the same group of instructors. And they were recruiting new instructors right out of graduation.

That’s because the older you get, the worse you usually are at school-level programming olympiads. University competitions are very different in format, and the programming you do at uni or at work is different altogether—a competitive programmer writes 300 lines in 30 minutes, while at work writing 100 lines in eight hours can already be considered “too fast” and harmful. Competitive code is constantly written from scratch; production code is constantly read. Priorities diverge.

Once you graduate you don’t just retrain from “competitive” to “normal”—you also simply fall behind. Informatics olympiads evolve insanely fast: advanced topics from five years ago are “classics” today. Problems from the IOI in the 2000s are now solved with ease by current All-Russian medalists who are still years away from the international stage.

That’s why a noticeable share of instructors are students who still remember what they crammed for the All-Russian.

So in my first year I went to teach at Tinkoff Generation, building the parallel A’ track from scratch. It really was like laying down rails in front of a moving train—we prepared a new lecture and a new set of problems every week. You have to draft exams, answer students’ “Why doesn’t my code work?” questions, keep them emotionally afloat before key contests—there’s a lot going on.

![](/images/working-and-teaching-2.jpg)
*Groundhog Week*

I was honestly shocked by how many things happen offstage. The actual class takes less time and energy than preparing materials and doing tech support. It’s its own challenge to go run exams in the middle of peak midterm season at uni. And at least a couple of times a day some student pings you asking to review their solution and help with a problem. I’ve read so much atrocious code on a regular basis, you wouldn’t believe it. The only reason it all worked is that the workload was flexible, so it paired nicely with studying.

---

## Internship

By second year I decided to move out from my parents—because I didn’t have my own room at home, and lockdown was driving everyone insane. I figured it’d be smart to get an internship first: earn some money, pad the résumé.

I originally wanted to intern in the summer, but became a COVID casualty. Like a proper applied math & informatics student, I was convinced you could always go to Yandex for a summer internship. Yandex froze hiring at the start of COVID, though, and I got rejected after about the second interview. Closer to summer they partially thawed hiring. I tried again and got rejected again because someone else grabbed the one and a half slots that opened up. So there went my summer internship.

Mid-summer I asked around whether anyone at Tinkoff was looking for interns. They told me there was an opening I was perfect for and sent over a listing full of “JavaScript” and “PHP.” “Hold on, there’s been a terrible mistake,” I write back, “I only know my beloved C++.” They confidently replied that the team had already reviewed my résumé and wanted me for an interview. So before the interview I skimmed some JS basics and tried to figure out how I’d talk my way out of knowing nothing about full-stack development.

Turned out the job description copied from the internal portal was garbage (haha, classic), and the AdTech department was actually hiring a C++ intern to build high-load backend services. The interview was just a chat: they gave me a simple language question, we discussed bit operations, they made a checklist of what I knew and didn’t know. Honestly I knew nothing :)). At best I’d heard of some of it.

They hired me (I suspect largely thanks to solid references from education projects). That’s how my two years as a developer at Tinkoff started.

Notice the avalanche: without teaching I wouldn’t have found the internship, without the All-Russian I wouldn’t have gotten into teaching, without the clubs I wouldn’t have made the All-Russian, and those clubs happened because a specific group of instructors took me under their wing when I was fifteen.

Junior and intern roles all look the same—you understand nothing, the tasks can be insanely simple, yet you still spend most of your time trying to decipher what’s happening around you and feeling incredibly dumb.

![](/images/working-and-teaching-3.jpg)

I didn’t get the easiest project either. Our services were used by tons of different departments, each in their own way, and everything was fairly tangled. Service A could pull data from Service B, kick off Lua scripts, another service ran scripts in Perl, it all revolved around some protocol-buffer code generation, and even just running the code was nontrivial if the most complex thing you’d done before was `g++ main.cpp -o main`.

I remember spending two weeks on my first dumb task—“thread this config parameter through”—constantly bothering my mentor and understanding nothing. That’s life. After that I mostly churned through miscellaneous chores. Sometimes interns get brought in for a specific three-month project, but I was there for a three-month backlog clean-up. Then they offered me a full-time position after the internship!

...

## Working while studying

Working during uni had a huge upside: it highlighted why you need the stuff you’re learning. You start seeing how everything is wired, you get a high-level picture of the industry. Work and school complement each other nicely—the hands-on practice you get at work helps when you need to build something practical for class, while theory from uni sticks better when you can tie it to work experience.

The downside is that work eats a ton of time and makes planning ridiculously hard. There are meetings that clash with lectures. Work takes up daylight hours when other errands crop up. A job is a serious commitment—you don’t just squeeze it into the schedule, it starts driving the schedule.

![](/images/working-and-teaching-4.jpg)
*One eye on code, the other on a lecture—classic us*

My studies definitely suffered once I started working. At the very least I couldn’t give them my productive hours and was tackling half the coursework at night.

At the same time I was arguably more motivated to study. Well, “more motivated” in the sense that I started realizing a programming career is way more boring than studying. Coding at work is fine when you have other challenges alongside it, but without external challenges it’s hard to keep yourself focused on interesting things. And where else do you get challenges if not at uni?

I began looking at my career as a kind of [“hot/crazy”](https://how-i-met-your-mother.fandom.com/wiki/Hot/Crazy_Scale) chart, except with “interest” and “money.” Work tasks benefit the business, but most of the time they’re not that interesting on their own. Uni is the place where you can legally do almost any useless thing—as long as you’re intrigued and can justify a sliver of abstract usefulness.

Since I’m driven more by interest than by money, my primary identity was “student programmer,” and “working programmer” came second. Still, I liked how the combo let me take the best of both trajectories.

---

## Giga-chad teaching

While working I kept running the club. I lasted three years. At some point, after Lucy and I moved in together, it became brutally hard to balance personal life with spending the entire workweek on work and school and then disappearing for a full day every weekend to teach. Even though the main curriculum stabilized after the first year, the churn still took too much energy.

There were other education gigs, too. Friends would ask me to coach them for olympiads or the Unified State Exam; I rarely said no. Before the pandemic I tried to run a club at my old school—didn’t really work out. I tried launching my own free mini-course, but couldn’t polish the materials while studying because school plus work ate all my time.

It amused me how all teaching gigs—short of a full-time job at an educational institution—are this side hustle you stack on top of something else. Some folks straight-up teach similar courses at multiple universities simultaneously. And once you’re doing something somewhere, others start inviting you to similar gigs elsewhere. It snowballs, and at some point you either stop taking everything or become a guru of side hustles.

Thanks to that avalanche of side gigs I monetized my knowledge of segment trees and Dijkstra’s algorithm pretty well. I’d get invited to give one-off lectures, write olympiad problems, help with contest qualifiers for courses. We even ran a Tinkoff version of Advent of Code a couple of years back.

After emigrating I pretty much stopped. In the past six months I only ran one algorithms course for students from the regions—and on one hand it proved I’m a solid instructor who can build a big course from scratch; on the other hand I burned out because I committed to it long before it started, and the workload I had forecast for that semester was half of what it turned out to be.

The main problem for me is that teaching produces little visible impact. Some students drop out after the third lecture. Others find something that interests them more. Some are so driven and diligent they didn’t need you in the first place. And everyone forgets the material in a few years because they don’t need it in life.

![](/images/working-and-teaching-5.jpg)

The global pointlessness of teaching is offset by how obviously it helps your students—if not on a cosmic scale, then at least in hitting their short-term goals. The feedback is very transparent: people either complain or they thank you. Plus I genuinely enjoy explaining things and hanging out with students. Looks like I’ll be leading seminars at HSE this fall.

---

## Job hunting from abroad

In the first two weeks after the war began I moved to Georgia and had to do something. Keeping my income in rubles made no sense, so I started job hunting and told my team lead I’d be leaving soon.

It was a terrible position to be in: I had a year and a half of experience that didn’t map neatly onto what the market wanted. I wrote C++ backends, but backends are usually written in, say, Go. C++ is for games or embedded, which I hadn’t been doing. And I was still a student without a degree.

I posted about my job search to friends, LinkedIn, Vastrik Club, and started applying to openings. Conversion on cold applications is absurdly low. I did get some interviews, but they went so-so. Even when I handled them well, I’d still get rejected because my experience didn’t match or because it was too short. The posts worked out better: I was ready to take any offer and ended up getting two through the posts—one to parse Twitter data at a crypto startup, another to build infrastructure at a crypto HFT shop run by friends. (*Note: High Frequency Trading is automated trading on exchanges.*)

I remember being inches from an offer at EPAM. They grilled me on C++ for two hours, graded me as a mid-level engineer, and then at the very end scheduled an extra interview where nobody even showed up. I sat there in their branded Zoom with a fifteen-minute timer counting down until I was allowed to leave the non-interview. Afterwards I told them I wasn’t interested anymore—if a company treats hiring as some enormous privilege, that’s a red flag.

![](/images/working-and-teaching-6.jpg)

So I went to my friends who were running a chill HFT shop. I spent about four months there. I was doing infrastructure development in Rust to shuttle data from crypto exchanges wherever it needed to go. In typical HFT you spend twelve hours a day on fairly unexciting data plumbing and get paid a ton. In our case we were heavily dependent on market conditions and didn’t have that many tasks. And when I joined, the crypto market had cooled off, so we weren’t earning much. I wasn’t working much either—and I wasn’t getting paid much.

Once it became clear I was doing unfun work for little money, I relaunched the job search. Almost everyone calling was another HFT because “competitive programmers thrive there.” I went through a couple more interviews and ran into bad processes everywhere. One company invited me, and only on the technical interview did it turn out to be not a full-time position but an internship I was overqualified for. Another assumed I was a senior—which I wasn’t—and the interviewer demolished me so hard I almost cried afterwards. It wasn’t my fault nobody told me what level they expected (I wouldn’t sign up for a senior HFT interview on purpose; I’m not suicidal). It was his fault for puffing himself up at my expense when I couldn’t solve problems I was never aiming to solve.

In parallel I was interviewing at some product companies, but they ghosted me because I didn’t have a diploma—“come back when you graduate.”

In the end a startup found me through friends, and that’s where I still work. I actually like the startup format: one of the key metrics is development speed, so you get to ship a bunch of different things. The technical problems are different too—how do you solve a product problem “well enough” under tight deadlines?

Still, by the end of year three of my career I was pretty tired of working altogether.

---

## Complaining about capitalism

> I'm good at working smarter
>
> But I'm even better at not working at all.
>
> **(c) Ian McConnell, “Lazy”**

The thing about work is that it eats an obscene amount of time. When you sink that much time into work, the market rate for an hour of your time stops mattering—you’d rather keep that hour to yourself.

Sure, you can work for yourself, but that makes it even harder to separate life from work.

And salaried employment doesn’t run on supply and demand. People can’t opt out of working—they have to eat—so businesses get to dictate the terms. Forty-hour weeks by default, even though everyone would be better off if we all worked effectively for 20–30 hours and went home.

Workers, in turn, scam employers as hard as they can by doing nothing. The vast majority of people in the labor market have negative productivity—they produce no value, they do their job poorly, and someone has to clean up after them. They take three-hour lunches, ignore messages during work hours, blow deadlines. Often the cost of the chair they’re warming is higher than the value they create.

So if you simply do your job well, you’re already a 2x employee. Do it with enthusiasm and you’re 10x. Unfortunately the company doesn’t pay you ten times more: they count years of experience, wait for the next quarter to adjust your contract, and so on. Businesses also don’t want a giant gap between the 10x folks and the negatively productive ones—it would just ratchet up tension. Everyone’s comfortable when roles are dictated by the market, and the only thing your performance affects is how quickly you level up. And of course there’s always a role beyond which there’s nowhere to grow.

![](/images/working-and-teaching-7.jpg)

I think we should call the career “ladder” a career escalator. You can train hard and run up faster, but you can also stand still and it’ll still take you to the right floor, purely on years of experience. The hardest part is not picking an escalator that dumps you somewhere you don’t want to be.

So as a proud worker I dislike this setup: it’s not advantageous to work efficiently because you can work inefficiently for the same money. Growth is slow and—even though it depends on how invested you were—it will still hit the same ceiling in the medium term. You’re selling the company more time than you want to, and nobody is willing to buy less.

---

## Cursed IT

IT turned out to be a very peculiar field for a bunch of reasons.

First, it’s completely opaque to outsiders. The industry is still forming, most people know nothing about software or computers, so it’s easy to tell your boss you’re not playing Dota while working from home—you’re researching incident causes and improving performance.

Second, demand for talent outstripped supply, which meant even in the former USSR companies started paying real money instead of the standard 30k a month. For people from poorer regions that alone is a reason to retrain en masse.

Third, most programming boils down to Googling and copy-pasting. That’s almost always enough for micro-level tasks. And nobody cares about the macro level because business priorities are urgency, not quality.

So we’ve ended up in a world where IT folks are a separate social class everyone wants to join via some express bootcamp. We switch jobs every six months because that’s the fastest way to raise your salary. We churn out tons of atrocious code and, thanks to our self-promotion skills, get labeled “senior” while not even knowing where UDP is used.

![](/images/working-and-teaching-8.jpg)

Everything is broken:
* Hiring evaluates you in the wrong categories. My favorite recruiter question is “Which C++ standard do you use?” If you don’t name the latest one, you can hear the condescension—“Alright, no biggie”—as if half the new features hadn’t been sitting in Boost for years.
* The senior/middle/junior labels are broken—they’re based not on team function or responsibility but on some abstract notion of “coolness.” Obviously you can nail senior-level tasks in a place with low engineering culture and fail mid-level tasks in a strong team.
* Reward systems are broken—they can’t keep up with employee growth, so quitting is more economically efficient than staying.

Plenty of people I know take on two full-time jobs, work two hours a day at each, and make their six digits. (*Note: people usually call salaries of $100,000/year or more “six digits.”*) Good for them, but it annoys me every day that I have to justify my own choice—to do something interesting for reasonable money instead of five boring cushy gigs for big bucks.

---

## About the future

When you spend every day at work, work becomes your main activity, your life’s project. In that paradigm it’s incredibly dumb to grind away at something pointless just for the money. You’d want work to have some meaning and to fit you. Working purely for money is also dumb—it’s like spending half your life preparing to rest from the other half. A snake eating its tail.

It’s hard to think about this while you’re in uni because uni is the main focus and work is something on the side. But I’m honestly terrified of the moment studies end and only work remains. That’ll mean I need not just any job but a good job, one that satisfies a much longer checklist.

I’m 21 and I’m making almost more than my dad with a PhD who works at one of the few companies manufacturing superconductors. In the next few years I’ll probably climb further up the career escalator. And I still won’t make enough to afford housing. Maybe I’ll save up for a down payment, but who’s going to give me a mortgage right now?

So what’s the outlook? Work as little as possible for the biggest check doing uninteresting tasks? Start my own startup? Go academic? Boost the blog/YouTube/TikTok?

Ever since I programmed something for the first time at 11, I was sure I loved coding and just needed to keep growing in it. Now, ten years later, with decent achievements, a résumé, an education, projects—I keep asking myself: who do I actually want to be when I grow up?


> Text by [Kostya Amelichev](https://instagram.com/i_love_vozpet0s), illustrations by [Lusya Svinarenko](https://instagram.com/deadmarla)
>
> This longread is part of the “After Classes” series, where I talk about my student life. In the next chapter I’ll cover courts, paddy wagons, protests, the war, and emigration. Follow the releases in the Telegram channel [два семь три два пять](https://t.me/blog_27325)
