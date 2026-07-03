I am now officially a master! Well, technically I became one last September, but now I have the diploma, and finally I no longer need anything from Polytechnique, and Polytechnique no longer needs anything from me.

I wrote about my experience during the [first semester](/ecole-after-3-months) at Polytechnique -- back then I did not understand that much about what surrounded me and was mostly sharing first impressions. I thought about writing about the second semester or the second year, but it kept turning into self-repetition -- my intuition had worked so well the first time that there was not much left to add.

## Second semester

I received my grades for the first semester, which we finished before New Year, sometime around mid-February, when the second semester was already halfway through. The grades were random -- on the 20-point scale there were courses where I got 20, courses where I got 16, and something in between. I found out about my (only one, I think) 20 when the lecturer of that course invited me for an internship in his lab. I was flattered, but replied that it would have been better if he had first told me whether I had passed the course at all, because at that point I had absolutely nothing in my hands.

The grades appeared straight in the transcript -- nothing showed up on the platform where we submitted homeworks. I mean, imagine: every course has weekly homeworks and a project, and at the end you get one number that you cannot even analyze, let alone dispute, because there are still no comments on the work. I will never know what exactly I learned wrong, or which parts of the projects I underworked. The grading system is made even harder by the fact that some teachers are clearly doing the "French" thing -- they make 16 or 18 the maximum grade, while others make 20 the maximum. So the distribution gets fitted to different scales, your grade tells you nothing, there is neither feedback nor detail, and it arrives when you have already forgotten which courses you took.

### Transfer

