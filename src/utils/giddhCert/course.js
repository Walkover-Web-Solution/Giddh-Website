import questionsData from "@/data/giddh-cert/questions.json";
import {
  MODULE_PASS_PERCENT,
  QUESTIONS_PER_MODULE,
} from "./constants";

const COURSE_MODULES = [
  {
    id: "walkthrough",
    number: "01",
    title: "Product Walkthrough",
    summary:
      "Company setup, vouchers, inventory, banking, and day-to-day Giddh workflows.",
  },
  {
    id: "compliance",
    number: "02",
    title: "Compliance Essentials – GST",
    summary:
      "GST, e-invoice, e-way bill, place of supply, and tax reporting essentials.",
  },
  {
    id: "exam",
    number: "03",
    title: "Certification Exam",
    summary:
      "Practical scenarios across reporting, portals, automation, and best practices.",
  },
];

const OPTION_KEYS = ["A", "B", "C", "D"];

function shuffle(list) {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function buildExamModules(questionsPerModule = QUESTIONS_PER_MODULE) {
  const all = questionsData.questions;
  const chunkSize = Math.ceil(all.length / COURSE_MODULES.length);

  return COURSE_MODULES.map((moduleItem, moduleIndex) => {
    const start = moduleIndex * chunkSize;
    const pool = all.slice(start, start + chunkSize);
    const selected = shuffle(pool).slice(0, questionsPerModule);

    return {
      ...moduleItem,
      questions: selected.map((item) => ({
        id: item.id,
        question: item.question,
        options: OPTION_KEYS.map((key) => item.options[key]),
        correctIndex: OPTION_KEYS.indexOf(item.answer),
      })),
    };
  });
}

export function scoreModule(answers, questions) {
  const total = questions.length;
  let correct = 0;
  answers.forEach((selected, index) => {
    if (selected === questions[index].correctIndex) {
      correct += 1;
    }
  });
  const percent = Math.round((correct / total) * 100);
  return {
    correct,
    total,
    percent,
    passed: percent >= MODULE_PASS_PERCENT,
  };
}

export function scoreOverall(moduleScores) {
  const totals = moduleScores.reduce(
    (acc, item) => {
      acc.correct += item.correct;
      acc.total += item.total;
      return acc;
    },
    { correct: 0, total: 0 }
  );
  const percentage = Math.round((totals.correct / totals.total) * 100);
  const allPassed = moduleScores.every((item) => item.passed);
  return {
    score: totals.correct,
    totalQuestions: totals.total,
    percentage,
    allPassed,
  };
}
