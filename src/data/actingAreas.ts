import action1 from "../assets/action1.avif";
import action2 from "../assets/action2.avif";
import action3 from "../assets/action3.jpg";

export interface areasArrayInterface {
  name: string;
  src: string;
  readMoreIsOpen?: boolean;
}

export const areasArray = [
  {
    name: "Direito de Família",
    src: action1,
    description:
      "Ramo do Direito Civil que trata das relações familiares e suas obrigações, que afetam, direta ou indiretamente, a vida de todos. Temas como casamento, união estável, divórcio, guarda, alimentos, partilha de bens, inventário, etc.",
  },
  {
    name: "Direito Penal",
    src: action2,
    description:
      "Segmento do Direito Público que estabelece os princípios e regras que regulam a atividade penal do Estado.  É a parte do ordenamento jurídico que define as infrações penais (crimes e contravenções) e comina as suas respectivas sanções (penas e medidas de segurança).",
  },
  {
    name: "Direito Civil",
    src: action3,
    description:
      "Segmento do Direito Privado que pode ser descrito como “direito do cidadão”, que regula as relações jurídicas (direitos e obrigações) entre pessoas físicas e jurídicas na vida em sociedade.",
  },
];
