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
const FloorInstalation = () => {
  return (
    <div className='w-[100vw] flex flex-col items-center p-4'>
        <h1 className='border-b-4 w-fit'>Floor Installation and repair Department</h1>
      <div className='flex flex-wrap justify-center'>
        {data.map((item) =>(
            <div className='flex flex-col justify-center items-center p-2'>
                <img src={item.img} alt="x" className='w-[260px] rounded-2xl border-8'/>
                <p> {item.name}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FloorInstalation
