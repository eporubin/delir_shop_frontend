import React from 'react';
import './App.css';
import ShowCard from '../ShowCardComponent/ShowCard';
import Footer from '../../Footer/Footer';
import LandingHero from '../LandingHero/LandingHero';
import { Parallax, Background } from 'react-parallax';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <LandingHero />
      <div className='LandingContent'>
        <div className='container marketing mt-5 pt-5 mb-3 pb-3'>
          <div className='row'>
            <ShowCard name='Cakes' imageName='cake.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />
            <ShowCard name='Marshmellows' imageName='zefire.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />
            <ShowCard name='Cookies' imageName='cookies.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />   
          </div>
        </div>
      </div>
      {/* The parallax container begins */}
     
      <Parallax
        bgImage="/images/cake_landing.jpg"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    left: '50%',
                    top: '20%',
                    width: percentage * 1000,
                    height: percentage * 1000,
                }}
            />
        )}
      >
      <p>
        <div className="SeasonSpecial m-5 p-5">
          <div className='container'>
            <div className='row'>
                <h1 className='text-center'>
                  <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Discover our birthday favorites..!')
                                .callFunction(() => {
                                     console.log('String typed out!');
                                })
                                .pauseFor(10000)
                                .deleteAll()
                                .callFunction(() => {
                                     console.log('All strings were deleted');
                                })
                                .start();
                            }}
                            options={{
                                loop: true,
                            }}
                  />
                </h1>
            </div>
          </div>
        </div> 
      </p>
    </Parallax>

    <div className='LandingContent'>
      <div className='container marketing mt-5 pt-5 mb-3 pb-3'>
          <div className='row'>
            <ShowCard name='Cheesecakes' imageName='cake.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />
            <ShowCard name='Macaroons' imageName='zefire.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />
            <ShowCard name='Crapes' imageName='cookies.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />   
          </div>
        </div>
    </div>

    <Parallax
        bgImage="/images/macaroons.jpg"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    right: '50%',
                    top: '20%',
                    width: percentage * 1000,
                    height: percentage * 1000,
                }}
            />
        )}
    >
      <p>
        <div className="SeasonSpecial m-5 p-5">
          <div className='container'>
            <div className='row'>
              <h1 className='text-center'>
                <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Share the joy of Delir Boxes...!')
                                .callFunction(() => {
                                     console.log('String typed out!');
                                })
                                .pauseFor(10000)
                                .deleteAll()
                                .callFunction(() => {
                                     console.log('All strings were deleted');
                                })
                                .start();
                            }}
                            options={{
                                loop: true,
                            }}
                />
              </h1>
            </div>
          </div>
        </div> 
      </p>
    </Parallax>
    <div className='LandingContent'>
      <div className='container marketing mt-5 pt-5 mb-3 pb-3'>
          <div className='row'>
            <ShowCard name='Cupcakes' imageName='cake.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />
            <ShowCard name='Pies' imageName='zefire.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />
            <ShowCard name='Aperitives' imageName='cookies.jpg' description='Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.' />   
          </div>
        </div>
    </div>
    <Footer />
    </div>

  );
}

export default App;
