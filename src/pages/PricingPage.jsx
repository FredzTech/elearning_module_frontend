import React from "react";
import Radium from '../assets/radium.png'
import Plutonium from '../assets/plutonium.png'
import Uranium from '../assets/uranium.png'
import Checked from '../assets/checked.png'
import Unchecked from '../assets/unchecked.png'

const payments =[
  {title:'Radium', image: Radium , color: 'radium' , monthly:'KES500',total:'KES500' , duration:'for 1 month' },
{title:'Plutonium', image: Plutonium , color: 'plutonium' , monthly:'KES400',total:'KES1200' , duration:'for 3 months' },
{title:'Uranium', image: Uranium , color: 'uranium' , monthly:'KES300',total:'KES1800' , duration:'for 6 months' },
]
const PricingPage = () => {
  return (
    <div className="pt-8">
      <div className="text-center">
         <h3 className="text-3xl">Choose your plan</h3>
        <p className="text-dark-grey text-1xl">With subscription you will get access to all paid content with Ad-free experience</p>
      
      </div>
      {/* 1 month subscription */}
      <div className="flex flex-wrap mt-6 p-10 gap-8 justify-center items-center sm:flex sm:flex-col">
      {payments.map((payment,index)=>{return(
         
        <div className="w-1/4 h-2/5 border border-radium  p-8" key={index}>
          <img src={payment.image} alt={payment.title} height={100} width={300}/>
          <div className="py-20 font-2 text-center">
            <p className="font-family-roboto "><span className="text-4xl">{payment.monthly}/</span> month</p>
            <p>{payment.duration}</p>
          </div> 

          <div >
          {/* style={{backgroundColor:{payment.color}}} */}
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm bg-blue text-sm font-medium text-white  hover:bg-silver hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >{payment.total}</button>
          </div>
        </div>
      )})}
    
        


      </div>
      <p className="text-grey text-center">*All subscriptions are non-refundable</p>
      <h2 className="text-center py-8 text-4xl">Benefits</h2>
      <div className="flex mx-20 gap-12 sm:flex sm:flex-wrap">
        <div className="px-10">
         <h3 className="text-2xl mb-4">  No Subscription</h3>
          <ul>
            <li className="flex gap-2 mb-2"><img src={Checked} alt="item" height={16} width={20}/>Access to free content</li>
            <li className="flex gap-2 mb-2"><img src={Unchecked} alt="item" height={16} width={20}/>Ads</li>
            <li className="flex gap-2 mb-2"><img src={Unchecked} alt="item" height={16} width={20}/>No access Paid chapters and lectures</li>
            <li className="flex gap-2 mb-2"><img src={Unchecked} alt="item" height={16} width={20}/>No Quizzes</li>
            <li className="flex gap-2 mb-2"><img src={Unchecked} alt="item" height={16} width={20}/>No notes</li>
            <li className="flex gap-2 mb-2"><img src={Unchecked} alt="item" height={16} width={20}/>No Badges</li>
         
          </ul>
          
        </div>
        <div>
          <h3 className="text-2xl mb-4">With Subscription </h3>
          <ul>
          <li className="flex gap-2 mb-2"><img src={Checked} alt="item" height={16} width={20}/>Access to free content</li>
            <li className="flex gap-2 mb-2"><img src={Checked} alt="item" height={16} width={20}/>No Ads</li>
            <li className="flex gap-2 mb-2"><img src={Checked} alt="item" height={16} width={20}/>Paid chapters and lectures</li>
            <li className="flex gap-2 mb-2"><img src={Checked} alt="item" height={16} width={20}/>Quizzes</li>
            <li className="flex gap-2 mb-2"><img src={Checked} alt="item" height={16} width={20}/>Notes</li>
            <li className="flex gap-2 mb-2"><img src={Checked} alt="item" height={16} width={20}/>Badges</li>
          
          </ul>
          
        </div>
      </div>
    </div>
  )
};

export default PricingPage;
