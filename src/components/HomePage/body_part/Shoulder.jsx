import React from 'react'
import BackTo from '../../button/BackTo'

function Shoulder() {
  return (
    <>
    <BackTo/>
    <div className='m-12'>
      <h1 className='text-2xl font-semibold my-2'>Introduction</h1>
       <p>The shoulder complex is the connection of the upper arm and the thorax. Comprising numerous ligamentous and muscular structures, composed of the clavicle, scapula, humerus and sternum, and an intricately designed combination of four joints, the Glenohumeral (GH) Joint, the Acromioclavicular (AC) Joint and the Sternoclavicular (SC) Joint, and a "floating joint", known as the Scapulothoracic (ST) joint. The shoulder allows for a large range of motion due to the spheroid shape of the glenohumeral joint but this (i.e. a large ball in a small socket) renders it prone to dislocation and other injuries.</p></div>
        <div className='flex flex-row my-10 items-center'>
        <div className='w-1/3'><img src='https://www.physio-pedia.com/images/4/4e/Shoulder-annotated-x-rays-2.jpeg'></img></div>
        <div className='w-1/2 ml-14'>
        <ul>
          <li>1. anatomical neck of humerus </li>
          <li>2. greater tuberosity </li>
          <li>3. lesser tuberosity </li>
          <li>4. surgical neck of humerus </li>
          <li>5. humeral shaft </li>
          <li> 6. humeral head </li>
          <li>7. glenoid fossa </li>
          <li>8. acromion </li>
          <li>9. acromioclavicular joint </li>
          <li>10. coracoid process </li>
          <li>11. clavicle </li>
          <li> 12. superior angle of scapula </li>
          <li> 13. medial border of scapula </li>
          <li> 14. inferior angle of scapula </li>
          <li> 15. lateral border of scapula </li>
          <li> 16. scapula</li>
        </ul>
        </div>
        </div>
      </>
  )
}

export default Shoulder