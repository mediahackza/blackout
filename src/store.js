import { writable } from 'svelte/store'

let qs = [
  {
    q: 1,
    question: 'How many hours of loadshedding were there during 2021?',
    tip: '"Hours" are the number of hours in which a loadshedding level was in effect. For example, level 1 loadshedding',
    option1: '922',
    option2: '1,152',
    option3: '3,234',
    option4: '2,430',
    answer: '1,152',
    answered: false,
    selection: '',
    correct: false,
    incorrectResponse:
      '<span class="answer-result">Incorrect</span><br/> The correct answer is 1,152 hours which is roughly equivalent to 48 days-worth of loadshedding.',
    correctResponse:
      '<span class="answer-result">Correct</span><br/> in 2021 there were 1,152 hours during which loadshedding was in effect, which is roughly equivalent to 48 days of loadshedding.',
  },
  {
    q: 2,
    question: 'Which year had more loadshedding than 2021?',
    tip: '',
    option1: '2015',
    option2: '2018',
    option3: '2019',
    option4: '2020',
    answer: '2015',
    answered: false,
    selection: '',
    correct: false,
    incorrectResponse:
      '<span class="answer-result">Incorrect</span><br/> The correct answer is 2015. There were 1,359 hours of loadshedding during 2015 compared with 1,152 in 2021.',
    correctResponse:
      '<span class="answer-result">Correct</span><br/> With 1,359 hours of loadshedding, 2015 had more loadshedding than 2021 (1,152 hours).',
  },
  {
    q: 3,
    question: 'Which months in 2021 had no loadshedding?',
    tip: '',
    option1: 'March & May',
    option2: 'July & September',
    option3: 'August & September',
    option4: 'October & November',
    answer: 'August & September',
    answered: false,
    selection: '',
    correct: false,
    incorrectResponse:
      'Incorrect!<br/> The correct answer is August & September, the only months without loadshedding in 2021.',
    correctResponse:
      'Correct! The only two months without some loadshedding were August and September.',
  },
  {
    q: 4,
    question: 'Which month in 2021 had the most loadshedding?',
    tip: '',
    option1: 'March',
    option2: 'July',
    option3: 'October',
    option4: 'December',
    answer: 'October',
    answered: false,
    selection: '',
    correct: false,
    incorrectResponse:
      'Incorrect!<br/> The correct answer is October with 262 hours of loadshedding, equivalent to almost 11 days, ',
    correctResponse:
      'Correct!<br/>October 2021 had 262 hours of loadshedding, equivalent of almost 11 days.',
  },
  {
    q: 5,
    question: 'Which day of the week had the most loadshedding in 2021?',
    tip: '',
    option1: 'Monday',
    option2: 'Tuesday',
    option3: 'Thursday',
    option4: 'Saturday',
    answer: 'Thursday',
    answered: false,
    selection: '',
    correct: false,
    incorrectResponse:
      'Incorrect!<br/> The correct answer is Thursday which had 200 hours of loadshedding during 2021.',
    correctResponse:
      'Correct!<br/>Thursday had 200 hours of loadshedding during 2021.',
  },
]

let sa = ['incorrect', 'incorrect', 'incorrect', 'incorrect', 'incorrect']
let at = [false, false, false, false, false]
let complete = false

export let scoreAnswers = writable(sa)

export let answersTaken = writable(at)

export const questions = writable(qs)

export let completed = writable(complete)
