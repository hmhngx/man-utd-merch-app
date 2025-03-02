import './App.css';
import { useState } from 'react';

const players = [
  {
    name: 'Bruno Fernandes',
    position: 'Midfielder',
    image: "/photos/bruno.png",
    merchLink: 'https://store3.fanatics-intl.com/en/premier-league/bruno-fernandes/o-10423739+a-2350449049+z-93-3812483602',
  },
  {
    name: 'Joshua Zirkzee',
    position: 'Forward',
    image: '/photos/ziczac.png',
    merchLink: 'https://eu.lids.com/en/premier-league/manchester-united/manchester-united-epl-adidas-heim-kit-mini-2024-25-mit-aufdruck-zirkzee-11/o-54752695+t-25421246+p-6859301699+z-8-4100483252',
  },
  {
    name: 'Alejandro Garnacho',
    position: 'Forward',
    image: '/photos/ag17.png',
    merchLink: 'https://store.manutd.com/en-us/p/manchester-united-2425-home-jersey-with-garnacho-17-epl-printing-and-badge-2092',
  },
  {
    name: 'Rasmus Højlund',
    position: 'Forward',
    image: '/photos/rasmus.png',
    merchLink: 'https://eu.lids.com/en/?query=rasmus%20h%C3%B8jlund&_ref=p-SRP:m-TYPEAHEAD:i-r-0c-0:po-0&tarol=tag%3Aa-43652%3Bhint%3At-3812',
  },
  {
    name: 'Kobbie Mainoo',
    position: 'Midfielder',
    image: '/photos/mainoo.png',
    merchLink: 'https://eu.lids.com/en/?query=kobbie%20mainoo&_ref=p-SRP:m-TYPEAHEAD:i-r-0c-0:po-0&tarol=tag%3Aa-42966%3Bhint%3At-3812',
  },
  {
    name: 'Casemiro',
    position: 'Midfielder',
    image: '/photos/casemiro.png',
    merchLink: 'https://eu.lids.com/en/?query=casemiro&_ref=p-SRP:m-TYPEAHEAD:i-r-0c-0:po-0&tarol=tag%3Aa-9433%3Bhint%3At-3812',
  },
  {
    name: 'Lisandro Martínez',
    position: 'Defender',
    image: '/photos/licha.png',
    merchLink: 'https://eu.lids.com/en/?query=lisandro%20mart%C3%ADnez&_ref=p-SRP:m-TYPEAHEAD:i-r-0c-0:po-0&tarol=tag%3Aa-21773%3Bhint%3At-3812',
  },
  {
    name: 'André Onana',
    position: 'Goalkeeper',
    image: '/photos/onana.png',
    merchLink: 'https://eu.lids.com/en/premier-league/manchester-united/manchester-united-epl-torwart-heimtrikot-2023-24-mit-aufdruck-onana-24/o-21971540+t-25428935+p-91112768266+z-9-3238160260?_ref=p-SRP:m-GRID:i-r0c0:po-0',
  },
  {
    name: 'Manuel Ugarte',
    position: 'Midfielder',
    image: '/photos/ugarte.png',
    merchLink: 'https://www.uksoccershop.com/shop-by-player/manuel-ugarte',
  },
  {
    name: 'Diogo Dalot',
    position: 'Defender',
    image: '/photos/dalot.png',
    merchLink: 'https://eu.lids.com/en/?query=dalot&_ref=p-PDP:m-SEARCHt',
  },
  {
    name: 'Luke Shaw',
    position: 'Defender',
    image: '/photos/shaw.png',
    merchLink: 'https://eu.lids.com/en/?query=luke%20shaw&_ref=p-PDP:m-TYPEAHEAD:i-r-1c-0:po-1&tarol=tag%3Aa-9399%3Bhint%3At-3544',
  },
  {
    name: 'Matthijs de Ligt',
    position: 'Defender',
    image: '/photos/de ligt.png',
    merchLink: 'https://www.worldsoccershop.com/shop/players/matthijs-de-ligt',
  },
];

function App() {
  const [hoveredPlayer, setHoveredPlayer] = useState(null);

  return (
    <>
      <div className="header">
        <a href="https://www.manutd.com" target="_blank" rel="noopener noreferrer">
          <img 
            className="logo" 
            src="/photos/man utd logo.png" 
            alt="Manchester United Logo"
          />
        </a>
      </div>
      <div className="title-container">
  <h1 
    onMouseEnter={() => setHoveredPlayer('title')} 
    onMouseLeave={() => setHoveredPlayer(null)}
    style={{
      transform: hoveredPlayer === 'title' ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.3s ease'
    }}
  >
    Man Utd Players Merch
  </h1>
  <p className="subtitle">
    Click on a player's photo to visit their merchandise page
  </p>
</div>
      <div className="players-container">
        {players.map((player, index) => (
          <div 
            key={index} 
            className="players-item"
            onMouseEnter={() => setHoveredPlayer(index)}
            onMouseLeave={() => setHoveredPlayer(null)}
          >
            <a 
              href={player.merchLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={player.image}
                alt={player.name}
                className="players-image"
                onError={(e) => {
                  console.log(`Image failed to load for ${player.name}`);
                  e.target.src = 'https://via.placeholder.com/300x225?text=Image+Not+Found';
                }}
                style={{
                  transform: hoveredPlayer === index ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </a>
            <h3>{player.name}</h3>
            <p 
              className="cuisine"
              style={{
                transform: hoveredPlayer === index ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              {player.position}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;