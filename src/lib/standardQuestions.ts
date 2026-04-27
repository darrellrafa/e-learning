// Standard Path Question Bank — Multi-Subject (All English)
// Pattern per 4 nodes: Math → English → Science → Quiz (mixed)
// Floor 1: Node 1-8, Floor 2: Node 9-16, Floor 3: Node 17-24

export interface StandardQuestion {
  text: string;
  options: string[];
  correct: number; // index of correct answer
}

export type SubjectType = 'math' | 'english' | 'science' | 'quiz';

// Determine subject type based on node position in its 4-node set
export function getNodeSubject(nodeId: number): SubjectType {
  const posInSet = ((nodeId - 1) % 4); // 0=math, 1=english, 2=science, 3=quiz
  switch (posInSet) {
    case 0: return 'math';
    case 1: return 'english';
    case 2: return 'science';
    case 3: return 'quiz';
    default: return 'math';
  }
}

export function getSubjectLabel(subject: SubjectType): string {
  switch (subject) {
    case 'math': return 'Math';
    case 'english': return 'English';
    case 'science': return 'Science';
    case 'quiz': return 'Quiz';
  }
}

export function getSubjectEmoji(subject: SubjectType): string {
  switch (subject) {
    case 'math': return '🔢';
    case 'english': return '📖';
    case 'science': return '🔬';
    case 'quiz': return '⭐';
  }
}

type QuestionBank = Record<number, StandardQuestion[]>;

// ==========================================
// MATH QUESTIONS (Nodes 1, 5, 9, 13, 17, 21)
// ==========================================

const mathQuestions: QuestionBank = {
  // Node 1: Single-digit addition
  1: [
    { text: '2 + 3 = ...', options: ['4', '5', '6'], correct: 1 },
    { text: '4 + 1 = ...', options: ['5', '6', '3'], correct: 0 },
    { text: '3 + 3 = ...', options: ['5', '7', '6'], correct: 2 },
    { text: '1 + 4 = ...', options: ['6', '4', '5'], correct: 2 },
    { text: '2 + 2 = ...', options: ['3', '4', '5'], correct: 1 },
    { text: '5 + 1 = ...', options: ['5', '7', '6'], correct: 2 },
    { text: '3 + 2 = ...', options: ['4', '5', '6'], correct: 1 },
  ],
  // Node 5: Single-digit subtraction
  5: [
    { text: '9 - 4 = ...', options: ['4', '5', '6'], correct: 1 },
    { text: '7 - 3 = ...', options: ['3', '4', '5'], correct: 1 },
    { text: '8 - 5 = ...', options: ['2', '3', '4'], correct: 1 },
    { text: '6 - 2 = ...', options: ['3', '5', '4'], correct: 2 },
    { text: '10 - 3 = ...', options: ['6', '7', '8'], correct: 1 },
    { text: '5 - 1 = ...', options: ['3', '4', '5'], correct: 1 },
    { text: '8 - 2 = ...', options: ['5', '6', '7'], correct: 1 },
  ],
  // Node 9: Basic multiplication
  9: [
    { text: '3 × 4 = ...', options: ['10', '12', '14'], correct: 1 },
    { text: '5 × 2 = ...', options: ['8', '10', '12'], correct: 1 },
    { text: '6 × 3 = ...', options: ['15', '18', '21'], correct: 1 },
    { text: '4 × 4 = ...', options: ['12', '16', '20'], correct: 1 },
    { text: '7 × 2 = ...', options: ['12', '14', '16'], correct: 1 },
    { text: '2 × 8 = ...', options: ['14', '16', '18'], correct: 1 },
    { text: '3 × 5 = ...', options: ['12', '15', '18'], correct: 1 },
  ],
  // Node 13: Hundreds addition
  13: [
    { text: '125 + 230 = ...', options: ['345', '355', '365'], correct: 1 },
    { text: '310 + 180 = ...', options: ['480', '490', '500'], correct: 1 },
    { text: '450 + 120 = ...', options: ['560', '570', '580'], correct: 1 },
    { text: '200 + 350 = ...', options: ['540', '550', '560'], correct: 1 },
    { text: '175 + 225 = ...', options: ['390', '400', '410'], correct: 1 },
    { text: '280 + 310 = ...', options: ['580', '590', '600'], correct: 1 },
    { text: '140 + 260 = ...', options: ['390', '400', '410'], correct: 1 },
  ],
  // Node 17: Tens multiplication
  17: [
    { text: '12 × 11 = ...', options: ['122', '132', '142'], correct: 1 },
    { text: '15 × 10 = ...', options: ['140', '150', '160'], correct: 1 },
    { text: '13 × 12 = ...', options: ['146', '156', '166'], correct: 1 },
    { text: '11 × 14 = ...', options: ['144', '154', '164'], correct: 1 },
    { text: '16 × 10 = ...', options: ['150', '160', '170'], correct: 1 },
    { text: '10 × 18 = ...', options: ['170', '180', '190'], correct: 1 },
    { text: '14 × 11 = ...', options: ['144', '154', '164'], correct: 1 },
  ],
  // Node 21: Thousands addition
  21: [
    { text: '1250 + 3400 = ...', options: ['4550', '4650', '4750'], correct: 1 },
    { text: '2100 + 1800 = ...', options: ['3800', '3900', '4000'], correct: 1 },
    { text: '5600 + 1200 = ...', options: ['6700', '6800', '6900'], correct: 1 },
    { text: '3300 + 2700 = ...', options: ['5900', '6000', '6100'], correct: 1 },
    { text: '4500 + 1500 = ...', options: ['5900', '6000', '6100'], correct: 1 },
    { text: '1750 + 2250 = ...', options: ['3900', '4000', '4100'], correct: 1 },
    { text: '2800 + 3200 = ...', options: ['5900', '6000', '6100'], correct: 1 },
  ],
};

