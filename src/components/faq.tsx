interface FaqProps {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: FaqProps) {
  return (
      <div className='w-4/5 rounded-2xl shadow-[4px_4px_4px_0px_#0000004D] p-4'>
        <h1 className='text-2xl font-bold pb-2'>Q : {question}</h1>
        <p>
        {answer}
        </p>
      </div>
 )
}