Around the time of the first-semester grades, I realized that I did not like where things were going. Most of all, I did not like the prospect of paying another 18 thousand euros for one more year. Since I had already figured out a little of what was happening around me, I realized I could apply to a [neighboring program](https://www.ip-paris.fr/en/education/masters/computer-science-program/major-interaction-graphics-design) at Institut Polytechnique, transfer into the second year, and save around 15 thousand euros while getting a comparable set of courses (and an IPP stamp instead of EP on the diploma). I gathered documents, requested recommendation letters from assistants and professors, applied, and got accepted. But then it turned out that the assistant from that year, whom I had asked for a recommendation, was becoming one of the program's academic coordinators the next year -- so he decided to ask me what was going on. I went to the team's office and said that I had looked here and there, the neighboring program would cost me 15k less, and I valued the difference at less than 15 thousand, since the course set was similar. The academic coordinators discussed it and offered me a 12-thousand-euro grant for the next year. I agreed. They said they had not even thought that someone at the university could struggle because of its high cost (though they agreed it was expensive).

I also learned that I did not get first-year grants exclusively because the academic coordinators decided it would be somehow not very diversity-friendly to give grants to five Russian students.

I was furious, of course, but the main thing is that I managed to counteroffer the university! Stonks. The second year ended up costing me around 6 thousand, and we were able to loosen the family budget a bit.

### Courses

The second semester itself was the best one in the whole program from the visual computing perspective. There were as many as two courses about computer graphics -- one on rendering, another on animation. The animation course was a little weak, but to be fair, the homework infrastructure there was set up relatively normally.

I really liked the rendering course, but it was an elective, and I was the only person from the entire cohort who took it. So out of 20 graduates of our program (AI & Advanced Visual Computing), exactly 19 did not learn how to use OpenGL or any of the other basic graphics things. That course had the only teacher in two years who actually knew his stuff -- the material, the industry, and how to explain it properly. I was also terribly upset because one of the 9 lectures was canceled because there was some parade on campus for the engineers (not even for us!).

There was a course on AI in videogames, where we had to write our own AI for StarCraft. It was some old StarCraft that can only run on Windows 7, and even the build was properly configured only through Visual Studio. The game's API also left much to be desired -- most of the time I was just writing wrappers to avoid running into API bugs. The teachers there annoyed me a lot -- any concrete technical question was answered with vague water, as if they were not programmers but purely players:

> - How do we distinguish units of the same type from each other, so that we can give them different commands?

> - Yes, you need to make it so units can perform different commands, because some units need to fight, some defend the base, and some gather resources. But actually even the ones gathering resources can attack too, especially if you play Zerg...

> - That is exactly why I am asking: I want to give them different commands, but we can only retrieve units by type, without IDs.

> - Ah, yes, you need to write code that says one unit first gathers resources and then defends, and another unit first defends and then attacks. Just be careful, because if a unit is defending the base while the opponent is gathering resources, that gives the opponent an economic advantage...

> - Fuck, so how do I send a command through the API to one unit, not to all of them together?

> - What?

In short, if I would rate all the other semesters 4/10, this semester could be rated 6/10, because there was one good course, and because there were several courses with fun visual projects, even if the rest of it was stupid.

{% include carousel.html id="projects" images="/images/ecole-3-years-1.png,/images/ecole-3-years-2.jpg" alt="projects photos" %}

## Second year

During the whole first year we studied on courses that we shared with the engineering program, which is the main Polytechnique program for French students and is considered the strongest one. In the second year we had our own set of courses, assembled SPECIFICALLY for our program, and all courses were taught to a small group of 20 people in a separate research-institute building. Overall, you could say that the main labs each made a course on their own profile topics.

Instead of semester-long courses (9 weeks - 9 homeworks - 1.5 hours of lecture and seminar), we had more frequent courses (4 weeks - 4 homeworks - 3 hours of lecture and seminar). As I understand it, this was done so that making a course would be less burdensome for researchers -- they shoot their shot in a month and forget about it, while the total hours are the same.

Despite the formal match in hours, the material became much more watery: you cannot study properly for three hours in a row, preparing a good three-hour lecture is also almost impossible, the first class was spent on <span class="inline-note" data-inline-note data-tooltip="but 6 hours instead of 3"><button type="button" class="inline-note__trigger" aria-label="introductory water. Note: but 6 hours instead of 3">introductory water</button></span>, the last one on <span class="inline-note" data-inline-note data-tooltip="but 6 hours instead of 3"><button type="button" class="inline-note__trigger" aria-label="concluding water. Note: but 6 hours instead of 3">concluding water</button></span>, and the remaining classes were clearly not twice as dense as normal ones, not to mention the smaller amount of homework and practical work. In the Computer Vision course, for example, we had 200-slide presentations that simply listed different VGGT versions.

In the second year there was not a single course where you had to program something meaningfully visual while actually learning something. There was a course whose name I do not remember that was supposed to be the backbone course of this track, with Unity homeworks. But nobody ever taught us Unity at any point, and most of the time we were randomly poking around in it while making a _creative_ project. No hard skills, in short.

The second year overlapped with the first by some incredible percentage. The Advanced RL course, continuing first-year RL, repeated 2 out of 4 classes and homeworks. We had a Deep Learning course where they were almost explaining gradient descent to us again in the final year of an AI program (by then we had already taken CV and RL and whatever else). Convolutional neural networks were probably explained five times across different courses.

While looking for various photos just now, I realized that in about half of the courses we actually had article presentations instead of exams. I mean, retelling a ten-page paper is a skill you need to have, even when half the text is taken up by result images. They even give you a teammate. I found one course where we had to reproduce the code from a paper! I will attach an image from that one.

![](../images/ecole-3-years-3.png)

I can complain a lot (about GPT-generated homeworks, for example), but I have to stop somewhere. There is no point in presenting this as education.

<!-- It is exactly like I wrote in the previous longread -- lecturers give overview lectures often bordering on pop science, practical work is passed from one generation of PhD students to the next by people who themselves do not really understand what to do, and the quantity and quality of practical work do not help build new cognitive connections at all. Add to that the fact that feedback is absent as a concept, and grades are issued randomly, six months later and with no breakdown by homework -- and you get educational failure. -->

## Positioning

The program positions itself as AI & Advanced Visual Computing. I may have been the only person who studied the positioning in advance, but it was like this -- we want to graduate people who will work on animations and engines, and since modern graphics uses a lot of AI, we will give them the necessary AI skills.

All the students came to study pure AI and perceived the visual part as some stupid and unnecessary appendage. The academic coordinators also focused on AI -- for example, it was impossible to choose a normal industrial internship in graphics, because they would immediately ask how much research there was in it, while you are basically an apprentice writing code. At Datagrok, where I worked at the time, we were making very cool tools for <span class="inline-note" data-inline-note data-tooltip="Datagrok clinical-case visualization demo" data-tooltip-image="https://datagrok.ai/img/slides/clinical-case.gif" data-tooltip-image-alt="Datagrok interactive clinical visualization demo"><a class="inline-note__trigger" href="https://datagrok.ai/img/slides/clinical-case.gif">interactive visualizations</a></span> of all kinds of experimental data. I think they blocked my proposal to make the internship topic about improving such a toolkit (which was genuinely interesting and had potential for a niche publication), so instead I had to awkwardly force in some primitive medical AI built on my knee just to get the topic validated. To avoid this kind of thing, I decided to do my second internship in real AI&ViC research and went to work on <span class="inline-note" data-inline-note data-tooltip="NVIDIA Cosmos world-simulation video" data-tooltip-video="https://images.nvidia.com/aem-dam/Solutions/ai/cosmos/cosmos-simulate-worlds-video.mp4" data-tooltip-image-alt="Autonomous driving world simulation video"><a class="inline-note__trigger" href="https://images.nvidia.com/aem-dam/Solutions/ai/cosmos/cosmos-simulate-worlds-video.mp4">simulators for autonomous driving</a></span> at a big company starting with X -- I was even planning to stay for a PhD if I liked it, because the topic sounded good. But there was such a mess and such nonsense going on there that I realized there was nothing to catch. I think I have also [already written](/2025-recap) about that.

We had several feedback sessions with the university, where people asked questions and said what they wanted improved. In some places it was impossible to align all of us, because some people wanted less material and fewer assignments, while others wanted more, and some wanted more coding and projects, while others wanted less. Still, there were some common points. Nobody liked vague, nonspecific criteria or the complete absence of timely grading. The administration said they would write down feedback for THIS course and pass it on to NEXT year. The fact that NEXT year, in a DIFFERENT course, we encountered the same SYSTEMIC problem -- very unfortunate, we will write it down in the FEEDBACK FOR THIS COURSE FOR THE ALREADY NEXT YEAR. So, descendants, if you are reading this and things got better -- you know whom to thank.

Without sarcasm, though, it is bleak -- at some point we discovered that the main reason for our problems is that teachers simply start rebelling if they are asked to grade homeworks on time or prepare normal descriptions for practical assignments and exams, because they, like, HAVE NO TIME. In other words, we pay money for a top educational program so that it would be top-tier, but the teaching staff does not have the resources to provide top educational quality, so the administration chooses not to change the positioning and not to shut down the program, but simply to close its eyes and ignore the problem while the university name on the diploma still has value and there is still a flow of students. I do not think this is some unique situation, but I still feel like I have every right to be mad about it. I would even accept an explanation that this is how it is everywhere in the West, but I do have a classmate from HSE who praised TUM a lot, for example.

What the administration really worked tirelessly on was rebranding the program. I think the name changed every year after ours. There are some insane plans -- to make something about [smart vision](https://programmes.polytechnique.edu/en/master/all-msct-programs/artificial-intelligence-advanced-visual-computing-master) and something about [AI & LLM](https://programmes.polytechnique.edu/en/master/all-msct-specializations/large-language-models-graphs-and-applications-llga), and then split AI & LLM somewhere separately into LLMs and separately into graph neural networks. In other words, they want to cover all the research labs whose possible courses we had ALREADY heard during one master's, and where there was ALREADY 30% internal overlap.

## Self-Organization

By the way, I also represented the university at different competitions! I ran the student orienteering championship twice and went to ICPC competitions three times.

You have no idea how hard it was to squeeze reimbursement money out of the university for those trips (which it is, supposedly, supposed to pay for). For one of the orienteering events everything was simply lost and I gave up on roughly three hundred euros. The other trips were returned, I think, but every time after about six months, after a pile of emails and pings.

When we organized training camps, we tried asking them to compensate something. They told us the program even had a special budget for such needs, and... they strung us along until the very end of the master's. Also something like several hundred euros.

One French engineer acquaintance of mine decided to hold a programming competition on campus, invited me to the jury, we assembled a problemset, he attracted sponsors, and started coordinating everything three months in advance -- and two days before the event, which he had effectively made alone and had 150 registrations for, an email arrived from Polytechnique saying that the sponsor companies had too little cooperation with Polytechnique: too few interns, they would come to campus, and we do not trust them, so banned. And this would have literally been the only inter-university ICPC-style competition in Paris that year, with prizes and sponsors.

## Conclusion

Every year they sent us a link to some independent survey about the university, and every year they added a note that university rankings, which employers look at, are formed based on it. Like, do not write badly, you will only hurt yourselves. That is kind of how I feel writing this longread, but if you remove the logo, my master's is genuinely worth pennies, so it is unclear why I should worry about its ranking.

The amount of effort, money, and visa-related nerves that the move required absolutely did not pay off for me against the main initial value of the university I had chosen. I did very well with the secondary goal -- integration, no questions there. But I remember how I looked at the course list and drooled -- and how by the middle of the second semester I realized that I simply had to accept the burned investment and amortize the financial losses.

Well, at least I moved to France; I like it here. If I were moving again, I would consider other alternatives. There are some good universities in Paris, like ENS. There is the [MVA](https://www.master-mva.com/) master's. The engineering program at Polytechnique, after all, has its own advantages. All of them, admittedly, seem to require nonzero French...

But here is the last piece of hard-earned wisdom for today -- learn the local language of the country you are moving to to some level BEFORE you end up there. Not only will you make your life easier, you will probably also learn something about the local culture (including the educational culture, damn those engineering schools).

And if you did not do that, then evaluate your university as a point of entry into society and integration, not as an educational institution, and set your expectations accordingly. Then you will not be a wounded little victim like me. I honestly do not like being such a wounded little victim myself, but there are no other reviews for you -- as I wrote in the first post, the best things were the cafeteria and PE!

<!-- I handled this alternative task wonderfully during my university time, but because I had set different, educational goals for myself, I completely failed to notice my success and was disappointed. Actually, I remain disappointed -- unequivocally the worst investment of money and effort in my life, and I definitely knew how to solve the alternative task of moving and integrating more efficiently. But France is not about efficiency, it is about grandeur. -->

### P.S.

When I had my diploma ceremony, one student from each program gave a speech, sweating from the record Paris heat of 40 degrees. I wonder what I would have said to a full hall. It is very easy to make everyone look like incompetent fools in your personal little internet corner that nobody reads -- but you are not going to tell a thousand people that if you do not give feedback on completed work, then it is not higher education, are you?

I would probably try to practice gratitude. It is hard to run this thought experiment now, because I have already listened to other students, and my imaginary speech is in dialogue with theirs rather than standing on its own.

Still, I came up with something like this:

> Dear graduates, administration, professors, family, and friends!

> This is my first graduation ceremony. I received my bachelor's diploma remotely because I had left Moscow, Russia, when the war began. I actively participated in protests against the current government, political repression, corruption, and the war with Ukraine, so with the inevitable tightening of the regime during wartime, it simply became unsafe for me to live in my hometown, with my family and friends. I packed everything necessary into two suitcases, gave away everything else, managed to say goodbye to fewer people than I would have liked, and left without a return ticket.

> I spent the last year and a half of my bachelor's studies in the capital of Georgia, the wonderful city of Tbilisi, which sheltered me while I was deciding what to do next. Combining full-time work and studies became a necessity, and failure simply was not an option. You start over, from zero and without safety nets. You study at night and on weekends, and postpone rest until better times.

> Back then, I decided that I wanted to move to France, do a master's in visual computing to broaden my competencies, and then stay here to live. So far everything is going according to plan! It was not an easy move, and I doubt life in a new country was easy for any of the international students. When you celebrate, do not forget to raise a glass to France, which welcomed us -- whether you plan to stay, continue your journey, or return home.

> I think the world today can at least be called unstable. There is a high chance that it will be our generation that has to figure out how to make the daily news less alarming. So I would like to ask you for two things. First, never lose focus on what truly matters (spoiler -- increasing the share of shareholders is probably not important). And second, do not be afraid to work hard and do not doubt yourself; over a long enough period, hard work works better than compound interest.

> In conclusion, I would like to say thank you to everyone, and a big thank you to the AI&ViC group for the time we spent together -- they were much better friends to me and to each other than I, because of life off campus, was to them. Special thanks to my wife Lyusya, who has been with me throughout my whole journey and was willing to believe in me so much that she made my personal goals our shared goals. This achievement is more hers than mine. Moving your entire life after another person is much harder than betting on yourself. I merely had to submit assignments on time. Value the people who believe in you, and work hard so as not to betray their trust.

> Thank you, and have a great celebration!
