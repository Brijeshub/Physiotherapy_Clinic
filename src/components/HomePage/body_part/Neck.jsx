import React from 'react'
import { Link } from 'react-router-dom'
import BackTo from '../../button/BackTo'
function Neck() {
  return (
    <>
    <BackTo/>
  
      <div className='mx-10 my-14'>
        <h1 className='text-2xl font-semibold'>Introduction</h1>
        <p>Neck Pain (NP) lacks a uniform operational definition. [1] Nevertheless, the most commonly reported type is non-specific or mechanical NP characterised by symptoms of a non-specific nature or mechanical basis. [2] Common presentations of NP may include muscle pain, muscle spasm, headache, facet joint pain, nerve pain, referred pain and bone pain. [3]</p>
        <p>NP is becoming increasingly common throughout the world [4] with around two thirds of people experiencing NP at one moment in their life. The prevalence of NP varies largely between studies; mean reported estimates are 7.6% for point prevalence and 48.5% for lifetime prevalence. [2] Most studies indicate a higher incidence of NP among women, [4] anxiety or depression sufferers [5] and office workers with poor ergonomic positions. [6]</p>
        <img 
        className='mx-auto size-80 my-10'
        src='https://www.physio-pedia.com/images/thumb/1/19/Neck_Pain_Diagram.png/450px-Neck_Pain_Diagram.png'></img>
      </div>
    </>
  )
}

export default Neck