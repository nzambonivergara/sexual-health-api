const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Sexual Health Facts';
app.locals.questions = [{
  id: 1,
  question: "You can only transmit an STI if you have symptoms.",
  answers: [ true, false ],
  correctAnswer: false,
  fact: "A lot of people pass on STIs to others without even knowing. STIs can be spread with symptoms or without. The WHO explains that “[t]he majority of STIs have no symptoms or only mild symptoms that may not be recognized as an STI.” It is important to be tested regularly and to use a condom to prevent STIs as much as possible."
},
{
  id: 2,
  question: "Abortion is dangerous.",
  answers: [ true, false ],
  correctAnswer: false,
  fact: "Legal abortion is 14x safer than pregnancy and childbirth. This was not always the case, however; before Roe v. Wade became law of the land in 1973, thousands of women each year experienced morbidity or mortality due to complications from an unsafe abortion. Safe, legal abortion care saves lives. Like any medical procedure, there are risks associated with having an abortion. That said, less than half of 1% of legal abortions performed result in serious complications."
},
{
  id: 3,
  question: "Emergency contraception (“the morning after pill”) and medication abortion (“the abortion pill”) are the same thing.",
  answers: [true, false],
  correctAnswer: false,
  fact: "Emergency contraception will not impact an existing pregnancy and has no impact if fertilization has already occurred; it merely prevents pregnancy from occurring. Medication abortion terminates an already established pregnancy."
},
{
  id: 4,
  question: "Once you’ve had an STI, you can still get it again.",
  answers: [true, false],
  correctAnswer: true,
  fact: "You can get some STIs more than just once. You'll have to make sure you manage viral STIs (like HIV, herpes, or HPV) with medication. Others, like chlamydia and gonorrhea, can be fully treated, but you may get infected again if you have sexual contact with someone who has them. What can you do? Protect yourself using barrier methods."
},
{
  id: 5,
  question: "The only way to protect youself from STIs is abstinence.",
  answers: [ true, false ],
  correctAnswer: false,
  fact: "STIs are really common and shouldn't be stigmatized. However, it's important to protect yourself and your partners from STIs so you are protected from serious health risks that can occur if STIs go untreated. While abstinence is 100% effective, it is not realistic to expect everyone to practice abstinence. If you are sexually active, the best way to protect yourself is to practice safe sex by (1) using barrier methods — like condoms, internal condoms, dental dams, and/or latex or nitrile gloves, (2) getting tested regularly, (3)  treating or managing your STI if you test positive for one, and (4) having open communication with your partners."
},
{
  id: 6,
  question: "You can't tell when someone is gay.",
  answers: [ true, false ],
  correctAnswer: true,
  fact: "Exactly! You cannot tell if someone is gay, remember, ones gender expression is not representative of their identiy, sexual oreintation, or more."
},
{
  id: 7,
  question: "When someone's gender identity aligns with their sex assigned at birth, they are cisgender. When someone's gender identity doesn't align with their sex assigned at birth, they might identify as transgender, gender non-binary, or a different identity that feels right for them.",
  answers: [ true, false ],
  correctAnswer: true,
  fact: "Gender identity is different than sex. In that same way, gender expression is also different. Gender identity pertains to what gender the person identifies, whereas gender expression refers to how someone decides to express their gender."
},
{
  id: 8,
  question: "All emergency contraceptives are 100% effective up to five days after having unprotected sex.",
  answers: [ true, false ],
  correctAnswer: false,
  fact: "PLAN B/NEXT CHOICE is available over the counter or online without a prescription. It can work up to 5 days after unprotected sex, but its effectiveness decreases each day."
},{
  id: 9,
  question: "The Copper IUD (Paragard) is an effective emergency contraception method.",
  answers: [ true, false ],
  correctAnswer: true,
  fact: "COPPER IUD is the most effective EC there is. Have a provider insert it within 5 days of having unprotected sex and lower your chance of pregnancy by 99.9%."
},
{
  id: 10,
  question: "Lesbians don’t need to worry about safe sex because they are having sex with women.",
  answers: [ true, false ],
  correctAnswer: false,
  fact: "Regardless of ones sexual orientation and identity, if engaging in sexual acts (oral sex, anal sex, vaginal sex, or any genital to genital contact), safe sexual practices are still encouraged (getting tested, using protection, consent, communication, etc)."
},
{
  id: 11,
  question: "There is an amount of sex that is considered 'normal'.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "There’s no amount of sex that’s considered normal — everyone’s different. How often you have sex depends on a lot of things, like whether you have a partner, what else is going on in your life, and how strong your sex drive (your desire to have sex) is. People have different sex drives. Your own sex drive can change based on things like stress, medications you take, and other physical, emotional, and lifestyle factors. Some people want to have sex every day or more than once a day, and some people hardly ever want to have sex. People who don't experience any sexual attraction for anyone might identify as asexual."
},
{
  id: 12,
  question: "Using two condoms doubles the protection.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "It is understandable why people might assume two condoms would provide twice the protection, but this is a myth. It is actually more risky to use two or more condoms when having sex. The likelihood of the condom breaking is higher due to the amount of friction the condom is enduring. A single condom is the best option."
},
{
  id: 13,
  question: "Will my partner feel the IUD or will the IUD hurt my partner during penetration sex?",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "It is unlikely that they will be able to feel your IUD. BUT, if they do, they will definitely not get hurt during penetration sex. The IUD is made out of soft plastic and it is very flexible."
},
{
  id: 14,
  question: "The first time you have sex always hurts.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "Nope! Sex should not be painful, if you don't want it to be. There are many ways to avoid sex being painful, but it is important to know that everyone is different and you should familiarize yourself with what feels good or not good for you. Remember, constant communication with your partner is important to ensure you are both enjoying it. Ask your partner what they like and check in constantly."
},
{
  id: 15,
  question: "You can contract STIs from a toilet seat.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "This is perhaps one of the most persistent myths associated with STIs. Yet, despite being repeatedly debunked, it remains a myth. STIs are spread through unprotected vaginal, anal, or oral sex, and by genital contact and sharing sex toys. The viruses that cause STIs cannot survive for long outside the human body, so they generally die quickly on surfaces like toilet seats. Similarly, the bacteria responsible for STIs, such as chlamydia, gonorrhea, and syphilis, cannot survive outside the body’s mucous membranes for a significant amount of time. For that reason, they would not survive on a toilet seat."
},
{
  id: 16,
  question: "You can tell that someone has an STI by looking at them.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "There is no way to know by looking at someone (even if it's up close and personal!) whether they have an STI or not. The only way to know for sure if a person has an STI is for that person to get tested."
},
{
  id: 17,
  question: "Taking a shower or washing yourself with hand sanitizer after sexual contact will avoid STI transmission.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "Don't rely on washing yourself after sexual contact to prevent infection – that doesn't work. The best way to reduce your risk for STI transmission during sexual contact is to use barrier methods of protection (e.g., condoms) to prevent STI transmission from happening."
},
{
  id: 18,
  question: "If two people have HIV, they don't need to use condoms or other barriers because they both already have the same infection.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "There are actually multiple strains or versions of the HIV virus. If two people who are HIV-positive with different strains pass their HIV to one another, they can become HIV-positive for both strains. Having more than 1 strain of HIV inside the body can make treatment more difficult and complicated. Using condoms to reduce this risk will also help to prevent transmission of any other STIs that either person might have."
},
{
  id: 19,
  question: "A person cannot consent to sexual activity while drunk or high on drugs.",
  answers: [ true, false ],
  correctAnswer: true,
  fact:  "A person cannot legally consent to any sexual activity when they are intoxicated. Of course this doesn't mean that sex doesn't happen when people are drunk or high, but it’s important to know the laws and to be aware of limitations on consent."
},
{
  id: 20,
  question: "If my partner regularly checks in on me to see what I am doing and who I am with, these could be signs of controlling behaviour.",
  answers: [ true, false ],
  correctAnswer: true,
  fact:  "It's normal for partners to check in with each other and see how they’re doing. However, if taken to the extreme, this could be a sign that a partner is being controlling or possessive. Does your partner always need to know where you are and who you are with? Does your partner phone or text you constantly to check up on you? If yes, this may be something that you want to talk to a trusted adult or friend about."
},
{
  id: 21,
  question: "If you're not in love, you shouldn't be having sex.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "It’s up to you to decide what’s important for your sexual relationships. Many people feel that sex without love is just fine whereas others feel differently. Nobody but you can decide whether or not love is necessary for you to have sex."
},
{
  id: 22,
  question: "It's not fair to my partner if I first agree to do a certain sexual act but then decide mid-way through that I want to stop, so I should just go through with it.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "Even if you give consent for a certain sexual activity, you always have the right to change your mind. There are many reasons why this might happen. Maybe you find it painful or uncomfortable, maybe it triggers negative memories for you, or maybe you just realized you're not into it. Regardless of your reason, you don’t have to continue something you don't want to do. You can withdraw (or take away) consent at any time. Consent is an ongoing process and checking in with each other is a great way to ensure that sexual activities continue to be consensual."
},
{
  id: 23,
  question: "If my partner isn't jealous when other people flirt with me, they must not be into me.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "Jealousy and love don’t necessarily go together. A partner can be completely into you and also completely trusting of you, making them feel like there is nothing to be jealous about. In fact, when we see jealousy as a sign of love in our relationships, we may put up with unhealthy jealous behaviours from our partners that can signal control or possessiveness."
},
{
  id: 24,
  question: "It’s normal to feel attraction to members of both the same sex and the opposite sex.",
  answers: [ true, false ],
  correctAnswer: true,
  fact:  "It is very common that people feel attracted to people of different sexes or genders. These feelings can happen at the same time or people may find that their attractions change over time. Many people experience different sexual attractions throughout their teen years and even during their entire life – that is totally normal!"
},
{
  id: 25,
  question: "You cannot get pregnant during your period.",
  answers: [ true, false ],
  correctAnswer: false,
  fact:  "Sperm can live for up to five days inside the vagina, uterus, and fallopian tubes, so it is possible for sperm that entered your body during your period to still be alive when your egg is released during ovulation."
}
];


app.get('/api/v1/questions', (request, response) => {
  response.status(200).json(app.locals.questions);
});

app.get('/api/v1/questions/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.questions.find(question => question.id == id);

  if (!match) return response.status(404).json({message: `No question found with an id of ${id}`});

  return response.status(200).json(match);
});

app.post('/api/v1/questions', (request, response) => {
  const newQuestion = {
    id: Date.now(),
    ...request.body
  };

  for (let requiredParameter of [ 'question', 'answers', 'correctAnswer', 'fact' ]) {
    if (!newQuestion[requiredParameter]) return response.status(422).json({message: `You are missing a required parameter of ${requiredParameter}`});
  }

  app.locals.questions = [...app.locals.questions, newQuestion];

  return response.status(201).json(newQuestion);
});

app.delete('/api/v1/questions/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.questions.find(question => question.id == id);

  if (!match) return response.status(404).json({message: `No question found with an id of ${id}`});

  const filteredQuestions = app.locals.questions.filter(question => question.id != id);

  app.locals.questions = filteredQuestions;

  return response.sendStatus(204);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
  });
