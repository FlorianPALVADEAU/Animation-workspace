import './App.css';
import ParagraphEvidence from './pages/animations/ParagraphEvidence/ParagraphEvidence';

export default function App() {
 
  return (
    <>
      <div className="paragraphAnimationContainer">
        <ParagraphEvidence paragraph={"This is a paragraph with a lot of words, and the reveal will append to the whole paragraph."} displayBehavior="paragraph"/>
        <ParagraphEvidence paragraph={"This is a paragraph with a lot of words, and the reveal will append word by word."} displayBehavior="word"/>
        <ParagraphEvidence paragraph={"This is a paragraph with a lot of words, and the reveal will append letter by letter. Magic!"} displayBehavior="letter"/>
      </div>
    </>
  );
}