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
  question: "Once you’ve had an STD, you can still get it again.",
  answers: [true, false],
  correctAnswer: true,
  fact: "You can get some STDs more than just once. You'll have to make sure you manage viral STIs (like HIV, herpes, or HPV) with medication. Others, like chlamydia and gonorrhea, can be fully treated, but you may get infected again if you have sexual contact with someone who has them. What can you do? Protect yourself using barrier methods."
},
{
  id: 5,
  question: "What is the safest way to protect yourself from STIs?",
  answers: [ "Using a barrier method", "Getting tested regularly", "Open and honest communication with partners", "All of the above"],
  correctAnswer: "All of the above",
  fact: "STIs are really common and shouldn't be stigmatized. However, it's important to protect yourself and your partners from STIs so you are protected from serious health risks that can occur if STIs go untreated. The best way to protect yourself is to practice safe sex by (1) using barrier methods — like condoms, internal condoms, dental dams, and/or latex or nitrile gloves, (2) getting tested regularly, (3)  treating or managing your STI if you test positive for one, and (4) having open communication with your partners."
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
  question: "What is the term for when someones gender identity aligns with their sex assigned at birth?",
  answers: [ "cisgender", "transgender", "pansexual", "none of the above" ],
  correctAnswer: "cisgender",
  fact: "Gender identity is different than sex. When someones gender identity aligns with their sex assigned at birth, they are cisgender."
},
{
  id: 8,
  question: "All emergency contraceptives are effective up to five days after having unprotected sex.",
  answers: [ true, false ],
  correctAnswer: false,
  fact: "ELLA The newest form of EC in the U.S. is a one-pill formula available by prescription. Blocks the hormones your body needs to conceive. Works up to 5 days after unprotected sex and, unlike other EC pills, doesn’t decrease in effectiveness during those 5 days. PLAN B/NEXT CHOICE Plan B One-Step, Next Choice One Dose, Next Choice, EContra EZ, My Way, After Pill and Levonorgestrel. Available over the counter or online without a prescription. Similar to birth control pills, but at a much higher dose. Can work up to 5 days after unprotected sex, but effectiveness decreases each day. YUZPE METHOD You can use certain birth control pills as EC if you follow the Yuzpe Regimen guidelines, though it’s not as effective as other EC options. Works best up to 3 days following unprotected sex. After that, it’s much less effective."
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
  fact:  "Nope! There’s no amount of sex that’s considered normal — everyone’s different. How often you have sex depends on a lot of things, like whether you have a partner, what else is going on in your life, and how strong your sex drive (your desire to have sex) is. People have different sex drives. Your own sex drive can change based on things like stress, medications you take, and other physical, emotional, and lifestyle factors. Some people want to have sex every day or more than once a day, and some people hardly ever want to have sex. People who don't experience any sexual attraction for anyone may call themselves asexual."
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
  fact:  "Nope! It is unlikely that they will be able to feel your IUD. BUT, if they do, they will definitely not get hurt during penetration sex. The IUD is made out of soft plastic."
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
