
// // import {useState} from 'react'
// // import Accordion from 'react-bootstrap/Accordion';

// // const FAQ=()=>{
// //     const [open, setOpen]= useState({})
// //     const toggleHanlder= (id)=>{
// //         setOpen((prev)=>({
// //             ...prev,
// //             [id]: !prev[id]
// //         }))
// //     }

// //     return (
// //         <div id="faq"className="m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12 text-white mb-20">
// //          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-center font-bold">FAQ</h1>
// //             <div className="sm:m-0 md:m-4 lg:m-6 xl:m-8 ">
//                 <div>
//                     <h3 
//                         className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
//                         onClick={()=>toggleHanlder(1)}
//                     >{open[1]? '- ': '+'} When and where is ElleHacks?</h3>
//                     {
//                         open[1] && ( <p className="mb-4 sm:mb-8 text-base md:text-lg ml-5">ElleHacks will be hosted at York University (Keele Campus) in Toronto, Ontario, Canada on February, 2024. </p>)
//                     }
                   
//                 </div>
//                 <div>
//                     <h3 
//                         className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
//                         onClick={()=>toggleHanlder(2)}
//                     >{open[2]? '- ': '+'} What's a hackathon?</h3>
//                     {
//                          open[2] && ( <p className="mb-4 sm:mb-8 text-base md:text-lg">At ElleHacks, you'll get to make tons of new friends, network with recruiters, and pick up cool skills through workshops, speaker sessions, activities, and games!</p>)
//                     }
                   
//                 </div>
//                 <div>
//                     <h3 
//                         className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
//                         onClick={()=>toggleHanlder(3)}
//                     >{open[3]? '- ': '+'}  Do I need to know how to code?</h3>
//                     {
//                         open[3] && (<p className="mb-4 sm:mb-8 text-base md:text-lg">Nope! Students of all skill levels are welcome at ElleHacks (even if you have absolutely zero experience)! Tons of hackathon participants are total newbies, and we'll be there to support you through workshops and mentorship :) Still not sure? Check this out for inspiration: <a href="https://medium.com/tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl" className="underline decoration-solid cursor-pointer">https://medium.com/tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl</a></p>)
//                     }
//                 </div>
//                 <div>
//                     <h3 
//                         className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
//                         onClick={()=>toggleHanlder(4)}
//                     >{open[4]? '- ': '+'} Who can apply?</h3>
//                     {
//                         open[4] && (<p className="mb-4 sm:mb-8 text-base md:text-lg">We welcome all students from underrepresented gender groups (ie. women and gender-diverse students) who either live or attend school in North America. Only students who are currently enrolled at a high school or college/university, or have graduated within the past 12 months, are eligible to attend. You must bring a valid student or government issued ID card for admission.</p>)
//                     }
//                 </div>
// //                 <div>
// //                     <h3 
// //                         className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
// //                         onClick={()=>toggleHanlder(5)}
// //                     >{open[5]? '- ': '+'} Can I still join if I'm not from an underrepresented gender group?</h3>
// //                     {
// //                         open[5] && (<p className="mb-4 sm:mb-8 text-base md:text-lg">This event was created to support underrepresented genders in tech. As such, ElleHacks is meant to be a space for these groups to thrive. If this isn't you, but you would like to participate in other ways, we welcome anyone to volunteer! Please check out social media accounts in November for more information and a volunteer application.</p>) 
// //                     }
// //                 </div>
// //                 <div>
// //                     <h3 
// //                         className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
// //                         onClick={()=>toggleHanlder(6)}
// //                     >{open[6]? '- ': '+'} Is ElleHacks in-person this year?</h3>
// //                     {
// //                         open[6] && (<p className="mb-4 sm:mb-8 text-base md:text-lg">Yes! ElleHacks will be in-person at York University in Toronto. There will be no option to participate in the event virtually</p>)
// //                     }
// //                 </div>
// //                 <div>
// //                     <h3 
// //                         className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
// //                         onClick={()=>toggleHanlder(7)}
// //                     >{open[7]? '- ': '+'} When is the last day to sign up?</h3>
// //                     {
// //                         open[7] && (<p className="mb-4 sm:mb-8 text-base md:text-lg">Our hacker applications will close in December 2023. Apply now - there are no haed or long question, just basic information!</p>)
// //                     }
// //                 </div>
// //             </div> 




// //         </div>
// //     )
// // }

