import { Global, css } from '@emotion/react';
import { FC } from 'react';

interface Props {
  scrollbarColor?: string;
}

const _NormalizerStyled: FC<Props> = ({ scrollbarColor }) => (
  <Global
    styles={css`
      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
      }

      *:focus {
        outline: none;
      }
      :root {
        font-size: 16px;
      }
      html {
        width: 100%;
        overflow-x: hidden;
      }
      body {
        width: 100%;
      }
      #__next {
        width: 100%;
        overflow-x: hidden;
      }
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figure,
      p,
      pre {
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      ol,
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: none;
        overflow: auto;
      }

      img {
        border-style: none;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      [type='button'],
      [type='reset'],
      [type='submit'],
      button {
        -webkit-appearance: button;
        -webkit-tap-highlight-color: transparent;
      }
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-thumb {
        background: ${scrollbarColor || '#f0a58b'};
      }
    `}
  />
);

export default _NormalizerStyled;