// ==========================================
// ENGLISH QUESTIONS (Nodes 2, 6, 10, 14, 18, 22)
// ==========================================

const englishQuestions: QuestionBank = {
  // Node 2: Basic vocabulary (animals, colors)
  2: [
    { text: 'What color is the sky?', options: ['Red', 'Blue', 'Green'], correct: 1 },
    { text: 'Which animal says "meow"?', options: ['Dog', 'Cat', 'Bird'], correct: 1 },
    { text: 'How many legs does a dog have?', options: ['Two', 'Four', 'Six'], correct: 1 },
    { text: 'What is the opposite of "hot"?', options: ['Warm', 'Cold', 'Big'], correct: 1 },
    { text: 'An "apple" is a type of...', options: ['Vegetable', 'Fruit', 'Meat'], correct: 1 },
    { text: 'What color is a banana?', options: ['Red', 'Green', 'Yellow'], correct: 2 },
    { text: 'Which one is a school supply?', options: ['Book', 'Table', 'Chair'], correct: 0 },
  ],
  // Node 6: Greetings & simple sentences
  6: [
    { text: 'What do you say in the morning?', options: ['Good Night', 'Good Morning', 'Good Bye'], correct: 1 },
    { text: 'What do you say when someone helps you?', options: ['Sorry', 'Thank you', 'Excuse me'], correct: 1 },
    { text: 'What do you say when you meet someone?', options: ['Goodbye', 'Hello', 'Sorry'], correct: 1 },
    { text: '"I am happy" means I feel...', options: ['Sad', 'Joyful', 'Angry'], correct: 1 },
    { text: 'What is the correct greeting at night?', options: ['Good Morning', 'Good Afternoon', 'Good Evening'], correct: 2 },
    { text: 'What do you say to get attention politely?', options: ['Thank you', 'Excuse me', 'Congratulations'], correct: 1 },
    { text: '"My name is..." is used to...', options: ['Introduce yourself', 'Say goodbye', 'Ask for help'], correct: 0 },
  ],
  // Node 10: Parts of body & family
  10: [
    { text: 'Which body part do we use to see?', options: ['Nose', 'Eyes', 'Ears'], correct: 1 },
    { text: 'Your mother\'s mother is your...', options: ['Aunt', 'Grandmother', 'Sister'], correct: 1 },
    { text: 'We use our "ears" to...', options: ['See', 'Hear', 'Smell'], correct: 1 },
    { text: 'Your father\'s son is your...', options: ['Brother', 'Sister', 'Uncle'], correct: 0 },
    { text: 'How many fingers do you have?', options: ['Eight', 'Ten', 'Twelve'], correct: 1 },
    { text: 'The "nose" is used for...', options: ['Eating', 'Smelling', 'Walking'], correct: 1 },
    { text: 'Your parent\'s father is called...', options: ['Grandmother', 'Grandfather', 'Uncle'], correct: 1 },
  ],
  // Node 14: Days & months
  14: [
    { text: 'How many days in a week?', options: ['5', '6', '7'], correct: 2 },
    { text: 'What day comes after Monday?', options: ['Sunday', 'Tuesday', 'Wednesday'], correct: 1 },
    { text: 'How many months in a year?', options: ['10', '11', '12'], correct: 2 },
    { text: 'The first month of the year is?', options: ['February', 'January', 'March'], correct: 1 },
    { text: 'Which day is the last day of the week?', options: ['Friday', 'Saturday', 'Sunday'], correct: 2 },
    { text: 'Which month has 28 or 29 days?', options: ['January', 'February', 'March'], correct: 1 },
    { text: 'The weekend days are...', options: ['Monday & Tuesday', 'Saturday & Sunday', 'Thursday & Friday'], correct: 1 },
  ],
  // Node 18: Verbs & actions
  18: [
    { text: 'What does "run" mean?', options: ['To walk slowly', 'To move quickly on foot', 'To sit down'], correct: 1 },
    { text: 'She ___ to school every day.', options: ['go', 'goes', 'going'], correct: 1 },
    { text: '"Eat" means to...', options: ['Drink', 'Consume food', 'Sleep'], correct: 1 },
    { text: 'They ___ playing football.', options: ['is', 'am', 'are'], correct: 2 },
    { text: 'What does "write" mean?', options: ['To read', 'To put words on paper', 'To draw pictures'], correct: 1 },
    { text: 'I ___ a student.', options: ['is', 'am', 'are'], correct: 1 },
    { text: '"Swim" means to move through...', options: ['Water', 'Air', 'Ground'], correct: 0 },
  ],
  // Node 22: Past tense basics
  22: [
    { text: 'Past tense of "go" is?', options: ['goed', 'went', 'gone'], correct: 1 },
    { text: 'I ___ breakfast this morning.', options: ['eat', 'ate', 'eaten'], correct: 1 },
    { text: 'Past tense of "see" is?', options: ['seed', 'seen', 'saw'], correct: 2 },
    { text: 'She ___ a letter yesterday.', options: ['write', 'wrote', 'written'], correct: 1 },
    { text: 'Past tense of "run" is?', options: ['runned', 'ran', 'running'], correct: 1 },
    { text: 'They ___ to the park last week.', options: ['walk', 'walked', 'walking'], correct: 1 },
    { text: 'Past tense of "have" is?', options: ['haved', 'has', 'had'], correct: 2 },
  ],
};

