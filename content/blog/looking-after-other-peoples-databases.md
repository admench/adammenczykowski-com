---
title: Looking after other people’s databases
description: I recently helped move a catalogue raisonné FileMaker setup onto a dedicated server. What I care about now is longevity, security, and writing it down so the client is fine if I get hit by a bus.
date: 2026-09-08
image: /blog/looking-after-other-peoples-databases.png
minRead: 6
author:
  name: Adam Menczykowski
  avatar:
    src: /adam-menczykowski-croatia-beer.webp
    alt: Portrait of Adam Menczykowski
---

Most of my week is design and engineering. Interfaces, Laravel, Statamic, the long conversation that turns a messy process into software people can actually use.

Every so often the job is different. Recently I helped the Hepworth Catalogue project move their FileMaker setup onto a dedicated AWS host. The research itself was not mine to do. My job was the unglamorous part: a reliable machine, backups that mean something, access that is not a single shared password on a sticky note.

It sat a bit outside my comfort zone. That is usually a sign I should write the learning down.

## What I was actually looking after

A catalogue raisonné is the complete record of an artist’s work — every piece that can be traced, with the research behind it. For Barbara Hepworth that work has been going on for years. The public may eventually see a book or a website. Day to day, the project lives in a database.

That pattern is familiar to me now, even if the subject changes.

I built the website and members’ platform for the [International Catalogue Raisonné Association](https://icra.art), so I have spent a lot of time around the people who compile these catalogues. Before that, with Abby at [You I](https://youi.design), we replaced a nearly forty-year-old desktop database for a literary scouting firm. Decades of titles, contacts and relationships. Hundreds of clients who needed to keep working while the old system came apart.

Art scholarship and literary scouting do not look alike from the outside. Underneath they are the same shape. A small team. Knowledge that took years to build. A tool they know intimately. Very little spare technical capacity. And a file that would be a disaster to lose.

Once you have seen that shape a few times, you stop thinking of the work as “a website” or “a server”. You start thinking of it as stewardship.

## Longevity is the real brief

Catalogue projects run for ten or twenty years. Literary archives do too. The original developer will not still be on the same laptop. The original hosting account may not even exist.

So the first question is not “what is clever?” It is “what will still make sense in a decade?”

For the Hepworth work that meant a dedicated host, not a machine under someone’s desk. It meant treating backup as part of the build, not a job for later. It meant preferring a boring, known setup over a neat trick I would have to remember.

I like building things. I do not like building things that only work if I am the one holding them. Fashionable infrastructure is a gift to my curiosity and a problem for the client. Practical infrastructure is the opposite.

If a choice makes the system easier for me this month and harder for them in five years, it is the wrong choice.

## Security is mostly not exciting

People hear “AWS” and imagine a big architecture diagram. What actually matters is smaller.

Who can log in. Who owns the account. Whether the database is sitting on the public internet because that was the default. Whether backups are encrypted. Whether anyone has ever tried to restore one. Whether the only copy of a password lives in one person’s head.

None of that is a conference talk. All of it is the difference between a research file that survives and one that does not.

If I cannot explain the setup in plain language, it's too clever. If the client cannot name the people who have access, it's too loose. If a restore has never been tested, you do not have a backup. You have a hope.

The music years are useful for this. Hundreds of soundchecks teach you the same thing: the details nobody sees are the ones everyone feels when they go wrong. Stay calm. Check the unglamorous path. Do not assume last night’s setup is still true this afternoon.

## Write it down as if you will not be here

This is the part I care about most.

I want the client to know what they have, where it lives, how to get in, and what to do if the server has a bad day — without needing me on the phone. If I get hit by a bus, or I am simply on holiday, or the project outlives the working relationship, the knowledge should already be theirs.

So I document the boring things on purpose.

Where the host is. What runs on it. How backups are taken and how you would restore one. Who has which credentials, and that those credentials belong to the client, not to me. What a normal week looks like. What an emergency looks like. How to hand the whole thing to another developer without archaeology.

It is not a novel. It is a note you would want to find at 9am on a Tuesday.

I used to think good documentation was a courtesy. I now think it is part of the product. An undocumented system is a system with a hidden dependency, and that dependency is me. I do not want to be a hidden dependency for someone else’s life’s work.

## You do not always replace the tool

A lot of DevOps stories end with a rewrite. This one did not.

FileMaker is how the research gets done. The team already lives in it. Replacing it with something more fashionable would have been a different project, with different risks, and it would have asked scholars to change how they work in order to make my life tidier.

The job was to put a solid floor under the tool they already trust. Host it properly. Back it up. Make the access sensible. Write down what we did.

That is a more useful kind of expertise than “we could rebuild this in X”. I have rebuilt old systems when they were genuinely finished — the literary scouting platform could not stay as a forty-year-old desktop app. I have also learned to tell the difference between a tool that is old and a tool that is wrong.

Old and loved, sitting on a fragile machine: fix the machine.

Old and blocking the work: then you talk about a rebuild.

Knowing which is which is most of the job.

## What I think I am for

I am a musician-turned-design engineer. I like making complicated things understandable. That used to mean a mix. Then a website. Then a product.

It also means this quieter work. Sitting with a database that represents years of other people’s attention, and refusing to leave it in a state only I understand.

The art world and the literary world taught me that. They have patience for research and very little patience for unexplained technology, which is a good filter. If I cannot hand over the keys and the notes, I have not finished.

If you are sitting on a FileMaker file, or any other long-lived research database, and the current arrangement makes you slightly uneasy, trust that feeling. The scholarship can be excellent and the box it lives in can still be a problem.

I am always happy to compare notes. You can reach me at [adam@youi.design](mailto:adam@youi.design).
