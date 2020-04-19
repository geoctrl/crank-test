import { Scoped, k } from 'kremling-crank';
import { Button } from './components/button.component';

export function Root() {
  return (
    <Scoped css={css}>
      <div className="root">
        <div className="welcome__container">
          <h3>Welcome</h3>
          <p>This is an example of crankjs using kremling!</p>
        </div>
        <div className="welcome__actions">
          <Button>
            👍
          </Button>
          <Button>
            👎
          </Button>
        </div>
      </div>
    </Scoped>
  )
}

const css = k`
  .root {
    margin: 3.6rem;
    border: solid .1rem $color-grey-100;
    border-radius: $base-border-radius;
    width: 36rem;
  }

  .welcome__container {
    padding: 1.6rem;
  }

  .welcome__actions {
    text-align: right;
    border-top: solid .1rem $color-grey-100;
    padding: .8rem;

    button {
      margin-left: .8rem;
    }
  }
`;