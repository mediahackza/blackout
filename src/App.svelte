<script>
  import { fly, fade, scale, slide } from 'svelte/transition'
  let finalScore = 0

  let lightarray = 0
  let lightdir = 'asc'
  let showExplanation = false
  let sticky = false
  let hourGraphic = '<Hourly />'
  import { backgrounds } from './backgrounds.js'
  import { questions, scoreAnswers, answersTaken, completed } from './store.js'
  let answers = [
    'incorrect',
    'incorrect',
    'incorrect',
    'incorrect',
    'incorrect',
  ]

  $: if ($completed) {
    let count = 0
    $scoreAnswers.forEach((d) => {
      if (d === 'correct') {
        count++
      }
    })
    finalScore = count
  }

  let answered = [false, false, false, false, false]
  // let selected = [null, null, null, null, null]
  let score = 5

  setInterval(() => {
    if (lightdir === 'asc') {
      lightarray = lightarray + 1
    } else {
      lightarray = lightarray - 1
    }
    if (lightarray === 4) {
      lightdir = 'desc'
    }
    if (lightarray === 0) {
      lightdir = 'asc'
    }
  }, 1000)

  let hourlySection = false

  import Hourly from './Hourly.svelte'
  import Question from './Question.svelte'
  import { onMount } from 'svelte'

  onMount(() => {
    let scorecard = document.querySelector('.scorecard-wrap')
    window.addEventListener('scroll', (event) => {
      var distanceToTop = scorecard.getBoundingClientRect().top
      if (distanceToTop < 0) {
        sticky = true
      } else {
        sticky = false
      }
    })
  })
</script>

