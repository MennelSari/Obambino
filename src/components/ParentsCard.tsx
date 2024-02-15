import Meal from '../assets/meal.png';
import Info from '../assets/unnamed.png';
import Calendar from '../assets/calendar.png';
import {Link} from 'react-router-dom';

//This component is used to display the cards for the parents dashboard
//It contains 3 cards with different information


const ParentsCard = () => {
    return (
     
        <section className="flex items-center bg-[#FFE1CC] lg:h-screen dark:bg-gray-800 font-poppins">
          <div className="max-w-6xl px-4 mx-auto">
              <div className="grid gap-10 text-start md:grid-cols-3">
                    <div
                      className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
                        <img src={Meal} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
                        <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400" >Mon repas du jour</h3>
                        <p className="mb-6 text-base text-white dark:text-gray-400">
                            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                            perspiciatis unde omnis.
                        </p>
                        <Link to="/meals">
                        <button
                                type="button"
                                className="inline-block rounded bg-[#FF7B4D] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                En savoir plus
                        </button>
                        </Link>
                    </div>
                    <div
                      className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
                        <img src={Info} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
                        <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400" >Mon rapport du jour</h3>
                        <p className="mb-6 text-base text-white dark:text-gray-400">
                            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                            perspiciatis unde omnis.
                        </p>
                        
                        <button
                                type="button"
                                className="inline-block rounded bg-[#FF7B4D] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                En savoir plus
                        </button>
                    </div>
                    <div
                      className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
                        <img src={Calendar} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
                        <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400" >À venir</h3>
                        <p className="mb-6 text-base text-white dark:text-gray-400">
                            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                            perspiciatis unde omnis.
                        </p>
                        
                        <button
                                type="button"
                                className="inline-block rounded bg-[#FF7B4D] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                En savoir plus
                        </button>
                    </div>
                </div>
                
            </div>
            
        </section>
     )
    }
export default ParentsCard;