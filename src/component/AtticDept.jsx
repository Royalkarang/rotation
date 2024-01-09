import React from 'react'

const data = [
    {id: 1, name : "Acoustic Ceiling Removal", img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"}, 
    {id: 2, name : "Attic Remodeling And Repair" ,  img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"}, 
    {id: 3, name : "Basement Remodeling And Repair" ,  img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"}, 
    {id: 4, name : "Bathroom Remodeling And Repair" ,  img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"}, 
    {id: 5, name : "Bathtub Repair And Replacement" ,  img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"}, 
    {id: 6, name : "Bedroom Remodeling And Repair" ,  img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"}, 
    {id: 7, name : "Cabinet Installation And Repair" ,  img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"}
];

const AtticDept = () => {
  return (
    <div className='flex w-[98vw]'>
        <div className='w-1/2 flex flex-col'>
            {data.map((item) =>(
                <ul className='my-2 border-t-2 w-1/2 border-pink-600 px-2'>
                    <li> {item.name}</li>
                </ul>
            ))}
        </div>
        <div className='flex w-1/2 flex-wrap justify-center ' >
        {data.map((item) => (
            <div key={item.id} className='relative flex justify-center border-[1px]'>
                <img src={item.img} alt="x" className='w-[280px] h-[250px]' />
                <p className='absolute bottom-0 text-white'>{item.name}</p>
            </div>
        ))}

        </div>
    </div>
  )
}

export default AtticDept