// ==========================================
// SCIENCE QUESTIONS (Nodes 3, 7, 11, 15, 19, 23)
// ==========================================

const scienceQuestions: QuestionBank = {
  // Node 3: Nature & animals
  3: [
    { text: 'Which animal can fly?', options: ['Fish', 'Bird', 'Cat'], correct: 1 },
    { text: 'The Sun rises from which direction?', options: ['West', 'North', 'East'], correct: 2 },
    { text: 'When water is heated, it becomes...', options: ['Ice', 'Steam', 'Oil'], correct: 1 },
    { text: 'Plants need ___ to grow.', options: ['Rocks', 'Water & sunlight', 'Sand'], correct: 1 },
    { text: 'How many legs does a spider have?', options: ['6', '8', '10'], correct: 1 },
    { text: 'The Moon orbits around the...', options: ['Sun', 'Earth', 'Mars'], correct: 1 },
    { text: 'Which part of a plant absorbs water?', options: ['Leaves', 'Flowers', 'Roots'], correct: 2 },
  ],
  // Node 7: Human body
  7: [
    { text: 'Which organ do we use to breathe?', options: ['Heart', 'Lungs', 'Kidneys'], correct: 1 },
    { text: 'The strongest bone in the body is the...', options: ['Femur (thigh bone)', 'Rib', 'Jaw bone'], correct: 0 },
    { text: 'Blood is pumped by which organ?', options: ['Brain', 'Lungs', 'Heart'], correct: 2 },
    { text: 'How many baby teeth do children have?', options: ['16', '20', '24'], correct: 1 },
    { text: 'Skin protects the body from...', options: ['Digesting food', 'Germs & damage', 'Pumping blood'], correct: 1 },
    { text: 'Vitamin D can be obtained from...', options: ['Sunlight', 'Rain', 'Wind'], correct: 0 },
    { text: 'The brain is located inside the...', options: ['Chest', 'Stomach', 'Skull'], correct: 2 },
  ],
  // Node 11: Solar system
  11: [
    { text: 'The closest planet to the Sun is...', options: ['Venus', 'Mercury', 'Mars'], correct: 1 },
    { text: 'The largest planet in our solar system is...', options: ['Saturn', 'Jupiter', 'Neptune'], correct: 1 },
    { text: 'Earth is the ___ planet from the Sun.', options: ['2nd', '3rd', '4th'], correct: 1 },
    { text: 'Which planet has rings?', options: ['Mars', 'Jupiter', 'Saturn'], correct: 2 },
    { text: 'The Sun is a...', options: ['Planet', 'Star', 'Moon'], correct: 1 },
    { text: 'How many planets are in our solar system?', options: ['7', '8', '9'], correct: 1 },
    { text: 'The "Red Planet" refers to...', options: ['Venus', 'Mars', 'Jupiter'], correct: 1 },
  ],
  // Node 15: Energy & forces
  15: [
    { text: 'The biggest source of energy on Earth is...', options: ['Moon', 'Stars', 'Sun'], correct: 2 },
    { text: 'Batteries produce ___ energy.', options: ['Light', 'Electrical', 'Heat'], correct: 1 },
    { text: 'Gravity pulls objects...', options: ['Up', 'Sideways', 'Down'], correct: 2 },
    { text: 'Energy from wind is called...', options: ['Solar energy', 'Wind energy', 'Water energy'], correct: 1 },
    { text: 'A light bulb converts electricity into...', options: ['Sound', 'Light', 'Motion'], correct: 1 },
    { text: 'Magnets can attract objects made of...', options: ['Wood', 'Plastic', 'Iron'], correct: 2 },
    { text: 'A fan converts electrical energy into...', options: ['Light', 'Heat', 'Motion'], correct: 2 },
  ],
  // Node 19: Basic chemistry
  19: [
    { text: 'The chemical formula for water is...', options: ['CO2', 'H2O', 'O2'], correct: 1 },
    { text: 'The gas we breathe in is...', options: ['Nitrogen', 'Oxygen', 'Carbon dioxide'], correct: 1 },
    { text: 'Ice is water in ___ state.', options: ['Gas', 'Liquid', 'Solid'], correct: 2 },
    { text: 'Photosynthesis produces which gas?', options: ['CO2', 'H2', 'O2'], correct: 2 },
    { text: 'Rusting iron reacts with...', options: ['Water & Oxygen', 'Soil', 'Light'], correct: 0 },
    { text: 'The periodic table was organized by...', options: ['Newton', 'Mendeleev', 'Einstein'], correct: 1 },
    { text: 'A pH of 7 indicates a ___ solution.', options: ['Acidic', 'Neutral', 'Basic'], correct: 1 },
  ],
  // Node 23: Cell biology
  23: [
    { text: 'The smallest unit of life is the...', options: ['Atom', 'Cell', 'Organ'], correct: 1 },
    { text: 'DNA has the shape of a...', options: ['Circle', 'Double helix', 'Triangle'], correct: 1 },
    { text: 'Mitochondria function as the cell\'s...', options: ['Brain', 'Power plant', 'Shield'], correct: 1 },
    { text: 'Red blood cells carry...', options: ['Fight germs', 'Oxygen', 'Clot blood'], correct: 1 },
    { text: 'Cell division is called...', options: ['Photosynthesis', 'Mitosis', 'Osmosis'], correct: 1 },
    { text: 'Humans have ___ pairs of chromosomes.', options: ['23', '24', '22'], correct: 0 },
    { text: 'The nucleus is the center of a...', options: ['Atom', 'Cell', 'Both'], correct: 2 },
  ],
};

