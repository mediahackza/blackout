<script>
  import { fly, fade, scale, slide } from 'svelte/transition'
  let formatThousands = new Intl.NumberFormat()
  let ygrid = [500, 1000, 1500]
  import { lbm } from './loadshedding-by-month-2021.js'
  import * as d3 from 'd3'

  let width = 300
  let height = 300
  $: height = width * 0.2
  $: xScale = d3
    .scaleBand()
    .domain(lbm.map((d) => d.month))
    .range([0, width])
    .padding([0.1])
  $: yScale = d3
    .scaleLinear()
    .domain([0, d3.max(lbm, (d) => d.count)])
    .range([0, height - 50])

  let margin = { top: 20, right: 20, bottom: 30, left: 40 }
</script>

<div class="chart-holder" bind:clientWidth={width}>
  <div class="chart-title">Loadshedding hours during 2021</div>
  <svg {width} {height}>
    <filter id="noise2">
      <feTurbulence baseFrequency="0.005" />
      <feDisplacementMap in="SourceGraphic" scale="10" />
    </filter>
    {#each ygrid as y}
      <line
        x1={0}
        y1={yScale(y)}
        x2={width}
        y2={yScale(y)}
        stroke="lightgray"
        class="y-grid"
      />
    {/each}

    {#each lbm as year}
      <text
        class="x-axis"
        x={xScale(year.month) + xScale.bandwidth() / 2}
        y={height - margin.bottom + 20}>{year.month}</text
      >
      <rect
        filter="url(#noise2)"
        transition:fly={{ y: 200, duration: 1000 }}
        x={xScale(year.month)}
        y={height - margin.bottom - yScale(year.count)}
        width={xScale.bandwidth()}
        height={yScale(year.count)}
        fill="#FFD230"
        stroke="none"
        stroke-width="3"
        style="transform: translate(4px, -4px)"
      />
      <rect
        filter="url(#noise2)"
        transition:fly={{ y: 200, duration: 1000 }}
        x={xScale(year.month)}
        y={height - margin.bottom - yScale(year.count)}
        width={xScale.bandwidth()}
        height={yScale(year.count)}
        fill="none"
        stroke="#000"
        stroke-width="3"
      />
      <text
        transition:fly={{ y: 200, duration: 1000 }}
        class="chart-label"
        x={xScale(year.month) + xScale.bandwidth() / 2}
        y={height - margin.bottom - 5 - yScale(year.count)}
        >{formatThousands.format(year.count)}</text
      >
    {/each}
  </svg>
</div>

<style>
  .x-axis {
    text-anchor: middle;
    font-size: 0.9rem;
  }
  .bar {
    fill: rgb(93, 168, 243);
    stroke: #000;
    stroke-width: 2px;
  }
  .y-grid {
    stroke-dasharray: 2, 2;
  }
  .chart-label {
    font-size: 0.9rem;
    text-anchor: middle;
  }
  .chart-title {
    font-weight: 700;
  }
</style>
