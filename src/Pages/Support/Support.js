import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Welcome from './Welcome';

const Support = () => {
    return (
        <div>
            <Welcome></Welcome>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>

                <div className="card lg:card-side bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Entitled Systems Support</h2>
                        <p><span className='text-red-400 font-bold'>There are 3 main sections:</span> <br />

                            <span className='font-bold'>My entitled software</span> - activities related to Power and Storage software - download licensed, free and trial software media, place software update orders and manage software keys.
                            <br />
                            <span className='font-bold'>My entitled hardware</span> - activities related to Power and Storage hardware - renew Update Access Keys, access all Capacity on Demand capabilities from a single dashboard, assign or buy credits for new and existing pools through the Power Enterprise Pools dashboard, download existing Storage Capacity on Demand codes and manage Hybrid Capacity credits. <br />
                            <span className='font-bold'>My inventory</span> - activities related to Power, Storage and IBM Z inventory - browse your software license, software maintenance, hardware inventory and services, access machine-sensed data, migrate software licenses and supported hardware activations, manage your inventory retrievals via Base Composer or generate several types of reports.</p>
                    </div>
                </div>




                <div className="card lg:card-side bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Training and certification</h2>
                        <p><span className='font-bold text-red-400'>Additional options are available as icons in the top right corner of the menu:</span> <br />

                            <span className='font-bold'>Feedback -</span> send comments and ideas about everything you see and do on the website (only available after signing in).
                            Help - learn how to use the application, with details, tips and guidance for every available activity. <br />
                            <span className='font-bold'>News Flash</span> - stay up-to-date with all the latest announcements about new products and website functions, updates to existing capabilities, scheduled maintenance and more (only available after signing in). <br />
                            <span className='font-bold'>Related links</span> - access other IBM websites that have additional useful information or downloads connected with your work on ESS. <br />
                            <span className='font-bold'>My profile</span> - register new, manage and view existing customer numbers, decide about notifications (only available after signing in).
                            Use the ESS support option to find phone and email contact information for the website's customer support teams.</p>
                    </div>
                </div>


                <div className="card lg:card-side bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Problem Ticketing (PMRs)</h2>
                        <p className='font-semibold'>Service Request Access problem ticketing for most hardware and software products</p>
                        <p> <span className='text-red-500 font-semibold'>Attention - This site will be sunset Q3 2022 and only supports cases for the following products:</span> <br />
                            <span className='font-semibold'>
                                1.Actifio <br />
                                2. Brocade <br />
                                3. Lenovo product supported under an IBM agreement <br />
                                4. Lexmark <br />
                                5. NetApp <br />
                                6. Network Appliance <br />
                                7. Optica Technologies <br />
                                8. Pure Storage <br />
                                9. Ruckus Wireless <br />
                                10. Super Micro <br />
                            </span>

                            <span className='text-xl font-semibold'>Support for all other products</span> <br />
                            If you need to open a support case for any other product, please go to <Link to="/contact" className='text-success'>Contact with us</Link>
                        </p>
                    </div>
                </div>



                <div className="card lg:card-side bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">We are CS Support!</h2>
                        <p>
                            <span className='font-bold'>Our strategy:-</span> <br />
                            Our strategy is to continually evolve the support you receive by infusing our tools and processes with cognitive features - fueled by knowledge and driven by insights. These cognitive abilities are going to: <br />

                            <span className='font-semibold'>
                                1. Simplify your experience with IBM Support <br />
                                2. Improve our interactions with you <br />
                                3. Deliver value to you from expanded insights.
                            </span> <br /> <br />

                            <span>
                                <span className='font-bold'>Our goal:-</span> <br />
                                Our goal is to make your experience with CS Support simple, seamless, and effective, so you can focus less on issues and more on how our products and services will help your business.
                            </span> <br /> <br />
                            <span>
                                <span className='font-bold'>Our philosophy:-</span> <br />
                                <span>
                                    Our philosophy is to help you succeed through partnership, innovation and honesty. We aspire to reflect these traits with every interaction:
                                </span> <br />

                                <span className='font-semibold'>
                                    1. Advocacy - we're your partners; your success is our success. <br />
                                    2. Quality - we employ industry-leading skills to provide you with efficient and innovative solutions. <br />
                                    3. Trust - we're open and honest, acting with your best interest in mind.
                                </span>
                            </span>
                        </p>
                    </div>
                </div>


            </div>
            <div className='my-16 px-10'>
                <span className='text-xl'> You must have an CSid to use this website. If you do not have one yet, <Link className='text-accent' to="/register">register here</Link>. CS internal users have to use their intranet credentials.</span>

                <Link className='btn btn-accent btn-sm' to="/login">Login</Link>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Support;