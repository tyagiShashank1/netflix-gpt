import OpenAI from 'openai';
import {OPENAI_KEY2 } from './constants';


//Authorization kind of thing 
const openai = new OpenAI({ 
  apiKey: OPENAI_KEY2,
  dangerouslyAllowBrowser:true // This is the default and can be omitted
});

export default openai; //it will give us helper functions