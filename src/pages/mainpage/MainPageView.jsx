import millify from 'millify';
import React from 'react';
import Header from '../../components/Header';

const MainPageView = ({ coins }) => {
  return (
    <>
      <Header />
      <div className="p-5">
        {/* veriler yüklenirken */}
        {coins.length === 0 && <p>Yükleniyor...</p>}
        {/* yüklendkten sonra */}
        <table className="table table-dark">
          <thead>
            <tr>
              <th>sıra</th>
              <th>coin</th>
              <th>fiyat</th>
              <th>market hacmi</th>
              <th>değişim (24s)</th>
              <th>%değişim (24s)</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr>
                <td>{coin.rank}</td>
                <td>
                  <span className="text-warning px-2">
                    {coin.symbol}
                  </span>
                  <span>{coin.name}</span>
                </td>
                <td>{millify(coin.priceUsd)}</td>
                <td>{millify(coin.marketCapUsd)}</td>
                <td>{millify(coin.volumeUsd24Hr)}</td>
                <td>%{millify(coin.changePercent24Hr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainPageView;
