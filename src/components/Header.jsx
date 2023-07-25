import { useContext } from 'react';
import UserContext from '../context/userContext';

const Header = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <div className="d-flex justify-content-between p-4">
      <h3>
        <img
          style={{ height: '50px' }}
          src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
        />
        <span className="mx-3">CoinMania</span>
      </h3>
      {user && <button onClick={logoutUser}>Çıkış Yap</button>}
    </div>
  );
};

export default Header;
