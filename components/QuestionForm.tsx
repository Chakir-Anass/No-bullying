import {
  ChoiceQuestion,
  Question,
  TextareaQuestion,
  TextQuestion,
} from "@/lib/questions";
import { useFormStore } from "@/store/useFormStore";
type QuestionProps = {
  question: Question;
  locale: "en" | "fr" | "ar";
};
export function QuestionForm({ question, locale }: QuestionProps) {
  if (question.type === "text") {
    return <TextQuestionForm question={question} locale={locale} />;
  }
  if (question.type === "choice") {
    return <ChoiceQuestionForm question={question} locale={locale} />;
  }
  if (question.type === "textarea") {
    return <TextareaQuestionForm question={question} locale={locale} />;
  }
}

function TextQuestionForm({
  question,
  locale,
}: {
  question: TextQuestion;
  locale: "en" | "fr" | "ar";
}) {
  const { setResponse, responses } = useFormStore();

  return question.fields.map((field) => {
    return (
      <div key={field.key}>
        <div className='font-bold text-white'>{field.label[locale]}:</div>
        <input
          type='text'
          name={field.name}
          value={responses[field.name] || ""}
          placeholder={field.placeholder[locale]}
          className='w-[80%] px-4 py-3 mx-auto my-2 border border-white/50 rounded-[10px] text-white text-base bg-white/10'
          onChange={(e) => setResponse(field.name, e.target.value)}
        />
      </div>
    );
  });
}

function ChoiceQuestionForm({
  question,
  locale,
}: {
  question: ChoiceQuestion;
  locale: "en" | "fr" | "ar";
}) {
  const { setResponse, responses } = useFormStore();
  return question.choices.map((choice) => {
    return (
      <div key={choice.index}>
        <input
          type='radio'
          name={question.name}
          value={choice.index}
          id={question.name + choice.index}
          className='hidden peer'
          onChange={() => setResponse(question.name, choice.index.toString())}
          checked={responses[question.name] === choice.index.toString()}
        />
        <label
          htmlFor={question.name + choice.index}
          className='relative bg-white/30 border border-white/30 rounded-[10px] text-white px-6 py-3 text-base cursor-pointer transition-all duration-300 backdrop-blur-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/40 hover:scale-105 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] overflow-hidden  before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full peer-checked:bg-green-600 hover:peer-checked:bg-green-800 flex flex-col my-2 w-[80%] mx-auto'
        >
          {choice[locale]}
        </label>
      </div>
    );
  });
}

function TextareaQuestionForm({
  question,
  locale,
}: {
  question: TextareaQuestion;
  locale: "en" | "fr" | "ar";
}) {
  const { setResponse, responses } = useFormStore();
  return (
    <textarea
      placeholder={question.placeholder[locale]}
      name={question.name}
      value={responses[question.name] || ""}
      onChange={(e) => setResponse(question.name, e.target.value)}
      className='w-[80%] px-4 py-3 mx-auto my-2 border border-white/50 rounded-[10px] text-white text-base bg-white/10'
      rows={5}
    />
  );
}
