import action from "../assets/action1.jpg";

export interface areasArrayInterface {
  name: string;
  src: string;
  readMoreIsOpen?: boolean;
}

const areasArray = [
  {
    name: "Criminalista Empresarial e Pessoa Física",
    src: action,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet earum molestias impedit cupiditate consequuntur omnis corporis, fuga dolore accusamus asperiores!",
  },
  {
    name: "Direito Trabalhista",
    src: action,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil veniam molestiae quibusdam nesciunt!",
  },
  {
    name: "Direito Civil",
    src: action,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni eius architecto dolorem earum numquam voluptatibus molestias iure?",
  },
  {
    name: "Direito de Família",
    src: action,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti eum fugiat. Nulla dolores vitae porro iure dolore nobis nisi illo rem.",
  },
];

export default areasArray;
