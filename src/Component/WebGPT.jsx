import React, { useState } from 'react';


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_CHAT_GPT_TOKEN,
});
const openai = new OpenAIApi(configuration);




export default function WebGPT() {
    const [inputText, setInputText] = useState('');
    // const [responseText, setResponseText] = useState([]);
    const [ loading,setLoading ] = useState(false)
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true)
      try{
        const chat_completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputText }],
        });
        if(chat_completion){
          // console.log(chat_completion.data.choices[0].message.content)
        //   console.log(chat_completion.data)
        //   setResponseText(chat_completion.data.choices[0].message.content)
          document.getElementById('my').innerHTML = chat_completion.data.choices[0].message.content
          setInputText(null)
          setLoading(false)
          // console.log(chat_completion.data.choices)
        }
      }
      catch(error){
        document.getElementById('my').innerHTML = error
        setLoading(false)
      }
    };
    const styles = {
        container:{
            height:"100vh"
        }

    }
    // console.log(process.env.REACT_APP_CHAT_GPT_TOKEN)
  return (
    <div style={styles.container}>
        <h2 className='ps-3'>Web</h2>

        {loading?
      <div className='text-center mt-5'>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
    </div>:null
      }
     
      <div className="mainChange">
      <div id='my' ></div>
      </div>
      <form onSubmit={handleSubmit} className='p-3 w-100 position-fixed bottom-0  d-flex '>
        <input type="text" className='form-control w-75' placeholder='Search Here ...' value={inputText} onChange={(e)=>setInputText(e.target.value)} />
        <button type="submit" className='form-control w-25 btn btn-dark text-white'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
        </svg></button>
      </form>
    </div>
  )
}
