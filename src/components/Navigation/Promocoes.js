import { Badge } from 'react-bootstrap';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const Promocoes = () => {
  return (
    <>
     <div>
        <h1>
          Promoções da Semana <Badge pill bg="danger"><FavoriteRoundedIcon /></Badge>
        </h1>
      </div>
    </>
  );
}

export default Promocoes;

