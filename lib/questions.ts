export type TextField = {
  label: {
    en: string;
    fr: string;
    ar: string;
  };
  key: string;
  name: string;
  placeholder: {
    en: string;
    fr: string;
    ar: string;
  };
};

export type BaseQuestion<T extends string> = {
  type: T;
  q: {
    en: string;
    fr: string;
    ar: string;
  };
  name: string;
};

export type TextQuestion = BaseQuestion<"text"> & {
  fields: TextField[];
};

export type ChoiceQuestion = BaseQuestion<"choice"> & {
  choices: {
    index: number;
    en: string;
    fr: string;
    ar: string;
  }[];
};

export type TextareaQuestion = BaseQuestion<"textarea"> & {
  placeholder: {
    en: string;
    fr: string;
    ar: string;
  };
};

export type Question = TextQuestion | ChoiceQuestion | TextareaQuestion;

export const questions: Question[] = [
  {
    type: "text",
    name: "name",
    q: {
      en: "Please enter your first and last name",
      fr: "Veuillez entrer votre nom et prénom",
      ar: "يرجى إدخال اسمك الأول واسم العائلة",
    },
    fields: [
      {
        label: { en: "First Name", fr: "Prénom", ar: "الاسم الأول" },
        key: "first name",
        name: "first_name",
        placeholder: {
          en: "Enter your first name",
          fr: "Entrez votre prénom",
          ar: "أدخل اسمك الأول",
        },
      },
      {
        label: { en: "Last Name", fr: "Nom", ar: "الاسم العائلي" },
        key: "last name",
        name: "last_name",
        placeholder: {
          en: "Enter your last name",
          fr: "Entrez votre nom",
          ar: "أدخل اسم عائلتك",
        },
      },
    ],
  },
  {
    type: "choice",
    q: {
      en: "Select your educational level",
      fr: "Sélectionnez votre niveau d'éducation",
      ar: "اختر مستواك التعليمي",
    },
    choices: [
      { index: 0, en: "TCS", fr: "TCS", ar: "TCS" },
      { index: 1, en: "1BAC", fr: "1BAC", ar: "1BAC" },
      { index: 2, en: "2BAC", fr: "2BAC", ar: "2BAC" },
    ],
    name: "educationalLevel",
  },
  {
    type: "choice",
    q: {
      en: "What type of bullying are you experiencing?",
      fr: "Quel type d'intimidation subissez-vous?",
      ar: "ما نوع التنمر الذي تتعرض له؟",
    },
    choices: [
      { index: 0, en: "Verbal", fr: "Verbal", ar: "لفظي" },
      { index: 1, en: "Physical", fr: "Physique", ar: "جسدي" },
      { index: 2, en: "Cyber", fr: "Cyber", ar: "الكتروني" },
      { index: 3, en: "Social", fr: "Social", ar: "اجتماعي" },
    ],
    name: "bullyingType",
  },
  {
    type: "choice",
    q: {
      en: "How often does it occur?",
      fr: "À quelle fréquence cela se produit-il?",
      ar: "كم مرة يحدث هذا؟",
    },
    choices: [
      { index: 0, en: "Daily", fr: "Quotidiennement", ar: "يوميًا" },
      { index: 1, en: "Sometimes", fr: "Parfois", ar: "أحيانًا" },
      { index: 2, en: "Rarely", fr: "Rarement", ar: "نادراً" },
    ],
    name: "bullyingFrequency",
  },
  {
    type: "choice",
    q: {
      en: "Who is involved in the bullying?",
      fr: "Qui est impliqué dans l'intimidation?",
      ar: "من المتورط في التنمر؟",
    },
    choices: [
      {
        index: 0,
        en: "Classmates",
        fr: "Camarades de classe",
        ar: "زملاء الدراسة",
      },
      { index: 1, en: "Teachers", fr: "Enseignants", ar: "المعلمين" },
      {
        index: 2,
        en: "School Staff",
        fr: "Personnel scolaire",
        ar: "موظفو المدرسة",
      },
    ],
    name: "bullyingInvolved",
  },
  {
    type: "choice",
    q: {
      en: "How do you feel about it?",
      fr: "Comment vous sentez-vous à ce sujet?",
      ar: "كيف تشعر حيال ذلك؟",
    },
    choices: [
      { index: 0, en: "Sad", fr: "Triste", ar: "حزين" },
      { index: 1, en: "Angry", fr: "En colère", ar: "غاضب" },
      { index: 2, en: "Scared", fr: "Effrayé", ar: "خائف" },
      { index: 3, en: "Helpless", fr: "Impuissant", ar: "عاجز" },
    ],
    name: "bullyingFeel",
  },
  {
    type: "choice",
    q: {
      en: "Have you spoken to anyone about this?",
      fr: "Avez-vous parlé à quelqu'un de cela?",
      ar: "هل تحدثت إلى أي شخص عن هذا؟",
    },
    choices: [
      { index: 0, en: "Yes", fr: "Oui", ar: "نعم" },
      { index: 1, en: "No", fr: "Non", ar: "لا" },
    ],
    name: "bullyingSpoken",
  },
  {
    type: "choice",
    q: {
      en: "Do you feel safe at school?",
      fr: "Vous sentez-vous en sécurité à l'école?",
      ar: "هل تشعر بالأمان في المدرسة؟",
    },
    choices: [
      { index: 0, en: "Yes", fr: "Oui", ar: "نعم" },
      { index: 1, en: "No", fr: "Non", ar: "لا" },
    ],
    name: "bullyingSafe",
  },
  {
    type: "choice",
    q: {
      en: "Would you like to talk to a counselor?",
      fr: "Souhaitez-vous parler à un conseiller?",
      ar: "هل ترغب في التحدث إلى مستشار؟",
    },
    choices: [
      { index: 0, en: "Yes", fr: "Oui", ar: "نعم" },
      { index: 1, en: "No", fr: "Non", ar: "لا" },
    ],
    name: "bullyingCounselor",
  },
  {
    type: "choice",
    q: {
      en: "Does bullying affect your studies?",
      fr: "L'intimidation affecte-t-elle vos études?",
      ar: "هل يؤثر التنمر على دراستك؟",
    },
    choices: [
      { index: 0, en: "Yes", fr: "Oui", ar: "نعم" },
      { index: 1, en: "No", fr: "Non", ar: "لا" },
    ],
    name: "bullyingStudies",
  },
  {
    type: "choice",
    q: {
      en: "Have you noticed changes in your behavior?",
      fr: "Avez-vous remarqué des changements dans votre comportement?",
      ar: "هل لاحظت تغييرات في سلوكك؟",
    },
    choices: [
      { index: 0, en: "Yes", fr: "Oui", ar: "نعم" },
      { index: 1, en: "No", fr: "Non", ar: "لا" },
    ],
    name: "bullyingBehavior",
  },
  {
    type: "choice",
    q: {
      en: "Would you like more help and information?",
      fr: "Souhaitez-vous plus d'aide et d'informations?",
      ar: "هل ترغب في المزيد من المساعدة والمعلومات؟",
    },
    choices: [
      { index: 0, en: "Yes", fr: "Oui", ar: "نعم" },
      { index: 1, en: "No", fr: "Non", ar: "لا" },
    ],
    name: "bullyingHelp",
  },
  {
    type: "textarea",
    q: {
      en: "Please describe your problem in detail",
      fr: "Veuillez décrire votre problème en détail",
      ar: "يرجى وصف مشكلتك بالتفصيل",
    },
    placeholder: {
      en: "Enter your description here...",
      fr: "Entrez votre description ici...",
      ar: "أدخل وصفك هنا...",
    },
    name: "description",
  },
];
