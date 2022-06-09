/// <reference types="react-scripts" />

type Tab = {
  id: string,
  title: string,
  content: FC<{}>,
}

type Tabs = {
  tabs: Tab[],
}

type Currency = {
  r030: number,
  txt: string,
  rate: number,
  cc: string,
  exchangedate: string,
}

type Info = {
  selectedCurrency: string,
  exchangeCours: Currency[],
}