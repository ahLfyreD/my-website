import React from 'react'
import resume from '../../assets/AlfredAnnieResume.pdf'

const Experience = () => {
    return (
        <section>
            <div className="main-container padd">
                <h3 className='experience-heading'>Work Experience</h3>
                <span className='underline'></span>
                <div className='experience'>
                    <div className="work">
                        <div className='status'>
                            <div className='company'>
                                <h3 style={{ margin: '0px', }}>Frontend Web Developer (Junior)</h3>
                                <p>
                                    <a target='_blank' className='link' href="https://www.nfting.store/">
                                        NFTing
                                    </a>
                                </p>
                            </div>
                            <div className='date'>
                                August 2022 - January 2024
                            </div>
                        </div>
                        <div className='status-description'>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Identified and optimized web application performance which improved the user experience and  web application speed.</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>I Built the official website from scratch with the webflow tool</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Leveraged Redux and axios to fetch API data and dynamically update website content, resulting in a 50% increase in user engagement</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Updated Unit-testing for the components</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Proactively identified strategic areas of opportunity and high business impact for team and product improvements.</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Mentored other interns by conducting technical workshops and knowledge-sharing sessions, leading to team skill development and career advancement.
                                </h4>
                            </div>

                        </div>
                    </div>
                    <div className="work">
                        <div className='status'>
                            <div className='company'>
                                <h3 style={{ margin: '0px', }}>Frontend Web Developer (Internship)</h3>
                                <p>
                                    <a target='_blank' className='link' href="https://beta.nfting.store/">
                                        NFTing
                                    </a>
                                </p>
                            </div>
                            <div className='date'>
                                February 2022 - August 2022
                            </div>
                        </div>
                        <div className='status-description'>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Implemented the Languages option feature, so users of the marketplace could be well guided when navigating the user-interface which increased the number of users to 20% of the initial recorded.</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Using Javascript framework React.js and some of it's libraries, i was able to create a DEMO marketplace from scratch.</h4>
                            </div>

                        </div>
                    </div>
                    <div className="work">
                        <div className='status'>
                            <div className='company'>
                                <h3 style={{ margin: '0px', }}>Frontend Developer (Freelance)</h3>
                                <p>
                                    <a target='_blank' className='link' href="http://staybusy.io/">
                                        StayBusy Nigeria
                                    </a>
                                </p>
                            </div>
                            <div className='date'>
                                March 2020 - January 2021
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className='status'>
                            <div className='company'>
                                <h3 style={{ margin: '0px', }}>Frontend Developer (Internship)</h3>
                                <p>
                                    <a target='_blank' className='link' href="http://shareqube.com/">
                                        ShareQube
                                    </a>
                                </p>
                            </div>
                            <div className='date'>
                                January 2020 - March 2020
                            </div>
                        </div>
                        <div className='status-description'>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Proactively completed projects for several clients which increased the company’s revenue by 5%</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Engaged in coding sessions and understanding more on how to work with git, github and react applications.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className='status'>
                            <div className='company'>
                                <h3 style={{ margin: '0px', }}>Frontend Developer (Internship)</h3>
                                <p className='link'>HNG Internship</p>
                            </div>
                            <div className='date'>
                                September 2019 - November 2019
                            </div>
                        </div>
                        <div className='status-description'>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Intermediate knowledge on how the following tools are used for deployment of web application. Heroku, Netflity and github</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>With the fundamentals of HTML, CSS and JAVASCRIPT, I was able to create Google landing page.</h4>
                            </div>
                            <div className="status-des-text">
                                <h4>-</h4>
                                <h4>Basic understanding of HTML, CSS, JAVASCRIPT and Git</h4>
                            </div>
                        </div>
                    </div>

                </div>
                <h3 className='experience-heading'>Skills</h3>
                <span className='underline'></span>
                <div className="skill-container">
                    <div className='skill-list'>
                        <h4 className='link'>Languages</h4>
                        <p>Javascript</p>
                        <p>Typescript</p>
                    </div>
                    <div className='skill-list'>
                        <h4 className='link'>Web Libraries/Databases</h4>
                        <p>Bootstrap</p>
                        <p>Tailwind</p>
                        <p>React</p>
                        <p>MongoDb</p>
                    </div>
                    <div className='skill-list'>
                        <h4 className='link'>Tools</h4>
                        <p>Git & Github</p>
                        <p>VS Code</p>
                    </div>
                    <div className='skill-list'>
                        <h4 className='link'>Knowledge</h4>
                        <p>Object Oriented Programming</p>
                        <p>Operating System</p>
                        <p>Mobile App Development</p>
                    </div>
                </div>
                <div className="underline center"></div>

                <div className="resume">
                    <a href={resume} className='btn'>Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Experience
