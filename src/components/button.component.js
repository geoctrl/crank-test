import { Scoped, k, a } from 'kremling-crank';

export function Button({ children, type = 'secondary', onClick }) {
  return (
    <Scoped css={css}>
      <button className={`btn btn--${type}`} onclick={onClick}>
        {children}
      </button>
    </Scoped>
  );
}

const css = k`
  .btn {
    height: 3.2rem;
    line-height: 1rem;
    border-radius: $base-border-radius;
    padding: 0 1rem;
    cursor: pointer;
    font-family: $base-font-family;
    font-size: $base-font-size;
    transition: background-color 100ms ease, border-color 100ms ease, color 100ms ease;
    
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }

  .btn--primary {
    background-color: $color-primary;
    border: none;
    color: #fff;
    
    &:hover, &:focus {
      background-color: darken($color-primary, 10%);
    }
    
    &:active {
      background-color: darken($color-primary, 15%);
    }
  }

  .btn--secondary {
    background-color: $color-grey-25;
    border: solid .1rem $color-grey-100;
    color: $color-grey-500;
    
    &:hover, &:focus {
      background-color: darken($color-grey-25, 10%);
      border-color: darken($color-grey-100, 10%);
    }

    &:active {
      background-color: darken($color-grey-25, 15%);
      border-color: darken($color-grey-100, 15%);
    }
  }
`;