import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState({});

  const toggleHandler = (id) => {
    setOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="faq" className="m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12 text-white mb-20">
     <style>{`
        .faq-container {
          display: grid;
          grid-template-columns: 1fr 1fr; /* Two columns */
          gap: 20px;
        }
        
        .faq-column {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          flex: 1;
          padding-left:2%;
          padding-top:4%;
        }

        p{
          padding-left: 2%;
        }

        @media (max-width: 576px) {
          .faq-container {
            grid-template-columns: 1fr; /* Single column for mobile */
          }
        }
      `}</style>
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-left font-bold">FAQ</h1>
      <div className="faq-container">
        <div className="faq-column">
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(1)}
            >
              {open[1] ? '- ' : '+'} When and where is ElleHacks?
            </h3>
            {open[1] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg ml-5">
                ElleHacks will be hosted at York University (Keele Campus) in Toronto, Ontario, Canada on February, 2024.
              </p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(2)}
            >
              {open[2] ? '- ' : '+'} What's a hackathon?
            </h3>
            {open[2] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                At ElleHacks, you'll get to make tons of new friends, network with recruiters, and pick up cool skills through
                workshops, speaker sessions, activities, and games!
              </p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(3)}
            >
              {open[3] ? '- ' : '+'} Do I need to know how to code?
            </h3>
            {open[3] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                Nope! Students of all skill levels are welcome at ElleHacks (even if you have absolutely zero experience)! Tons of hackathon participants are total newbies, and we'll be there to support you through workshops and mentorship :) Still not sure? Check this out for inspiration: <a href="https://medium.com/tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl" className="underline decoration-solid cursor-pointer">https://medium.com/tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl</a></p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(4)}
            >
              {open[4] ? '- ' : '+'} Who can apply?
            </h3>
            {open[4] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                We welcome all students from underrepresented gender groups (i.e., women and gender-diverse students) who either live or attend school in North America. Only students who are currently enrolled at a high school or college/university, or have graduated within the past 12 months, are eligible to attend. You must bring a valid student or government-issued ID card for admission.
              </p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(5)}
            >
              {open[5] ? '- ' : '+'} Can I still join if I'm not from an underrepresented gender group?
            </h3>
            {open[5] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                This event was created to support underrepresented genders in tech. As such, ElleHacks is meant to be a space for these groups to thrive. If this isn't you, but you would like to participate in other ways, we welcome anyone to volunteer! Please check out social media accounts in November for more information and a volunteer application.
              </p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(6)}
            >
              {open[6] ? '- ' : '+'} Is ElleHacks in-person this year?
            </h3>
            {open[6] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                Yes! ElleHacks will be in-person at York University in Toronto. There will be no option to participate in the event virtually.
              </p>
            )}
          </div>
        </div>
        <div className="faq-column">
          
        <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(7)}
            >
              {open[7] ? '- ' : '+'} What in-person accommodations are available?
            </h3>
            {open[7] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                This FAQ response is coming soon :)
              </p>
            )}
          </div>
          
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(8)}
            >
              {open[8] ? '- ' : '+'} When is the last day to sign up?
            </h3>
            {open[8] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                This FAQ response is coming soon :)
              </p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(9)}
            >
              {open[9] ? '- ' : '+'} Will there be swag?
            </h3>
            {open[9] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                Yess!!
              </p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(10)}
            >
              {open[10] ? '- ' : '+'} Do I need to find a team?
            </h3>
            {open[10] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                At ElleHacks, we welcome you to compete in teams of 1-4 students.
                <br/>
                → If you already have a team, we'll ask you to list their names during registration, the first day the event.
                <br/>
                → If you'd like to look for teammates later, we'll open our Discord server a week early for you to search for a team.
                <br/>
                → If you'd like help finding a team, we can match you with a team before or on the first day of the event.
              </p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(11)}
            >
              {open[11] ? '- ' : '+'} Can I start working on my project before the event?
            </h3>
            {open[11] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                No. All participants are required to start and complete their project during the hackathon. Any project that starts before the event will be disqualified.
              </p>
            )}
          </div>
          <div className="faq-item">
            <h3
              className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              onClick={() => toggleHandler(12)}
            >
              {open[12] ? '- ' : '+'} Can I submit a project I've used at another hackathon/school assignment/anywhere else?
            </h3>
            {open[12] && (
              <p className="mb-4 sm:mb-8 text-base md:text-lg">
                No. 
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