<main>
  <div class="outlier-logo">
    <img src="/outlier-logo.png" alt="The Outlier Logo" />
  </div>
  <!-- end of scorecard -->
  <div class="logo">Blackout</div>
  <div class="text text-top">A loadshedding quiz</div>
  <div class="score-wrap">
    <div class="score">
      <img
        transition:fade
        src={lightarray === 0 ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />

      <img
        src={lightarray === 1 ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />
      <img
        src={lightarray === 2 ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />
      <img
        src={lightarray === 3 ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />
      <img
        src={lightarray === 4 ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />
      <div class="text white-text">Can you keep the lights on?</div>
      <!-- <div class="top-explanation">
        Answer 5 quiz questions to keep the light bulbs burning.
      </div> -->
    </div>
  </div>

  <div class="scorecard-wrap">
    <div class="scorecard {sticky ? 'sticky' : 'unsticky'}">
      <img
        class={($answersTaken[0] === true) & ($scoreAnswers[0] === 'incorrect')
          ? 'answer-wrong'
          : ''}
        src={$scoreAnswers[0] === 'correct' ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />

      <img
        class={($answersTaken[1] === true) & ($scoreAnswers[1] === 'incorrect')
          ? 'answer-wrong'
          : ''}
        src={$scoreAnswers[1] === 'correct' ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />
      <img
        class={($answersTaken[2] === true) & ($scoreAnswers[2] === 'incorrect')
          ? 'answer-wrong'
          : ''}
        src={$scoreAnswers[2] === 'correct' ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />
      <img
        class={($answersTaken[3] === true) & ($scoreAnswers[3] === 'incorrect')
          ? 'answer-wrong'
          : ''}
        src={$scoreAnswers[3] === 'correct' ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />
      <img
        class={($answersTaken[4] === true) & ($scoreAnswers[4] === 'incorrect')
          ? 'answer-wrong'
          : ''}
        src={$scoreAnswers[4] === 'correct' ? 'bulb-lit.svg' : 'bulb-unlit.svg'}
        alt="blulb"
      />
    </div>
  </div>

  <div class="introduction">
    How well do you know the dark side? Do you know how many hours of blackouts
    South Africa had last year? Were there more blackouts on Mondays, or over
    weekends? Get all the answers right to keep the lights on.
    <p>
      Using data from <a href="https://sepush.co.za/" target="_blank"
        >Eskom Se Push</a
      > on loadshedding from 2015 to 2021, we've compiled a list of random facts
      about loadshedding in South Africa. See how many you can answer correctly.
    </p>
  </div>
  <div class="explanation">
    <!-- <div class="explain-title">Blackouts? Loadshedding?</div> -->
    <div
      class="explanation-click"
      on:click={() => (showExplanation = !showExplanation)}
    >
      Not familiar with "loadshedding"? Click here
    </div>
    {#if showExplanation}
      <div class="explanation-inner">
        Officially South Africa has "loadshedding", a system of rotating power
        outages to conserve available electricity, which sees areas typically
        shut down for between two and four hours at a time, depending on the
        "stage". Stages range from 1 with less frequent outages to level 4 or
        higher with shutdowns multiple times a day.
      </div>
    {/if}
  </div>
  <div class="question-start">Let's Go ...</div>
  <!-- <div class="explanation">
    
  </div> -->

  <Question qnumber={0} />
  <Question qnumber={1} />

  <Question qnumber={2} />

  <Question qnumber={3} />
  <Question qnumber={4} />

  {#if $completed}
    <div class="score-text">
      Your Score: {finalScore}/5
    </div>
    <div class="score-wrap score-final">
      <div class="score">
        <img
          src={$scoreAnswers[0] === 'correct'
            ? 'bulb-lit.svg'
            : 'bulb-unlit.svg'}
          alt="blulb"
        />

        <img
          src={$scoreAnswers[1] === 'correct'
            ? 'bulb-lit.svg'
            : 'bulb-unlit.svg'}
          alt="blulb"
        />
        <img
          src={$scoreAnswers[2] === 'correct'
            ? 'bulb-lit.svg'
            : 'bulb-unlit.svg'}
          alt="blulb"
        />
        <img
          src={$scoreAnswers[3] === 'correct'
            ? 'bulb-lit.svg'
            : 'bulb-unlit.svg'}
          alt="blulb"
        />
        <img
          src={$scoreAnswers[4] === 'correct'
            ? 'bulb-lit.svg'
            : 'bulb-unlit.svg'}
          alt="blulb"
        />
        <div class="text bottom-text">
          {#if finalScore === 5}
            Congratulations! You know your loadshedding!
          {:else if finalScore > 2}
            Not bad, you're not completely in the dark.
          {:else}
            Oh well, better luck next time.
          {/if}
        </div>
      </div>
    </div>
  {/if}
  <div class="sharer">
    Share this quiz with your friends! <a
      href="https://twitter.com/intent/tweet?text=How%20well%20do%20you%20know%20loadshedding?%20Test%20your%20knowledge%20of%20the%20dark%20side%20with%20a%20quiz.%20https://blackout.theoutlier.co.za"
      target="_blank"><img src="./twitter.svg" alt="Twitter Link" /></a
    >
    or
    <a
      href="https://www.facebook.com/sharer/sharer.php?u=https://blackout.theoutlier.co.za"
      target="_blank"><img src="./facebook.svg" alt="Facebook Link" /></a
    ><br />
    If you enjoyed this subscribe to our newsletter for more quizzes and data stories:
    <a href="https://newsletter.theoutlier.co.za" target="_blank">Subscribe</a>
  </div>
</main>

<style>
  .sharer {
    background: var(--background);
    padding: 30px;
    color: #fff;
    padding-bottom: 50px;
    font-size: 01rem;
    text-align: center;
  }
  .sharer a {
    color: #fff;
    text-decoration: underline;
  }
  .outlier-logo {
    width: 100%;
    text-align: center;
    background: var(--background);
    padding-top: 10px;
  }
  .outlier-logo img {
    width: 200px;
  }
  .answer-wrong {
    opacity: 0.2;
  }
  :root {
    --background: rgb(192, 0, 0);
  }
  .logo {
    font-family: 'Alfa Slab One', Arial, Helvetica, sans-serif;
    font-size: 5rem;
    padding: 80px 0px 20px;
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background: var(--background);

    padding-top: 70px;
    color: #000;
    text-shadow: 0px 5px 30px #ffd230;
    text-transform: uppercase;
  }
  .white-text {
    font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: #ffd230;
    text-shadow: 0px 0px 7px #000;
    font-size: 2rem;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .text-top {
    font-family: 'Alfa Slab One', Arial, Helvetica, sans-serif;
    color: #000;
    /* position: relative; */
    background: var(--background);
    width: 100%;
    text-align: center;
    font-size: 2.1rem;
    padding-top: 30px;
    padding-bottom: 30px;
    text-shadow: 0px -10px 30px #ffd230;
  }
  /* .fun {
    position: absolute;
    top: 0px;
    left: 0px;
    color: green;
  } */
  .top-explanation {
    margin-top: 10px;
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.7);
  }
  .score-wrap {
    position: relative;
    /* border: solid 1px green; */
    /* min-height: 220px; */
  }
  .score {
    position: relative;

    text-align: center;
    width: 100%;
    pointer-events: none;
    /* border-bottom: solid 1px #eee; */
    background: var(--background);

    /* padding-bottom: 20px; */
    padding-top: 10px;
    z-index: 300;
  }
  .score img {
    width: 70px;
  }

  img.text {
    width: 100%;
    max-width: 500px;
    margin-top: 30px;
    transition: all 1s;
  }

  .sticky {
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .sticky img.text {
    max-width: 400px;
    margin-top: 5px;
  }

  .introduction {
    width: 90%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    /* position: relative; */
    top: -100px;
    text-align: center;
    padding-top: 50px;
  }

  .explanation {
    /* min-height: 300px; */

    width: 90%;
    max-width: 800px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;
    /* border-bottom: solid 1px #eee; */
  }
  .explanation-inner {
    /* max-width: 400px; */
    /* width: 300px; */
    margin-left: auto;
    margin-right: auto;
    /* border: solid 1px red; */
    /* font-size: 0.9rem; */
    margin-top: 10px;
    /* color: rgb(182, 182, 182); */
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  .explanation-click {
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-top: 20px;
    border: solid 1px lightgray;
    background: rgb(240, 240, 240);
    border-radius: 10px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    background: var(--background);
    color: #fff;
    font-weight: 700;
  }
  .explanation-click:hover {
    background: rgb(212, 212, 212);
  }

  main {
    /* padding-bottom: 300px; */
  }
  .question-start {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 700;
  }
  .text-top-holder {
    padding-top: 0px;
    padding-bottom: 20px;
    background: #c40000;
    width: 100%;
    text-align: center;
  }

  .scorecard-wrap {
    position: relative;
    min-height: 70px;
    /* border: solid 1px green; */
  }
  .scorecard {
    background: var(--background);
    /* border-top: solid 1px #000; */
    color: #fff;

    padding: 5px 10px;
    z-index: 100;
    width: 100%;
  }
  .scorecard img {
    width: 30px;
  }

  .bottom-text {
    padding: 20px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .score-text {
    color: #fff;
    font-size: 1.5rem;
    background: var(--background);
    width: 100%;
    text-align: center;
    padding: 10px;
    font-weight: 700;
    font-family: 'Alfa Slab One', Arial, Helvetica, sans-serif;
  }

  @media only screen and (max-width: 700px) {
    .logo {
      font-size: 3rem;
    }
    .text-top {
      font-size: 1.8rem;
      padding-top: 10px;
    }
    .score img {
      width: 50px;
    }
    .white-text {
      font-size: 1.5rem;
    }
    .scorecard {
      padding: 0px;
      padding-top: 10px;
    }
  }
</style>
