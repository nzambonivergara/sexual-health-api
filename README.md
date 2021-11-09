# Sexual-health-api

## Set Up

1. Clone down this repo. 
2. CD into this repo.
3. Run `npm install` in your terminal.
4. Run `node server.js` to start the server.

## Endpoints 

### GET all questions

URL: `http://localhost:3000/api/v1/questions`

Sample Response:
```
[
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
  }
]
```

### GET a question by id

URL: `http://localhost:3000/api/v1/questions/:id`

Sample Response for `http://localhost:3001/api/v1/questions/4`:

```
 {
  id: 4,
  question: "Once you’ve had an STD, you can still get it again.",
  answers: [true, false],
  correctAnswer: true,
  fact: "You can get some STDs more than just once. You'll have to make sure you manage viral STIs (like HIV, herpes, or HPV) with medication. Others, like chlamydia and gonorrhea, can be fully treated, but you may get infected again if you have sexual contact with someone who has them. What can you do? Protect yourself using barrier methods."
}
```

Sample response (404):
```
  {message: 'No idea found with an id of 4'}
```

### POST a NEW question

URL: `http://localhost:3000/api/v1/questions`

Sample Request:

```
 {
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    question: 'Question',
    answers: [ true, false ],
    correctAnswer: true,
    fact: 'Fact'
  })
}
```

Sample response (201): This is the question that was submitted in the POST request

```
{
  id: 9,
  question: "The Copper IUD (Paragard) is an effective emergency contraception method.",
  answers: [ true, false ],
  correctAnswer: true,
  fact: "COPPER IUD is the most effective EC there is. Have a provider insert it within 5 days of having unprotected sex and lower your chance of pregnancy by 99.9%."
}
```
Sample BAD response (422):
```
  { message: 'You are missing a required parameter of fact' }
```

### DELETE a question

URL: `http://localhost:3000/api/v1/ideas/:id`

Sample URL: `http://localhost:3000/api/v1/ideas/2`

Sample response (204): no content in the body, nothing to parse

Sample BAD response (404): 
```
  { message: 'No question found with an id of 2'}
```
 
