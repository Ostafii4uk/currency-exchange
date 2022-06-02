/// <reference types="react-scripts" />

interface Tab {
  id: string,
  title: string,
  content: FC<{}>,
}

interface Currency {
  r030: number,
  txt: string,
  rate: number,
  cc: string,
  exchangedate: string,
}