// Quiz nodes: combine questions from the 3 preceding nodes
// Node 4 = quiz of 1,2,3 | Node 8 = quiz of 5,6,7
// Node 12 = quiz of 9,10,11 | Node 16 = quiz of 13,14,15
// Node 20 = quiz of 17,18,19 | Node 24 = quiz of 21,22,23

export function getStandardQuestions(nodeId: number): StandardQuestion[] {
  const subject = getNodeSubject(nodeId);
  
  if (subject === 'quiz') {
    // Gather questions from the 3 preceding nodes
    const quizQuestions: StandardQuestion[] = [];
    for (let i = 1; i <= 3; i++) {
      const prevNodeId = nodeId - i;
      const prevSubject = getNodeSubject(prevNodeId);
      let bank: QuestionBank;
      if (prevSubject === 'math') bank = mathQuestions;
      else if (prevSubject === 'english') bank = englishQuestions;
      else bank = scienceQuestions;
      
      const questions = bank[prevNodeId] || [];
      quizQuestions.push(...questions);
    }
    
    // Shuffle and pick 5
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }
  
  let bank: QuestionBank;
  if (subject === 'math') bank = mathQuestions;
  else if (subject === 'english') bank = englishQuestions;
  else bank = scienceQuestions;
  
  const questions = bank[nodeId];
  if (!questions || questions.length === 0) {
    // Fallback
    return mathQuestions[1] || [];
  }
  
  // Shuffle and pick 5
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
}
