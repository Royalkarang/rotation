import React from 'react'

const data = [
    {id: 1, name : "Acoustic Ceiling Removal"}, 
    {id: 2, name : "Attic Remodeling And Repair"}, 
    {id: 3, name : "Basement Remodeling And Repair"}, 
    {id: 4, name : "Bathroom Remodeling And Repair"}, 
    {id: 5, name : "Bathtub Repair And Replacement"}, 
    {id: 6, name : "Bedroom Remodeling And Repair"}, 
    {id: 7, name : "Cabinet Installation And Repair"}, 
    {id: 8, name : "Ceiling Repair And Replacement"}, 
    {id: 9, name : "Ceiling Repair And Service"}, 
    {id: 10, name : "Ceiling Texture Service"}, 
    {id: 11, name : "Countertop Installation And Repair"}, 
    {id: 12, name : "Custom Kitchen Island Installation"}, 
    {id: 13, name : "Dining Room Remodeling And Repair"}, 
    {id: 14, name : "Drywall Finishing"}, 
    {id: 15, name : "Drywall Installation And Repair"}, 
    {id: 16, name : "Kitchen Backsplash Installation"}, 
    {id: 17, name : "Kitchen Remodeling And Repair"}, 
    {id: 18, name : "Living Room Remodeling And Repair"}, 
    {id: 19, name : "Masonry And Concrete Services"}, 
    {id: 20, name : "Popcorn Ceiling Removal"}, 
    {id: 21, name : "Safety And Mobility Services"}, 
    {id: 22, name : "Shower Tile Installation And Repair"}, 
    {id: 23, name : "Tub Enclosure Installation And Repair"}, 
    {id: 24, name : "Vanity And Bathroom Mirror Installation"}, 
    {id: 25, name : "Walk In Tub Installation And Repair"}, 
]
const RemodlingDept = () => {
  return (
    <div className='bg-gray-600 h-[100vh] w-[100vw] flex flex-col justify-center items-center overf'>
        <div className='w-[85%] flex flex-wrap text-center justify-center creative'>
            { data.map((item) =>(
                <ul key={item.id} className='w-28 h-28 p-3 m-2 bg-sky-200  text-fit text-center flex flex-col justify-center height-indicator'>
                    <li > {item.name } </li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default RemodlingDept;
