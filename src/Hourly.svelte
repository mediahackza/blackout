<script>
  import { fade, fly, slide } from 'svelte/transition'
  import { onMount } from 'svelte'
  import { hourly } from './hourly.js'

  let calmonths = []
  let promise = false
  let jan = []
  let feb = []
  let mar = []
  let apr = []
  let may = []
  let jun = []
  let jul = []
  let aug = []
  let sep = []
  let oct = []
  let nov = []
  let dec = []

  onMount(() => {
    jan = hourly.filter((d) => d.month === 'January')
    feb = hourly.filter((d) => d.month === 'February')
    mar = hourly.filter((d) => d.month === 'March')
    apr = hourly.filter((d) => d.month === 'April')
    may = hourly.filter((d) => d.month === 'May')
    jun = hourly.filter((d) => d.month === 'June')
    jul = hourly.filter((d) => d.month === 'July')
    aug = hourly.filter((d) => d.month === 'August')
    sep = hourly.filter((d) => d.month === 'September')
    oct = hourly.filter((d) => d.month === 'October')
    nov = hourly.filter((d) => d.month === 'November')
    dec = hourly.filter((d) => d.month === 'December')
  })
</script>

<div class="months-container">
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 200 }}
  >
    <div class="month-title">January</div>
    <div class="month-container">
      {#each jan as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>

  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 100 }}
  >
    <div class="month-title">February</div>
    <div class="month-container">
      {#each feb as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 0 }}
  >
    <div class="month-title">March</div>
    <div class="month-container">
      {#each mar as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 100 }}
  >
    <div class="month-title">April</div>
    <div class="month-container">
      {#each apr as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 200 }}
  >
    <div class="month-title">May</div>
    <div class="month-container">
      {#each may as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 0 }}
  >
    <div class="month-title">June</div>
    <div class="month-container">
      {#each jun as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 0 }}
  >
    <div class="month-title">July</div>
    <div class="month-container">
      {#each jul as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div class="month">
    <div class="month-title">August</div>
    <div class="month-container">
      {#each aug as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 0 }}
  >
    <div class="month-title">September</div>
    <div class="month-container">
      {#each sep as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 0 }}
  >
    <div class="month-title">October</div>
    <div class="month-container">
      {#each oct as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 0 }}
  >
    <div class="month-title">November</div>
    <div class="month-container">
      {#each nov as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
  <div
    class="month"
    transition:fade={{ y: -200, x: -200, duration: 500, delay: 0 }}
  >
    <div class="month-title">December</div>
    <div class="month-container">
      {#each dec as hour, i}
        <div
          class="block {hour.stage === 4 ? 'block4' : ''} {hour.stage === 3
            ? 'block3'
            : ''} {hour.stage === 2 ? 'block2' : ''} {hour.stage === 1
            ? 'block1'
            : ''}"
        />
      {/each}
    </div>
  </div>
</div>

<style>
  .months-container {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* grid-gap: 10px; */
    border: solid 1px green;
  }
  .block {
    width: 4px;
    height: 3px;
    margin: 1px 1px;
    background: rgb(58, 58, 58);
  }
  .month-container {
    margin-left: auto;
    margin-right: auto;
    width: calc(24 * 6px);
    text-align: left;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 0px;
    /* border: solid 1px red; */
  }
  .block4 {
    background: #e31a1c;
  }
  .block3 {
    background: #fd8d3c;
  }
  .block2 {
    background: #fecc5c;
  }
  .block1 {
    background: #ffffb2;
  }
  .month-title {
    color: rgb(170, 170, 170);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
    margin-bottom: 5px;
    letter-spacing: 6px;
  }
  .month {
    padding: 10px;
  }
</style>
