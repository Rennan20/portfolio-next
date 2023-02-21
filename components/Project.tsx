export type ProjectType = {
  id: number;
  src: string;
  alt: string;
  name: string;
  description: string;
  link: string;
  type: number;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    src: "/portfolio-desktop-removebg-preview.png",
    alt: "Portfolio",
    name: "Landing Page",
    description:
      "Meu primeiro portfólio, lá estão vários projetos mais básicos e é um bom comparativo da minha evolução!",
    link: "https://rennan20.github.io/meu-portfolio/",
    type: 1,
  },
  {
    id: 2,
    src: "/extense-desktop-removebg-preview.png",
    alt: "Gerenciador Financeiro",
    name: "Manager",
    description:
      "Aplicativo onde o usuário pode fazer o gerenciamento dos seus gastos e calcular o total no mês, feito com React",
    link: "https://expense-manager-beryl.vercel.app/",
    type: 2,
  },
  {
    id: 3,
    src: "/calc-desktop-removebg-preview.png",
    alt: "Calculadora IMC",
    name: "Calculadora IMC",
    description: "Calculadora de IMC simples feita em React com Vite.",
    link: "https://react-calc-imc-snowy.vercel.app/",
    type: 3,
  },
  {
    id: 4,
    src: "/rpg-desktop-removebg-preview.png",
    alt: "RPG",
    name: "Mini RPG",
    description:
      "Interação de diversos elementos no estilo RPG, feito em React",
    link: "https://rpg-tag.vercel.app/",
    type: 4,
  },
  {
    id: 5,
    src: "/nft-desktop-removebg-preview.png",
    alt: "NFT Droper",
    name: "NFT Droper",
    description:
      "Aplicativo para gerar NFT, o usuário pode logar com MetaMask e gerar uma NFT da coleção salva no Sanity e ThirdWeb",
    link: "https://nft-drop-mu-lilac.vercel.app/",
    type: 5,
  },
  {
    id: 6,
    src: "/chat-desktop-removebg-preview.png",
    alt: "ChatGPT",
    name: "Clone ChatGPT",
    description:
      "Clone do chatGPT usando a API da OpenAI, o usuário pode fazer login com Google, os dados são armazenados com Firebase",
    link: "https://chatgpt-clone-hazel.vercel.app/",
    type: 6,
  },
  {
    id: 7,
    src: "/netflix-desktop-removebg-preview.png",
    alt: "Clone Netflix",
    name: "Clone Netflix",
    description:
      "Clone da Netflix, onde o usuário pode se cadastrar e acessar a tela de filmes, utiliza Firebase para manter os dados de login e carrega os filmes através de uma API externa",
    link: "https://netflix-clone-51cb3.web.app/",
    type: 7,
  },
  {
    id: 8,
    src: "/mks-desktop-removebg-preview.png",
    alt: "E-commerce",
    name: "E-commerce",
    description:
      "Site de comércio digital usando API da MKSSistemas, o site possui carrinho de compras e validação de pagamento",
    link: "https://mks-loja-teste.vercel.app/",
    type: 8,
  },
];
