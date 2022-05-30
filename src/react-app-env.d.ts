/// <reference types="react-scripts" />

interface Tab {
  id: string,
  title: string,
  content: FC<{}>,
}

interface Currency {
  ccy: string,
  base_ccy: string,
  buy: string,
  sale: string
}