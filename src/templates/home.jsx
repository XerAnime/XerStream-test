import React from 'react';
import '../css/home.css';

function Home() {
	return (
	<div className="main">
		<div className='HeadContainer'>
		  	<header className='AppHeader'>
				XERSTREAM 
		  	</header>
		  	<p className='AppSubHead'>
				Your gateway to kdrama, anime, manga and news.
		  	</p>
		</div>

		<div className='redirectContainer'>
        	<a href="https://xerstream-six.vercel.app">Kdrama</a>
        	<a href="/anime">Anime</a>
        	<a href="/news">News</a>
        	<a href="/movies">Movies</a>
        	<a href="/mangas" >Mangas</a>
		</div>

	</div>

      <h1 className='py-6 text-3xl font-medium'>About AnimXer.</h1>
        <p className='leading-8'>
          AnimXer is a website where you can watch or stream anime that you
          like with English subtitles, dubbing, Chinese, movies, for free.
          Formed in April 2023
        </p>
      </div>
      <Footer />
    </>
			
  );
}

export default Home
