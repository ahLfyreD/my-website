import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/frontendNFTing.png'

const Project = () => {
  return (
    <section>
      <div className="main-container padd">
        <h3 className='project-heading'>Frontend Projects</h3>
        <span className='underline'></span>
        <div className='row'>
          <div className='row-content'>
              <div className="project-box">
                <div className='img image-one'></div>
                <div className="body">
                  <div className="heading">NFT marketplace</div>
                  <div className="content sub">This is a marketplace platform for trading NFTs</div>
                  <div className='link-container'>
                    <a href="https://beta.nfting.store/">Visit Site</a>
                    <a href="">Demo GitHub Code</a>
                  </div>
                  <div className="underline-d"></div>
                  <div className="info sub">2022, Web Development</div>
                </div>

              </div>
          </div>
          <div className='row-content'>
              <div className="project-box">
                <div className='img image-two'></div>
                <div className="body">
                  <div className="heading">NFTing Edu. Platform</div>
                  <div className="content sub">An educational platform for crypto enthusiast</div>
                  <div className='link-container'>
                    <a href="https://www.nfting.store/">Visit Site</a>
                    <a href="">Github Code</a>
                  </div>
                  <div className="underline-d"></div>
                  <div className="info sub">2022, Web Development</div>
                </div>

              </div>
          </div>
          <div className='row-content'>            
              <div className="project-box">
                <div className='img image-three'></div>
                <div className="body">
                  <div className="heading">NFTing Website</div>
                  <div className="content sub">The official website of NFTing built with webflow</div>
                  <div className='link-container'>
                    <a href="https://www.nfting.store/">Visit Webflow Website</a>
                  </div>
                  <div className="underline-d"></div>
                  <div className="info sub">2022, Webflow Dev.</div>
                </div>

              </div>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Project
