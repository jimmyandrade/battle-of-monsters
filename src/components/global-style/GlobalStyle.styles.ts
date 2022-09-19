import { createGlobalStyle } from 'styled-components'

export const GlobalStyleRoot = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    background-color: #FAFAFA;
    color: #000000;
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }
  
  body {
    background-color: inherit;
  }
  
  body {
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
  
  h1, h2, legend {
    margin-block: 0;
  }
  
  h1 {
    font-size: var(--large-font-size);
    line-height: 1.17194em;
    min-height: var(--large-font-size);
    min-width: 300px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }
  
  fieldset {
    border-color: transparent;
    border-image: none;
    border-style: none;
    border-width: 0;
    margin-inline: 0;
    padding-block: 0;
    padding-inline: 0;
  }
  
  legend {
    font-size: 24px;
    line-height: 1.172083em;
    margin-block-end: 14px;
    min-height: 28px;
    min-width: 214px;
  }
  
  img.dead-unicorn-image {
    background-color: #afc108;
  }
  img.old-shark-image {
    background-color: #eb035b;
  }
  img.red-dragon-image {
    background-color: #acffca;
  }
  img.robot-bear-image {
    background-color: #ffdb00;
  }
  img.angry-snake-image {
    background-color: #00c4ff;
  }
  
  #battle-field {
    column-gap: 25px;
    display: grid;
    grid-template-columns: 307px 150px 307px;
  }
  
  #battle-field > div {
    display: flex;
    min-height: 450px;
    justify-content: center;
  }
  
  #battle-field div:first-of-type {
    align-items: center;
    order: 1;
  }
  
  #battle-field div:last-of-type {
    order: 3;
  }
  
  .screen-reader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`
