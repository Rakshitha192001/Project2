import React, { useEffect } from 'react'
import { useState } from 'react';
function QuestionPage() {
    const [Q1, setQ1] = useState('');
    const [Q2, setQ2] = useState('');
    const [Q3, setQ3] = useState('');
    const [ans,setans]=useState([])
    const [count,setcount]=useState(0)

    const oans=['q1o2','q2o1','q3o2']
   
    
   
  const handleQ1 = (event) => {
    setQ1(event.target.value);
  };
  const handleQ2 = (e)=> {
    setQ2(e.target.value)
  }
  const handleQ3 = (e)=> {
    setQ3(e.target.value)
  }
  const getScore = (e) => {
    const selectedAnswers = [Q1, Q2, Q3];
    let score = 0;

    for (let i = 0; i < selectedAnswers.length; i++) {
      if (selectedAnswers[i] === oans[i]) {
        score++;
      }
    }
    setcount(score);
    e.preventDefault()
  };
  return (
    <>
    <h1>Questions</h1>
    <p>marks obtained: {count}/3</p>
    <form >
    <div>
         {/* Q1=========================== */}
        <div>
    <p>What is React used for?</p>
    <label> 
        <input name='q1' type="radio" value="q1o1" 
    checked={Q1 === 'q1o1'} onChange={handleQ1}/>
           Data storage
    </label>
        <br />
    <label> 
            <input name='q1' type="radio" value="q1o2" 
            checked={Q1 === 'q1o2'} onChange={handleQ1}/>
          User Interface (UI) development
    </label>
         <br />       
    <label>
          <input name='q1' type="radio" value="q1o3" 
          checked={Q1 === 'q1o3'} onChange={handleQ1}/>
          Server-side scripting
    </label>
        <br/>
        <label>
          <input name='q1' type="radio" value="q1o4"
          checked={Q1 === 'q1o4'} onChange={handleQ1}/>
          Database management
    </label>    
    

      </div>

      {/* Q2=========================== */}
      <div>
    <p>Which command is used to create a new React app?</p>
    <label> 
        <input name='q2' type="radio" value="q2o1" 
    checked={Q2 === 'q2o1'} onChange={handleQ2}/>
          create-react-app
    </label>
        <br />
    <label> 
            <input name='q2' type="radio" value="q2o2" 
            checked={Q2 === 'q2o2'} onChange={handleQ2}/>
        new-react-app
    </label>
         <br />       
    <label>
          <input name='q2' type="radio" value="q2o3" 
          checked={Q2 === 'q2o3'} onChange={handleQ2}/>
        react-start
    </label>
        <br/>
        <label>
          <input name='q2' type="radio" value="q2o4"
          checked={Q2 === 'q2o4'} onChange={handleQ2}/>
          start-react-app
    </label>    

      </div>
      {/* Q3=========================== */}
      <div>
    <p>What is JSX in React?</p>
    <label> 
        <input name='q3' type="radio" value="q3o1" 
    checked={Q3 === 'q3o1'} onChange={handleQ3}/>
           JavaScript eXtension
    </label>
        <br />
    <label> 
            <input name='q3' type="radio" value="q3o2" 
            checked={Q3 === 'q3o2'} onChange={handleQ3}/>
          JavaScript XML
    </label>
         <br />       
    <label>
          <input name='q3' type="radio" value="q3o3" 
          checked={Q3 === 'q3o3'} onChange={handleQ3}/>
          JavaScript Syntax etension
    </label>
        <br/>
        <label>
          <input name='q3' type="radio" value="q3o4"
          checked={Q3 === 'q3o4'} onChange={handleQ3}/>
         JavaScript Extendable Markup
    </label>    

      </div>
     <button onClick={(e)=>{setans([Q1,Q2,Q3]); e.preventDefault()}}>Submit</button>
     <button onClick={getScore}>Get score</button>
    </div>
    </form>
    </>
  )
}

export default QuestionPage