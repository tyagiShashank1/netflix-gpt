import {GoogleGenAI} from '@google/genai';
import { GEMINI_AI_KEY } from './constants';

const genAI = new GoogleGenAI({apiKey: GEMINI_AI_KEY});
export default genAI;