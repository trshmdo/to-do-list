interface Task {
  title: string
  description: string
  status: "to-start" | "in-progress" | "completed"
}

export const TEST_DATA: Task[] = [
  {
    title: "ESLint",
    description: "настроить ESLint в проекте",
    status: "completed"
  },
  {
    title: "Prettier",
    description: "настроить Prettier в проекте",
    status: "completed"
  },
  {
    title: "Webpack",
    description: "настроить Webpack в проекте",
    status: "completed"
  },
  {
    title: "Typescript",
    description: "изучить Typescript ",
    status: "in-progress"
  },
  {
    title: "React",
    description: "изучить React",
    status: "in-progress"
  },
  {
    title: "Хранение данных",
    description:
      "отрефакторить хранение данных из файла на локальный стейт компонента StatusColumn",
    status: "to-start"
  },
  {
    title: "Добавить add-item",
    description: "поддержать добавление новой задачи (через стейт)",
    status: "to-start"
  },
  {
    title: "Поддержать статусы",
    description: "поддержать движение задачи по статусам",
    status: "to-start"
  },
  {
    title: "Отрефакториь хранение",
    description:
      "отрефакторить хранение данных из локального стейта на глобальный контекст приложения",
    status: "to-start"
  }
]
