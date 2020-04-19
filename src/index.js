import { renderer } from '@bikeshaving/crank/dom';
import './styles/main.scss';
import { Root } from './root.component';

renderer.render(<Root />, document.querySelector('#app'));
