<script>
  import Hourly from './Hourly.svelte'
  import Q2chart from './Q2chart.svelte'
  import Q3chart from './Q3chart.svelte'
  import Q4chart from './Q4chart.svelte'
  import { questions, scoreAnswers, answersTaken, completed } from './store.js'
  export let qnumber = 0

  function checkQuestion(ques, selection) {
    if ($questions[ques].answer === $questions[ques][selection]) {
      // answers[ques - 1] = 'correct'
      $questions[ques].correct = true
      $scoreAnswers[ques] = 'correct'
    } else {
      // answers[ques - 1] = 'incorrect'
      $scoreAnswers[ques] = 'incorrect'
    }
    $questions[ques].answered = true
    $questions[ques].selection = selection
    $answersTaken[ques] = true
    // chech if complete
    if ($answersTaken.every((e) => e === true)) {
      $completed = true
    }
  }
</script>

<!-- {$questions[qnumber].answered && $questions[qnumber].correct
    ? 'right-answer'
    : ''} {$questions[qnumber].answered && !$questions[qnumber].correct
    ? 'wrong-answer'
    : ''} -->

<!-- QUESTION BLOCK -->
<div class="question ">
  <div class="question-title">
    <!-- <div class="q-label">{$questions[qnumber].q}</div> -->
    <!-- <br /> -->
    {$questions[qnumber].q} - {$questions[qnumber].question}
  </div>
  {#if $questions[qnumber].tip.length > 0}
    <div class="question-tip">
      <div class="tip-icon">
        <img src="/info-reverse.svg" alt="Tip Icon" />
      </div>

      {$questions[qnumber].tip}
    </div>
  {/if}
  <div class="options">
    <div class="option">
      <div
        class="option-box {$questions[qnumber].selection === 'option1'
          ? 'option-box-selected'
          : ''} {$questions[qnumber].answered ? 'option-box-answered' : ''}"
        on:click={() => checkQuestion(qnumber, 'option1')}
      />
      <div class="option-answer">{$questions[qnumber].option1}</div>
    </div>
    <div class="option">
      <div
        class="option-box {$questions[qnumber].selection === 'option2'
          ? 'option-box-selected'
          : ''} {$questions[qnumber].answered ? 'option-box-answered' : ''}"
        on:click={() => checkQuestion(qnumber, 'option2')}
      />
      <div class="option-answer">{$questions[qnumber].option2}</div>
    </div>
    <div class="option">
      <div
        class="option-box {$questions[qnumber].selection === 'option3'
          ? 'option-box-selected'
          : ''} {$questions[qnumber].answered ? 'option-box-answered' : ''}"
        on:click={() => checkQuestion(qnumber, 'option3')}
      />
      <div class="option-answer">{$questions[qnumber].option3}</div>
    </div>
    <div class="option">
      <div
        class="option-box {$questions[qnumber].selection === 'option4'
          ? 'option-box-selected'
          : ''} {$questions[qnumber].answered ? 'option-box-answered' : ''}"
        on:click={() => checkQuestion(qnumber, 'option4')}
      />
      <div class="option-answer">{$questions[qnumber].option4}</div>
    </div>
  </div>
  {#if $questions[qnumber].correct === true && $questions[qnumber].answered === true}
    <div class="answer right-answer">
      {@html $questions[qnumber].correctResponse}
    </div>
  {/if}

  {#if $questions[qnumber].correct === false && $questions[qnumber].answered === true}
    <div class="answer wrong-answer">
      {@html $questions[qnumber].incorrectResponse}
    </div>
  {/if}

  <!-- {#if $questions[qnumber].answered === true}
    {@html hourGraphic}
  {/if} -->

  {#if qnumber === 1 && $questions[qnumber].answered === true}
    <Q2chart />
  {/if}

  {#if qnumber === 3 && $questions[qnumber].answered === true}
    <Q3chart />
    <!-- <Hourly /> -->
  {/if}

  {#if qnumber === 4 && $questions[qnumber].answered === true}
    <Q4chart />
    <!-- <Hourly /> -->
  {/if}
</div>

<!-- {#if hourlySection}
  <div class="hourly">
    <Hourly />
  </div>
{/if} -->

<!-- QUESTION BLOCK -->
<style>
  .question {
    width: 90%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    line-height: 2rem;
    padding: 15px;
    border: solid 1px lightgray;
    margin-bottom: 50px;
    background: #fff;
  }
  .question-title {
    font-size: 1.3rem;
    font-family: 'Alfa Slab One', Arial, Helvetica, sans-serif;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    background-image: url('/highlight.svg');
    background-size: contain;
    background-position: center center;
    line-height: 1.8rem;
  }

  .question-tip {
    line-height: 1.5rem;
    margin-bottom: 15px;
    margin-top: 10px;
    color: gray;
    font-size: 1rem;
  }
  .tip-icon {
    z-index: -100;
    /* opacity: 0.5; */
    display: inline-block;
    max-height: 10px;
  }
  .tip-icon img {
    max-height: 30px;
    transform: translate(0px, 5px);
  }
  .q-label {
    color: rgb(218, 87, 0);

    padding: 5px;
    /* border: solid 1px #ffcd19; */
    margin-bottom: 15px;
    display: inline-block;
    /* -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75); */
    font-size: 2rem;
  }

  .options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-weight: 700;
    margin-top: 20px;
  }
  .option {
    /* border: solid 1px red; */
    text-align: center;
  }

  .option-box {
    margin-left: auto;
    margin-right: auto;
    width: 20px;
    height: 20px;
    /* border: solid 1px #fff; */
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;
    /* background: #000; */
    border: solid 3px black;
  }
  .option-box-selected {
    background: var(--goldenrod);
  }
  .option-box:hover {
    background: var(--goldenrod);
  }

  .option-box-answered {
    pointer-events: none;
  }
  .option-answer {
    font-size: 1rem;
    line-height: 1.2rem;
  }
  .answer {
    margin-top: 5px;

    padding: 10px;
    line-height: 1.5rem;
    /* font-size: 1.2rem; */
  }

  .wrong-answer {
    background: rgb(211, 70, 70);
    color: #fff;
  }
  .right-answer {
    background: rgb(0, 185, 0);
    color: #fff;
  }
  .answered {
    background: green;
  }

  @media only screen and (max-width: 700px) {
    .option-answer {
      font-size: 0.9rem;
    }
  }
</style>
