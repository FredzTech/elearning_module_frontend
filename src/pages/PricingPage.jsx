import React from "react";
import Radium from '../assets/radium.png'
import Plutonium from '../assets/plutonium.png'
import Uranium from '../assets/uranium.png'

const PricingPage = () => {
  return (
    <div className="text-center">
      <div className="text-center">
         <h3 className="text-3xl">Choose your plan</h3>
        <p>With subscription you will get access to all paid content with Ad-free experience</p>
      
      </div>
      {/* 1 month subscription */}
     <div className="flex flex-wrap mt-6 p-10 gap-8">
        <div className="w-1/4 h-2/5 border border-radium  p-8">
          <img src={Radium} alt="radium" height={100} width={300}/>
          <div className="py-20 font-2 text-center">
            <p className="font-family-roboto "><span className="text-4xl">KES500/</span> month</p>
            <p>for 1 month</p>
          </div> 


          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
          </div>
        </div>
        {/* 3 month subscription */}
        <div className="w-1/4 h-2/5 border border-plutonium p-8">
          <img src={Plutonium} alt="plutonium" height={100} width={300}/>
          <div className="py-20 font-2 text-center">
            <p className="font-family-roboto "><span className="text-4xl">KES400/</span> month</p>
            <p>for 3 month</p>
          </div> 


          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">KES1200</button>
          </div>
        </div>

        {/* 6 month subscription */}
        <div className="w-1/4 h-2/5 border border-uranium  p-8">
          <img src={Uranium} alt="uranium" height={100} width={300}/>
          <div className="py-20 font-2 text-center">
            <p className="font-family-roboto "><span className="text-4xl">KES300/</span> month</p>
            <p>for 6 month</p>
          </div> 


          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">KES1800</button>
          </div>
        </div>


      </div>
      <p>*All subscriptions are non-refundable</p>
      <h2 className="text-center">Benefits</h2>
      <div className="flex gap-8 sm:flex sm:flex-wrap">
        <div className="px-10">
          No Subscription
          <ol>
          <li>Access to free content</li>
          <li>Ads</li>
          <li>No access Paid chapters and lectures</li>
          <li>No Quizzes</li>
          <li> No notes</li>
          <li>NO Badges</li>
          </ol>
          
        </div>
        <div>
          With Subscription
          <ol>
          <li>Access to free content</li>
          <li>Ad-free experience</li>
          <li>Paid chapters and lectures</li>
          <li>Quizzes</li>
          <li>Notes</li>
          <li>Badges</li>
          </ol>
          
        </div>
      </div>
    </div>
  )
};

export default PricingPage;
