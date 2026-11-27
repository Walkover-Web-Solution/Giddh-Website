import questionsAe from "@/data/giddh-cert/questions-ae.json";
import questionsIn from "@/data/giddh-cert/questions-in.json";
import questionsUk from "@/data/giddh-cert/questions-uk.json";
import {
  MODULE_PASS_PERCENT,
  QUESTIONS_PER_MODULE,
} from "./constants";

const OPTION_KEYS = ["A", "B", "C", "D"];

const QUESTIONS_BY_COUNTRY = {
  in: questionsIn,
  global: questionsIn,
  ae: questionsAe,
  uk: questionsUk,
};

function getQuestionsData(country) {
  if (typeof country !== "string") {
    return QUESTIONS_BY_COUNTRY.global;
  }
  const bank = QUESTIONS_BY_COUNTRY[country.toLowerCase()];
  if (bank) {
    return bank;
  }
  return QUESTIONS_BY_COUNTRY.global;
}

function shuffle(list) {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function buildExamModules(country) {
  const questionsData = getQuestionsData(country);
  const all = questionsData.questions;
  const modules = questionsData.modules;
  const chunkSize = Math.ceil(all.length / modules.length);

  return modules.map((moduleItem, moduleIndex) => {
    const start = moduleIndex * chunkSize;
    const pool = all.slice(start, start + chunkSize);
    const selected = shuffle(pool).slice(0, QUESTIONS_PER_MODULE);

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
  const percent =
    total > 0 ? Math.round((correct / total) * 100) : 0;
  return {
    correct,
    total,
    percent,
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
  const percentage =
    totals.total > 0
      ? Math.round((totals.correct / totals.total) * 100)
      : 0;
  return {
    score: totals.correct,
    totalQuestions: totals.total,
    percentage,
    allPassed: percentage >= MODULE_PASS_PERCENT,
  };
}
