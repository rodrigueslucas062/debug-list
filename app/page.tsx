import { Checklist } from "./data/Checklist";

export default function Home() {
  return (
    <div>
      {Checklist.map(({ question, description }, index) => (
        <div key={index}>
          <span>{question}</span>
          <span>{description}</span>
        </div>
      ))}
    </div>
  );
}
