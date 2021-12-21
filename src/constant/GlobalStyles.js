import { createGlobalStyle } from 'styled-components';

import Fonts from './Fonts';
import Sizes from './Sizes';
import Colors from './Colors';

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  ==START==
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: ${Fonts.poppins};
    overflow: hidden;
  }

  /* p, span, input, textarea {
    line-height: 18px;
  } */

  .userback-button {
    transform: rotate(0deg) !important;
    bottom: 0px !important;
    top: unset !important;
    right: 20px !important;
    /* display: none !important; */
    background: ${Colors.grey.blueishGrey} !important;
    color: ${Colors.grey.greyOut} !important;

    @media ${Sizes.sm} {
      display: none !important;
    }

    svg {
      transform: rotate(0deg) !important;
      path {
        fill: ${Colors.grey.greyOut} !important;

      }
    }
  }

  .userback-controls  {
    background: ${Colors.black.default} !important;
  }

  .userback-overlay-boundary-top,
  .userback-overlay-boundary-bottom,
  .userback-overlay-boundary-left,
  .userback-overlay-boundary-right {
    background: ${Colors.yellow.default} !important;

  }



  .userback-controls-close, .userback-toolbar-close {
    background: ${Colors.yellow.default} !important;
    path {
      fill: ${Colors.black.default} !important;
    }
  }

  ubroutemenu {
    border: 1px solid ${Colors.grey.blueishGrey} !important;
    border-radius: 10px !important;
    margin-bottom: 20px !important;

    svg {
      path {
        fill: ${Colors.white.newWhite} !important;
      }
    }
    ubdiv {
      color: ${Colors.white.newWhite} !important;
    }
  }

  #userback_button_container .userback-controls ubroutemenu.userback-feedback-type-draw:hover, #userback_button_container .userback-controls ubroutemenu.userback-feedback-type-video:hover, #userback_button_container .userback-controls ubroutemenu.userback-feedback-type-form:hover, #userback_button_container .userback-controls ubroutemenu.userback-feedback-type-help:hover, #userback_button_container .userback-controls ubroutemenu.userback-feedback-type-other:hover {
    background: ${Colors.grey.cardGrey} !important;

  }

  

  .feedback-btn {
    position: absolute;
    bottom: 80px;
    left: -50px;
    /* z-index: 1000; */
    /* left: 80px; */
    /* bottom: 20px; */
    /* top: 0px;
    right: 0px; */
    /* transform: rotate(-90deg); */
    /* width: fit-content; */
    /* width: 80px; */
    /* height: 40px; */
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.grey.blueishGrey};
    width: 40px;
    height: 40px;
    border-radius: 100%;

    /* box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.3); */

    box-shadow: 0px 4px 10px rgba(91, 97, 113, 0.3);

    svg {
      float: left;
      width: 16px;
      height: 16px;
      /* margin: 12px 4px 0 0; */

      path {
        fill: ${Colors.grey.greyOut} !important;
      }
    }

    .feedback-text {
      background: ${Colors.yellow.default};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 30px;
    }
  }

  body, html, .app {
    height: 100%;
  }

  ol, ul {
    // list-style: none;
    padding-left: 16px;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  ==END==
  */

  .p-0 {
    padding: 0 !important;
  }


  strong { font-weight: bold; }

  em { font-style: italic; }

  sup {
    vertical-align: super;
    font-size: smaller;
  }

  @media ${Sizes.md}{
    .md-p-0 {
      padding: 0 !important;
    }
  }

  .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.8) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 40px;
    height: fit-content;
    height: 100%;
    min-height: -webkit-fill-available;
    position: fixed !important;
    z-index: 102;
  }

  .ReactModal__Content {
    position: unset !important;
    inset: unset !important;
    border: none !important;
    background: unset !important;
    overflow: auto !important;
    border-radius: unset !important;
    outline: none !important;
    padding: unset !important;
    height: fit-content;
  }

  input, input[type="text"] {
    background: ${Colors.grey.cardGrey};
    color: ${Colors.grey.default};
    border: unset;
    box-shadow: unset;
    outline: none;
    width: 100%;
  }

  // react-draft-wysiwyg style
  .draftjs-wrapper {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
  }

  .draftjs-editor {
    padding: 15px 20px;
    font-size: ${Fonts.sizes.m};
    color: ${Colors.white.default};
    line-height: 21px;
    max-height: 130px;
    overflow-y: scroll;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;

    .public-DraftStyleDefault-block {
      margin: 0px;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
      margin: 10px 0px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px ${Colors.blue.opacity10};
    }
  }

  .DraftEditor-root, .DraftEditor-editorContainer {
    height: fit-content;
  }

  .draftjs-toolbar {
    background: ${Colors.grey.tagGrey};
    border: unset;
    border-radius: 0px 0px 10px 10px;
    height: 46px;
    margin: unset;
    padding: 0px 16px;
    display: flex;
    align-items: center;
    grid-gap: 11px;

    .customOptionWrapper {
      display: flex;
      align-items: center;
      grid-gap: 11px;
      margin: unset;
    }

    .rdw-option-wrapper {
      background: ${Colors.grey.tagGrey};
      border: unset;
      height: 28px;
      width: 28px;
      border-radius: 100%;
      min-width: unset;
      padding: unset;
      margin: unset;
      box-shadow: unset;
      transition: all 0.2s;

      &:hover {
        opacity: 0.5;
      }

      &[aria-selected="true"] {
        background: ${Colors.white.default};
        // -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
        // -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
        // box-shadow: inset 0px 0px 5px #c1c1c1;
        // outline: none;
      }
    }

    .rdw-link-modal {
      background: ${Colors.grey.greyOut};
      // width: fit-content;
      top: unset;
      border-radius: 10px;
      border: none;
      box-shadow: none;

      .rdw-link-modal-label {
        color: ${Colors.white.default};
      }

      .rdw-link-modal-input {
        background: ${Colors.grey.tagGrey};
        width: 100%;
        width: -moz-available;
        width: -webkit-fill-available;
        width: fill-available;
        color: ${Colors.white.default};
        font-size: ${Fonts.sizes.s};
        border: none;
        border-radius: 5px;
        padding: 0px 10px;
      }

      .rdw-link-modal-target-option {
        display: flex;
        align-items: center;
        padding: 0px 5px;
        grid-gap: 5px;

        input {
          width: fit-content;

          &::checked {

          }
        }

        span {
          color: ${Colors.white.default};
        }
      }
    }
  }

  .public-DraftEditorPlaceholder-root {
    color: #757573;
    font-size: 14px;
    font-family: 'Arial';
  }

  .wysiwyg-answer-btn {
    position: absolute;
    bottom: 7px;
    right: 8px;

    button {
      border-radius: 5px;
    }
  }

  .__react_component_tooltip {
    border-radius: 10px !important;
    padding: 10px !important;
    background: ${Colors.grey.blueishGrey} !important;
    font-weight: 700;
  }

  .__react_component_tooltip.place-left::after {
    border-left-color: ${Colors.grey.blueishGrey} !important;
  }

  .__react_component_tooltip.place-right::after {
    border-right-color: ${Colors.grey.blueishGrey} !important;
    // background: ${Colors.grey.tagGrey} !important;
  }

  .coverRender {
    position: fixed;
    width: 100vw;
    height: calc(100 * var(--vh));
    background: ${Colors.black.default};
    z-index: 100000000000;
  }

  .Toastify__toast-container {
    width: unset;
    padding: unset;
    left: 25%;
    transform: unset;
    margin-top: 80px;

    @media ${Sizes.sm} {
      left: 50%;
      transform: translateX(-50%);
      width: calc(100vw - 40px);
    }

    .Toastify__toast--default {
      background: unset;
      color: unset;
      padding: 0;
      @media ${Sizes.sm} {
        width: 100%;
      }
      button {
        display: none;
      }
      .Toastify__toast-body {
        padding: unset;
        @media ${Sizes.sm} {
          width: 100%;
        }
      }
    }
  }

  p, input, span, div {
    letter-spacing: 0.5px;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${Colors.grey.blueishGrey};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${Colors.grey.blueishGrey};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${Colors.grey.blueishGrey};
  }

`;
