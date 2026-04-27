// Interest-Based Question Bank (Progressive Difficulty) â€” All English
// Floor 1: Node 1-8 (Boss at Node 4 and 8)
// Each Node has at least 7 questions, system picks 5 randomly

export interface InterestQuestion {
  text: string;
  options: string[];
  correct: number; // index of correct answer in options array
}

type QuestionBank = Record<number, InterestQuestion[]>;

// ==========================================
// COMPUTER INTEREST â€” Floor 1 (Node 1-8)
// ==========================================
export const computerQuestions: QuestionBank = {
  // Node 1: Basic Hardware
  1: [
    { text: 'What device is used to type letters on a computer?', options: ['Keyboard', 'Mouse', 'Speaker'], correct: 0 },
    { text: 'The computer screen used to display images is called a...', options: ['Printer', 'Monitor', 'CPU'], correct: 1 },
    { text: 'What device do you slide and click on a desk?', options: ['Headset', 'Keyboard', 'Mouse'], correct: 2 },
    { text: 'What device prints documents onto paper?', options: ['Printer', 'Scanner', 'Mouse'], correct: 0 },
    { text: 'Computer sound comes out through the...', options: ['Monitor', 'Speaker', 'Keyboard'], correct: 1 },
    { text: 'What device lets you listen to audio privately?', options: ['Mic', 'Speaker', 'Headset'], correct: 2 },
    { text: 'A webcam is used to...', options: ['Type', 'Record video', 'Print'], correct: 1 },
  ],

  // Node 2: Basic Software
  2: [
    { text: 'To write stories on a computer, which app do you use?', options: ['Microsoft Word', 'Paint', 'Calculator'], correct: 0 },
    { text: 'To draw on a computer, you use...', options: ['Notepad', 'Paint', 'Excel'], correct: 1 },
    { text: 'To calculate numbers on a computer, you use...', options: ['Word', 'Paint', 'Calculator'], correct: 2 },
    { text: 'A browser is used to...', options: ['Draw', 'Browse the internet', 'Print'], correct: 1 },
    { text: 'Which of these is an internet browser?', options: ['Chrome', 'Word', 'Paint'], correct: 0 },
    { text: 'Which application is used to create presentations?', options: ['Excel', 'Paint', 'PowerPoint'], correct: 2 },
    { text: 'The "Save" button is used to...', options: ['Delete a file', 'Save a file', 'Open a file'], correct: 1 },
  ],

  // Node 3: Internet & Communication
  3: [
    { text: 'The internet is useful for...', options: ['Cooking', 'Finding information', 'Sleeping'], correct: 1 },
    { text: 'Email is used to...', options: ['Send digital letters', 'Play games', 'Draw'], correct: 0 },
    { text: 'The "@" symbol is commonly found in...', options: ['Phone numbers', 'Email addresses', 'Home addresses'], correct: 1 },
    { text: 'WiFi is used to...', options: ['Cook', 'Turn on lights', 'Connect to the internet'], correct: 2 },
    { text: 'YouTube is a platform for...', options: ['Watching videos', 'Writing letters', 'Calculating'], correct: 0 },
    { text: 'A video call means...', options: ['A phone call with video', 'Sending an email', 'Printing photos'], correct: 0 },
    { text: 'Google is used to...', options: ['Print paper', 'Search the internet', 'Write letters'], correct: 1 },
  ],

  // Node 4 (BOSS): Mixed Hardware & Internet
  4: [
    { text: 'Where is a saved file stored?', options: ['On the internet', 'In computer storage', 'In the printer'], correct: 1 },
    { text: 'What does Ctrl + C do on a keyboard?', options: ['Delete', 'Copy', 'Save'], correct: 1 },
    { text: 'What happens if a computer has no electricity?', options: ['It stays on', 'It turns off', 'It gets faster'], correct: 1 },
    { text: 'A USB Flash Drive is also called a...', options: ['Flash drive', 'Hard disk', 'Monitor'], correct: 0 },
    { text: 'Which is NOT computer hardware?', options: ['Mouse', 'Keyboard', 'Microsoft Word'], correct: 2 },
    { text: 'A secure website usually starts with...', options: ['http://', 'https://', 'ftp://'], correct: 1 },
    { text: 'What does the "Delete" key do?', options: ['Save', 'Erase', 'Print'], correct: 1 },
  ],

  // Node 5: Types of Computers & Gadgets
  5: [
    { text: 'A portable computer is called a...', options: ['Desktop', 'Laptop', 'Server'], correct: 1 },
    { text: 'A tablet is operated using a...', options: ['Physical keyboard', 'Touch screen', 'Mouse'], correct: 1 },
    { text: 'A smartwatch is a watch that can...', options: ['Fly', 'Connect to the internet', 'Cook'], correct: 1 },
    { text: 'A smartphone is a combination of...', options: ['Phone and computer', 'TV and radio', 'Printer and scanner'], correct: 0 },
    { text: 'A gaming console is used to...', options: ['Cook', 'Play video games', 'Write emails'], correct: 1 },
    { text: 'A large computer that serves many users is called a...', options: ['Laptop', 'Tablet', 'Server'], correct: 2 },
    { text: 'A VR Headset is used to...', options: ['Read books', 'See virtual worlds', 'Write code'], correct: 1 },
  ],

  // Node 6: Digital Safety & Ethics
  6: [
    { text: 'A password should be...', options: ['Shared with all friends', 'Kept secret', 'Written on paper'], correct: 1 },
    { text: 'If a stranger asks for personal data online, you should...', options: ['Give it away', 'Tell a parent', 'Ignore and block'], correct: 2 },
    { text: 'Computer viruses can spread through...', options: ['Downloaded files', 'The monitor screen', 'Speakers'], correct: 0 },
    { text: 'Antivirus software is useful for...', options: ['Speeding up internet', 'Protecting from viruses', 'Drawing'], correct: 1 },
    { text: 'Cyberbullying means...', options: ['Playing games', 'Harassing people online', 'Learning online'], correct: 1 },
    { text: 'Which personal info should NOT be shared online?', options: ['Favorite color', 'Home address', 'Hobbies'], correct: 1 },
    { text: 'Spam emails should be...', options: ['Opened', 'Replied to', 'Deleted / ignored'], correct: 2 },
  ],

  // Node 7: Basics of Coding & Logic
  7: [
    { text: 'Coding means...', options: ['Writing instructions for a computer', 'Drawing', 'Playing games'], correct: 0 },
    { text: 'An easy programming language for kids is...', options: ['Scratch', 'C++', 'Assembly'], correct: 0 },
    { text: 'A "bug" in programming means...', options: ['An insect', 'An error in the code', 'A virus'], correct: 1 },
    { text: 'What is the result of: "If it rains, bring an umbrella"?', options: ['Always bring an umbrella', 'Only bring one when it rains', 'Never bring an umbrella'], correct: 1 },
    { text: 'A robot is powered by...', options: ['Magic', 'Programs / code', 'Wind'], correct: 1 },
    { text: 'A "loop" in coding means...', options: ['Stop forever', 'Repeat a command', 'Delete a file'], correct: 1 },
    { text: 'An algorithm is...', options: ['A type of computer', 'Steps to solve a problem', 'An app name'], correct: 1 },
  ],

  // Node 8 (BOSS): Mixed Floor 1 Topics
  8: [
    { text: 'Which of these is an INPUT device?', options: ['Monitor', 'Speaker', 'Keyboard'], correct: 2 },
    { text: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Personal Use', 'Central Power Unit'], correct: 0 },
    { text: 'Which of these is an operating system?', options: ['Windows', 'Google', 'YouTube'], correct: 0 },
    { text: 'RAM is used for...', options: ['Temporary data storage', 'Printing documents', 'Displaying images'], correct: 0 },
    { text: 'The code "print(Hello)" will...', options: ['Print paper', 'Display "Hello" on screen', 'Delete the file Hello'], correct: 1 },
    { text: 'How many bytes are in 1 Kilobyte?', options: ['100', '1024', '500'], correct: 1 },
    { text: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Making Language'], correct: 0 },
  ],

  // ================= FLOOR 2 (Node 9-16) =================
  9: [
    { text: 'The operating system for Apple Mac is called?', options: ['Windows', 'macOS', 'Linux'], correct: 1 },
    { text: 'Which open-source OS has a penguin logo?', options: ['Linux', 'Windows', 'Android'], correct: 0 },
    { text: '".com" in a web address stands for?', options: ['Community', 'Commercial', 'Computer'], correct: 1 },
    { text: 'What is the main function of RAM?', options: ['Store permanent data', 'Store temporary data', 'Cool the CPU'], correct: 1 },
    { text: 'The naming system for website addresses is called?', options: ['URL', 'USB', 'UFO'], correct: 0 },
  ],
  10: [
    { text: 'The main programming language for interactive web pages?', options: ['Java', 'JavaScript', 'C++'], correct: 1 },
    { text: 'The HTML tag for a paragraph is?', options: ['<p>', '<br>', '<h1>'], correct: 0 },
    { text: 'To style a web page (colors, layout), you use?', options: ['HTML', 'CSS', 'PHP'], correct: 1 },
    { text: 'MySQL is a type of?', options: ['Operating System', 'Database', 'Browser'], correct: 1 },
    { text: 'A famous CSS framework is?', options: ['Tailwind', 'React', 'Node'], correct: 0 },
  ],
  11: [
    { text: 'The main component of a wireless network?', options: ['LAN Cable', 'Router / Access Point', 'Monitor'], correct: 1 },
    { text: 'A device that converts digital to analog signals?', options: ['Modem', 'Switch', 'Hub'], correct: 0 },
    { text: 'What is "Ping"?', options: ['Check processor speed', 'Check network connection', 'Delete files'], correct: 1 },
    { text: 'The secure hypertext transfer protocol is?', options: ['HTTP', 'HTTPS', 'FTP'], correct: 1 },
    { text: 'Storing data on internet servers is called?', options: ['Cloud storage', 'Hard disk', 'Flash drive'], correct: 0 },
  ],
  12: [
    { text: 'The technique of scrambling data for security is called?', options: ['Encryption', 'Compression', 'Extraction'], correct: 0 },
    { text: 'A hacker who works for good purposes is called?', options: ['Black Hat', 'White Hat', 'Grey Hat'], correct: 1 },
    { text: 'An attack that manipulates people (e.g., phone scams)?', options: ['Phishing', 'Social Engineering', 'Malware'], correct: 1 },
    { text: 'Harmful software is called?', options: ['Freeware', 'Malware', 'Software'], correct: 1 },
    { text: 'Stealing data by creating fake websites is called?', options: ['Phishing', 'Carding', 'DDoS'], correct: 0 },
  ],
  13: [
    { text: 'Artificial intelligence is abbreviated as?', options: ['VR', 'AI', 'AR'], correct: 1 },
    { text: 'The OpenAI chatbot technology is called?', options: ['Siri', 'Alexa', 'ChatGPT'], correct: 2 },
    { text: 'The part of AI that learns from data is called?', options: ['Machine Learning', 'Data Mining', 'Big Data'], correct: 0 },
    { text: 'AI for recognizing faces in photos is called?', options: ['Speech Recognition', 'Computer Vision', 'NLP'], correct: 1 },
    { text: 'An everyday example of AI is?', options: ['Mechanical keyboard', 'YouTube recommendations', 'USB cable'], correct: 1 },
  ],
  14: [
    { text: 'Object-oriented programming is abbreviated as?', options: ['OOP', 'API', 'UI'], correct: 0 },
    { text: 'Where do programmers store code collaboratively?', options: ['Google Drive', 'GitHub', 'Dropbox'], correct: 1 },
    { text: 'Finding and fixing code errors is called?', options: ['Deploying', 'Debugging', 'Compiling'], correct: 1 },
    { text: 'True or False logic uses which data type?', options: ['String', 'Integer', 'Boolean'], correct: 2 },
    { text: 'A data structure with key-value pairs?', options: ['Array', 'Dictionary', 'String'], correct: 1 },
  ],
  15: [
    { text: 'Digital currency secured by cryptography?', options: ['E-money', 'Cryptocurrency', 'Credit Card'], correct: 1 },
    { text: 'The technology behind Bitcoin is?', options: ['Cloud', 'Blockchain', 'AI'], correct: 1 },
    { text: 'Virtual reality uses a device called?', options: ['Mouse', 'VR Headset', 'Webcam'], correct: 1 },
    { text: 'Augmented Reality (AR) means?', options: ['A fully fake world', 'Digital objects in the real world', 'A movie fantasy world'], correct: 1 },
    { text: 'A famous AR game where you catch monsters?', options: ['PUBG', 'Pokemon GO', 'Minecraft'], correct: 1 },
  ],
  16: [
    { text: 'What is IoT (Internet of Things)?', options: ['Everyday devices connected to the internet', 'Space internet', 'A super gaming PC'], correct: 0 },
    { text: 'The fastest storage device for an OS?', options: ['SSD', 'HDD', 'Flash drive'], correct: 0 },
    { text: 'A modern display port besides HDMI?', options: ['VGA', 'DisplayPort', 'USB-A'], correct: 1 },
    { text: 'The latest super-fast network after 4G?', options: ['3G', '5G', 'WiFi 6'], correct: 1 },
    { text: 'An application connecting backend and frontend?', options: ['OS', 'API', 'SQL'], correct: 1 },
  ],

  // ================= FLOOR 3 (Node 17-24) =================
  17: [
    { text: 'The most popular programming language for Data Science?', options: ['Java', 'PHP', 'Python'], correct: 2 },
    { text: 'What does SQL stand for?', options: ['System Query Language', 'Structured Query Language', 'Simple Question Logic'], correct: 1 },
    { text: 'A NoSQL database (not using tables)?', options: ['MySQL', 'PostgreSQL', 'MongoDB'], correct: 2 },
    { text: 'The data type for decimal numbers is called?', options: ['Integer', 'Float', 'String'], correct: 1 },
    { text: 'The single-line comment symbol in JavaScript?', options: ['//', '<!--', '#'], correct: 0 },
  ],
  18: [
    { text: 'What is a DDoS attack?', options: ['Cracking passwords', 'Flooding a server with fake traffic', 'Sending fake emails'], correct: 1 },
    { text: 'What is Ransomware?', options: ['A password-stealing virus', 'A virus that holds data hostage for ransom', 'An ad-generating virus'], correct: 1 },
    { text: 'What does VPN stand for?', options: ['Virtual Private Network', 'Versatile Public Network', 'Visual Proxy Name'], correct: 0 },
    { text: 'The modern web security protocol is?', options: ['SSL/TLS', 'WPA', 'HTTP'], correct: 0 },
    { text: 'Bypassing security using human weaknesses is called?', options: ['Brute Force', 'Social Engineering', 'SQL Injection'], correct: 1 },
  ],
  19: [
    { text: 'The largest cloud company (AWS) is owned by?', options: ['Google', 'Microsoft', 'Amazon'], correct: 2 },
    { text: 'Microsoft\'s cloud service is called?', options: ['Azure', 'GCP', 'AWS'], correct: 0 },
    { text: 'IaaS stands for?', options: ['Internet as a Service', 'Infrastructure as a Service', 'Item as a Service'], correct: 1 },
    { text: 'Scalability in servers means?', options: ['Ability to be hacked', 'Ability to handle load spikes', 'Ability to design UI'], correct: 1 },
    { text: 'A popular app containerization tool?', options: ['Docker', 'Windows', 'Android'], correct: 0 },
  ],
  20: [
    { text: 'The part of RAM that stores graphics?', options: ['VRAM', 'SRAM', 'DRAM'], correct: 0 },
    { text: 'ARM architecture processors are commonly found in?', options: ['Gaming PCs', 'Smartphones', 'Database Servers'], correct: 1 },
    { text: 'Screen refresh rate is measured in?', options: ['MHz', 'Hz', 'RPM'], correct: 1 },
    { text: 'Liquid processor cooling is called?', options: ['Heatsink', 'Liquid Cooling', 'Thermal Paste'], correct: 1 },
    { text: 'What controls all communication to/from the CPU?', options: ['Motherboard / Chipset', 'Power Supply', 'Case'], correct: 0 },
  ],
  21: [
    { text: 'NLP in AI is related to?', options: ['Recognizing car images', 'Understanding human text and language', 'Playing chess'], correct: 1 },
    { text: 'Artificial neural networks are called?', options: ['Neural Network', 'Biological Network', 'Social Network'], correct: 0 },
    { text: 'A famous AI model that generates images from text?', options: ['Midjourney / DALL-E', 'Google Docs', 'Spotify'], correct: 0 },
    { text: 'AI that can pass as human is tested with?', options: ['Turing Test', 'IQ Test', 'TOEFL Test'], correct: 0 },
    { text: 'Autonomous robots like Tesla use AI in?', options: ['Web Dev', 'Self-Driving / Computer Vision', 'Data Entry'], correct: 1 },
  ],
  22: [
    { text: 'The stage of finding UI concepts before coding?', options: ['Deployment', 'Prototyping / Wireframing', 'Server Setup'], correct: 1 },
    { text: 'The difference between UX and UI?', options: ['UX is shape, UI is experience', 'UX is experience, UI is visual design', 'They are the same'], correct: 1 },
    { text: 'Agile in software development is a methodology that is?', options: ['Slow and steady', 'Rigid', 'Fast, flexible, iterative'], correct: 2 },
    { text: 'Working on the user-facing side of an app is called?', options: ['Frontend', 'Backend', 'Database'], correct: 0 },
    { text: 'A version control system besides Git/SVN?', options: ['Mercurial', 'GitHub', 'Google Drive'], correct: 0 },
  ],
  23: [
    { text: 'The double colon (::) in C++ is called?', options: ['Scope Resolution', 'Comments', 'Pointer'], correct: 0 },
    { text: 'Hexadecimal numbers are base...', options: ['10', '2', '16'], correct: 2 },
    { text: '1 Byte consists of how many Bits?', options: ['4', '8', '16'], correct: 1 },
    { text: 'If both inputs are True, the result is True â€” this is called?', options: ['OR', 'NOT', 'AND'], correct: 2 },
    { text: 'A function that calls itself is called?', options: ['Iterative', 'Recursive', 'Looping'], correct: 1 },
  ],
  24: [
    { text: 'Quantum computers use a basic unit called?', options: ['Bit', 'Byte', 'Qubit'], correct: 2 },
    { text: 'What is a Zero-Day Exploit?', options: ['A night attack', 'An attack on an unpatched vulnerability', 'Total data deletion attack'], correct: 1 },
    { text: 'The fastest search algorithm (Log N) is?', options: ['Linear Search', 'Binary Search', 'Bubble Sort'], correct: 1 },
    { text: 'The Mars Rover operating system is?', options: ['Windows 10', 'VxWorks (Linux-based)', 'macOS'], correct: 1 },
    { text: 'The basic microscopic silicon component inside a CPU?', options: ['Transistor', 'Resistor', 'Capacitor'], correct: 0 },
  ],
};

// ==========================================
// SPORT INTEREST â€” All Floors (Node 1-24)
// ==========================================
export const sportQuestions: QuestionBank = {
  // Node 1: Basic Sports
  1: [
    { text: 'The sport of kicking a ball into a goal is called?', options: ['Football/Soccer', 'Basketball', 'Tennis'], correct: 0 },
    { text: 'A sport played in water is?', options: ['Running', 'Swimming', 'Cycling'], correct: 1 },
    { text: 'A short-distance running race is called a?', options: ['Marathon', 'Sprint', 'Jogging'], correct: 1 },
    { text: 'Badminton uses what equipment?', options: ['Racket', 'Stick', 'Gloves'], correct: 0 },
    { text: 'A basketball is shot into a?', options: ['Goal', 'Hoop', 'Net'], correct: 1 },
    { text: 'A sport of hitting a small ball with a club?', options: ['Golf', 'Swimming', 'Running'], correct: 0 },
    { text: 'A martial art originating from Japan?', options: ['Karate', 'Boxing', 'Wrestling'], correct: 0 },
  ],
  // Node 2: Sports Equipment
  2: [
    { text: 'Boxing hand protection is called?', options: ['Helmet', 'Gloves', 'Shoes'], correct: 1 },
    { text: 'A shuttlecock is used in which sport?', options: ['Tennis', 'Badminton', 'Basketball'], correct: 1 },
    { text: 'A goal post is found in which sport?', options: ['Basketball', 'Volleyball', 'Football/Soccer'], correct: 2 },
    { text: 'Swimming eyewear is also called?', options: ['Goggles', 'Helmet', 'Gloves'], correct: 0 },
    { text: 'A net is used in which sport?', options: ['Running', 'Volleyball', 'Gymnastics'], correct: 1 },
    { text: 'Shoes made specifically for running are called?', options: ['Boots', 'Running shoes', 'Sandals'], correct: 1 },
    { text: 'Cones are used for?', options: ['Dribbling practice', 'Swimming', 'Archery'], correct: 0 },
  ],
  // Node 3: Basic Sports Rules
  3: [
    { text: 'In football/soccer, how many players per team?', options: ['9', '11', '7'], correct: 1 },
    { text: 'A red card in football means?', options: ['Goal', 'Ejected from the match', 'Warm-up'], correct: 1 },
    { text: 'Offside in football is when a player is?', options: ['Behind the last defender', 'Taking a free kick', 'Being substituted'], correct: 0 },
    { text: 'A set point in badminton is how many?', options: ['15', '21', '25'], correct: 1 },
    { text: 'Traveling in basketball means?', options: ['Walking with the ball without dribbling', 'Throwing the ball high', 'Scoring a basket'], correct: 0 },
    { text: 'In volleyball, a team can hit the ball a maximum of?', options: ['2 times', '3 times', '5 times'], correct: 1 },
    { text: 'A referee uses a whistle to?', options: ['Sing', 'Signal / give commands', 'Call the audience'], correct: 1 },
  ],
  // Node 4 (BOSS): Mixed Basic Sports
  4: [
    { text: 'The Olympics are held every how many years?', options: ['2 years', '4 years', '5 years'], correct: 1 },
    { text: 'Which sport uses a racket and a net?', options: ['Swimming', 'Badminton', 'Running'], correct: 1 },
    { text: 'How long is one half of a football match?', options: ['30 minutes', '45 minutes', '60 minutes'], correct: 1 },
    { text: 'A penalty kick is taken from how far?', options: ['6 meters', '12 meters', '18 meters'], correct: 1 },
    { text: 'An Olympic swimming pool is how long?', options: ['25 meters', '50 meters', '100 meters'], correct: 1 },
    { text: 'The ball used in table tennis is colored?', options: ['Red', 'Green', 'White / Orange'], correct: 2 },
    { text: 'Freestyle in swimming means which stroke?', options: ['Free', 'Backstroke', 'Butterfly'], correct: 0 },
  ],
  // Node 5: World Sports
  5: [
    { text: 'The national sport of Indonesia is?', options: ['Football', 'Pencak Silat', 'Badminton'], correct: 1 },
    { text: 'Baseball is very popular in?', options: ['Indonesia', 'USA & Japan', 'India'], correct: 1 },
    { text: 'Cricket is popular in?', options: ['Brazil', 'India & England', 'Germany'], correct: 1 },
    { text: 'The FIFA World Cup is for which sport?', options: ['Basketball', 'Football/Soccer', 'Tennis'], correct: 1 },
    { text: 'Wimbledon is a famous tournament for?', options: ['Tennis', 'Golf', 'Swimming'], correct: 0 },
    { text: 'Sumo is a traditional sport from?', options: ['China', 'Japan', 'Korea'], correct: 1 },
    { text: 'The NBA is a professional league for?', options: ['Football', 'Tennis', 'Basketball'], correct: 2 },
  ],
  // Node 6: Health & Fitness
  6: [
    { text: 'Warming up before exercise helps?', options: ['Lose weight', 'Prevent injuries', 'Increase speed'], correct: 1 },
    { text: 'After exercising, you should?', options: ['Go straight to sleep', 'Drink water and rest', 'Eat lots of fried food'], correct: 1 },
    { text: 'How many minutes of daily exercise is recommended?', options: ['5 minutes', '30 minutes', '3 hours'], correct: 1 },
    { text: 'Dehydration means the body lacks?', options: ['Air', 'Water', 'Food'], correct: 1 },
    { text: 'Stretching means?', options: ['Running fast', 'Muscle stretching', 'Jumping high'], correct: 1 },
    { text: 'Exercise that is good for the heart is called?', options: ['Cardio', 'Weightlifting', 'Chess'], correct: 0 },
    { text: 'How much sleep do children need?', options: ['4-5 hours', '8-10 hours', '12-14 hours'], correct: 1 },
  ],
  // Node 7: Sports Icons & History
  7: [
    { text: 'Lionel Messi is famous in?', options: ['Basketball', 'Football/Soccer', 'Tennis'], correct: 1 },
    { text: 'Michael Jordan is famous in?', options: ['Basketball', 'Swimming', 'Golf'], correct: 0 },
    { text: 'Usain Bolt is the fastest runner in the?', options: ['Marathon', '100 meters', '400 meters'], correct: 1 },
    { text: 'The first modern Olympics were held in?', options: ['London', 'Athens', 'Paris'], correct: 1 },
    { text: 'Susi Susanti is an Indonesian legend in?', options: ['Swimming', 'Badminton', 'Gymnastics'], correct: 1 },
    { text: 'The Thomas Cup is a world championship for?', options: ["Men's Badminton", 'Football', 'Tennis'], correct: 0 },
    { text: 'Cristiano Ronaldo is from?', options: ['Brazil', 'Spain', 'Portugal'], correct: 2 },
  ],
  // Node 8 (BOSS): Mixed Floor 1
  8: [
    { text: 'How many hoops on a basketball court?', options: ['1', '2', '4'], correct: 1 },
    { text: 'A corner kick in football is called?', options: ['Penalty', 'Corner kick', 'Free kick'], correct: 1 },
    { text: 'The running track at a stadium is shaped like?', options: ['Square', 'Oval', 'Triangle'], correct: 1 },
    { text: 'Deuce in tennis means the score is?', options: ['30-30', '40-40', '15-15'], correct: 1 },
    { text: 'A hat-trick means scoring how many goals?', options: ['2', '3', '5'], correct: 1 },
    { text: 'A triathlon consists of?', options: ['Swimming, Cycling, Running', 'Running, Jumping, Throwing', 'Swimming, Gymnastics, Tennis'], correct: 0 },
    { text: 'Shuttle run drills improve?', options: ['Strength', 'Agility', 'Flexibility'], correct: 1 },
  ],
  // ================= FLOOR 2 =================
  9: [
    { text: 'In long jump, athletes land in?', options: ['A mat', 'A sand pit', 'A pool'], correct: 1 },
    { text: 'The high jump style facing away from the bar?', options: ['Straddle', 'Fosbury Flop', 'Freestyle'], correct: 1 },
    { text: 'Shot put uses a heavy ball made of?', options: ['Rubber', 'Wood', 'Metal / Iron'], correct: 2 },
    { text: 'In relay, the baton is passed in a zone of?', options: ['10 meters', '20 meters', '30 meters'], correct: 1 },
    { text: 'The breaststroke is also called the ___ stroke.', options: ['Frog', 'Dolphin', 'Dog'], correct: 0 },
  ],
  10: [
    { text: 'Gymnastics with ribbon/ball apparatus is called?', options: ['Rhythmic Gymnastics', 'Aerobic Gymnastics', 'Yoga'], correct: 0 },
    { text: 'Standing upside down on your head is called?', options: ['Handstand', 'Forward roll', 'Headstand'], correct: 2 },
    { text: 'A tiger leap ends with what position?', options: ['Lying down', 'On your back', 'Standing / Squatting'], correct: 2 },
    { text: 'The world governing body for gymnastics is?', options: ['FIFA', 'FIG', 'FIBA'], correct: 1 },
    { text: 'The bounce board in gymnastics is called?', options: ['Mat', 'Springboard', 'Pommel horse'], correct: 1 },
  ],
  11: [
    { text: 'Boxing rounds last how long each?', options: ['3 Minutes', '5 Minutes', '10 Minutes'], correct: 0 },
    { text: 'A KO occurs when the count reaches?', options: ['5', '10', '15'], correct: 1 },
    { text: 'Arms crossed in front of the face is called?', options: ['Jab', 'Hook', 'Guard'], correct: 2 },
    { text: 'A punch swinging upward to the chin?', options: ['Uppercut', 'Jab', 'Cross'], correct: 0 },
    { text: 'A wrestling referee judges?', options: ['Coaching', 'Holds and pins', 'Punching'], correct: 1 },
  ],
  12: [
    { text: 'The 4-3-3 formation uses how many strikers?', options: ['2', '3', '4'], correct: 1 },
    { text: '"Tiki-Taka" in football focuses on?', options: ['Direct crossing', 'Quick short passes', 'Total defense'], correct: 1 },
    { text: 'In a table tennis serve, the ball must bounce on?', options: ["Your side then partner's", "Your side then opponent's", "Opponent's side directly"], correct: 1 },
    { text: 'A jumping smash in badminton is used to?', options: ['Defend', 'Attack powerfully', 'Deceive opponents'], correct: 1 },
    { text: 'A lob shot in tennis passes over?', options: ['The baseline', 'A player at the net', 'The sideline'], correct: 1 },
  ],
  13: [
    { text: 'The Winter Olympics features?', options: ['Swimming', 'Snow Skiing', '100m Sprint'], correct: 1 },
    { text: 'The governing body of Indonesian football?', options: ['PSSI', 'PBSI', 'PRSI'], correct: 0 },
    { text: 'The highest Olympic medal is made of?', options: ['Gold', 'Silver', 'Bronze'], correct: 0 },
    { text: 'A Korean martial art known for kicks?', options: ['Karate', 'Taekwondo', 'Wushu'], correct: 1 },
    { text: '"Citius, Altius, Fortius" means?', options: ['Weaker, Shorter, Smaller', 'Faster, Higher, Stronger', 'Run, Jump, Far'], correct: 1 },
  ],
  14: [
    { text: 'The basketball shot clock is how many seconds?', options: ['12', '24', '60'], correct: 1 },
    { text: 'A shot beyond the three-point line is worth?', options: ['2', '3', '4'], correct: 1 },
    { text: 'A free-throw is worth how many points?', options: ['1 point', '2 points', '3 points'], correct: 0 },
    { text: 'Grabbing a missed shot is called?', options: ['Layup', 'Rebound', 'Slam Dunk'], correct: 1 },
    { text: 'How many main referees in official basketball?', options: ['1', '3', '5'], correct: 1 },
  ],
  15: [
    { text: 'A Formula 1 track is also called a?', options: ['Running track', 'Circuit', 'Highway'], correct: 1 },
    { text: 'The main group of cyclists is called?', options: ['Peoton', 'Peloton', 'Squad'], correct: 1 },
    { text: 'Off-road car racing on a specific route?', options: ['NASCAR', 'Rally', 'Formula E'], correct: 1 },
    { text: 'The world-famous motorcycle racing event?', options: ['Tour de France', 'MotoGP', 'Wimbledon'], correct: 1 },
    { text: 'A Pit Stop is where race vehicles?', options: ['Shower', 'Change tires / refuel', 'Park overnight'], correct: 1 },
  ],
  16: [
    { text: 'A second yellow card results in a?', options: ['Green card', 'Blue card', 'Red card'], correct: 2 },
    { text: 'A Libero in volleyball plays in which position?', options: ['Front block', 'Attack line', 'Back row'], correct: 2 },
    { text: 'In golf, the goal is to use the ___ strokes.', options: ['Most', 'Fewest', 'Longest'], correct: 1 },
    { text: "The standard men's hammer throw weight?", options: ['5 kg', '7.26 kg', '10 kg'], correct: 1 },
    { text: 'A baseball home run means the ball?', options: ['Stays flat', 'Is caught', 'Goes over the outfield wall'], correct: 2 },
  ],
  // ================= FLOOR 3 =================
  17: [
    { text: 'The main energy system for 100m sprint?', options: ['Aerobic', 'Anaerobic Alactic', 'Fat'], correct: 1 },
    { text: 'Lactate buildup in muscles causes?', options: ['Hunger', 'Soreness & fatigue', 'Fullness'], correct: 1 },
    { text: 'Carbohydrates are stored in muscles as?', options: ['Glycogen', 'Calcium', 'Protein'], correct: 0 },
    { text: 'Ligaments in the knee connect?', options: ['Pump blood', 'Bone to bone', 'Store fat'], correct: 1 },
    { text: 'Ice is used in injury recovery to reduce?', options: ['Sweetness', 'Inflammation / swelling', 'Tears'], correct: 1 },
  ],
  18: [
    { text: 'Club with most Champions League trophies?', options: ['Barcelona', 'Real Madrid', 'AC Milan'], correct: 1 },
    { text: 'The Super Bowl is from which sport?', options: ['American Football', 'Baseball', 'Basketball'], correct: 0 },
    { text: 'Who holds the most official FIFA goals record?', options: ['Pele', 'Ronaldo / Messi', 'Maradona'], correct: 1 },
    { text: '"Grand Slam" refers to major tournaments in?', options: ['Tennis', 'Boxing', 'Swimming'], correct: 0 },
    { text: '"Float like a butterfly" was said by?', options: ['Mike Tyson', 'Muhammad Ali', 'Floyd Mayweather'], correct: 1 },
  ],
  19: [
    { text: 'The Snatch lift is in which sport?', options: ['Weightlifting', 'Bodybuilding', 'Crossfit'], correct: 0 },
    { text: 'An aerodynamic cycling position helps?', options: ['Look cool', 'Reduce wind resistance', 'Sleep while riding'], correct: 1 },
    { text: 'A device measuring running speed?', options: ['Chronometer / Speed radar', 'Thermometer', 'Barometer'], correct: 0 },
    { text: '"Epee, Foil, Sabre" are used in?', options: ['Archery', 'Fencing', 'Shooting'], correct: 1 },
    { text: 'A board for sliding on snow is a?', options: ['Snowboard', 'Skateboard', 'Roller skates'], correct: 0 },
  ],
  20: [
    { text: 'VAR in football helps referees with?', options: ['Recording ads', 'Adding points', 'Tough decisions'], correct: 2 },
    { text: "A sports physiotherapist's job?", options: ['Train goalkeepers', 'Treat athlete injuries', 'Cook athlete meals'], correct: 1 },
    { text: 'VO2 Max measures?', options: ['Bone strength', 'Max oxygen capacity during exercise', 'Jump height'], correct: 1 },
    { text: 'Advanced swimsuits were banned in 2010 for?', options: ['Shark skin material (Polyurethane)', 'Regular rubber', 'Pure cotton'], correct: 0 },
    { text: 'Creatine supplements boost ___ exercise.', options: ['Endurance marathon', 'High-intensity explosive', 'Yoga'], correct: 1 },
  ],
  21: [
    { text: 'A defensive midfielder is often called?', options: ['Striker', 'Playmaker', 'Defensive Midfielder (DM)'], correct: 2 },
    { text: 'Pressing opponents high up the pitch?', options: ['Parking the bus', 'Gegenpressing / High Press', 'Long Ball'], correct: 1 },
    { text: '"Pick and Roll" is used in?', options: ['Football', 'Basketball', 'Volleyball'], correct: 1 },
    { text: 'In baseball, the ball thrower is called?', options: ['Catcher', 'Pitcher', 'Batter'], correct: 1 },
    { text: 'In volleyball, the setter is also called?', options: ['Spiker', 'Blocker', 'Setter / Tosser'], correct: 2 },
  ],
  22: [
    { text: "The max weight of a men's javelin?", options: ['500 g', '600 g', '800 g'], correct: 2 },
    { text: 'The Decathlon has how many events?', options: ['5', '10', '20'], correct: 1 },
    { text: 'Water Polo has how many active players per team?', options: ['5', '7', '11'], correct: 1 },
    { text: 'A handball match lasts?', options: ['2x30 minutes', '2x45 minutes', '4x10 minutes'], correct: 0 },
    { text: 'In Rugby, the ball cannot be passed?', options: ['Backward', 'Sideways', 'Forward'], correct: 2 },
  ],
  23: [
    { text: 'The standard marathon distance is?', options: ['10 KM', '21.097 KM', '42.195 KM'], correct: 2 },
    { text: 'Two parallel bars in gymnastics are called?', options: ['Asymmetric Bars', 'Parallel Bars', 'Horizontal Bar'], correct: 1 },
    { text: 'The butterfly kick resembles the tail of a?', options: ['Stingray', 'Dolphin', 'Frog'], correct: 1 },
    { text: 'An indoor volleyball court measures?', options: ['18m x 9m', '20m x 10m', '15m x 7m'], correct: 0 },
    { text: 'Standard NBA/FIBA hoop height?', options: ['2.50 Meters', '3.05 Meters', '3.50 Meters'], correct: 1 },
  ],
  24: [
    { text: 'Pole vault poles are made of?', options: ['Fiberglass / Carbon Fiber', 'Teak wood', 'Steel'], correct: 0 },
    { text: 'Most successful FIFA World Cup nation?', options: ['Germany', 'Argentina', 'Brazil (5 titles)'], correct: 2 },
    { text: 'Artistic gymnastics events are in the?', options: ['SEA Games only', 'Olympics', 'FIFA World Cup'], correct: 1 },
    { text: 'A short putt into the hole in golf?', options: ['Putting', 'Smash', 'Free Hit'], correct: 0 },
    { text: "Men's team tennis world championship?", options: ['Uber Cup', 'Davis Cup', 'Thomas Cup'], correct: 1 },
  ],
};

// ==========================================
// ART INTEREST â€” All Floors (Node 1-24)
// ==========================================
export const artQuestions: QuestionBank = {
  // Node 1: Art Tools & Materials
  1: [
    { text: 'The main tool for drawing is?', options: ['Pencil', 'Pan', 'Broom'], correct: 0 },
    { text: 'A brush is used for?', options: ['Writing', 'Painting', 'Cutting'], correct: 1 },
    { text: 'Watercolor paint is mixed with?', options: ['Oil', 'Water', 'Milk'], correct: 1 },
    { text: 'Special paper for painting is called?', options: ['Canvas', 'Newspaper', 'Cardboard'], correct: 0 },
    { text: 'A palette is used for?', options: ['Cutting paper', 'Mixing paint', 'Drawing lines'], correct: 1 },
    { text: 'An eraser is used for?', options: ['Coloring', 'Removing mistakes', 'Cutting'], correct: 1 },
    { text: 'Crayons are made from?', options: ['Wood', 'Colored wax', 'Plastic'], correct: 1 },
  ],
  // Node 2: Basic Colors
  2: [
    { text: 'Primary colors are?', options: ['Red, Yellow, Blue', 'Green, Orange, Purple', 'Black, White, Gray'], correct: 0 },
    { text: 'Mixing red and yellow creates?', options: ['Green', 'Orange', 'Purple'], correct: 1 },
    { text: 'Mixing blue and yellow creates?', options: ['Green', 'Orange', 'Brown'], correct: 0 },
    { text: 'Mixing red and blue creates?', options: ['Green', 'Yellow', 'Purple'], correct: 2 },
    { text: 'Mixing red and white creates?', options: ['Pink', 'Orange', 'Purple'], correct: 0 },
    { text: 'How many colors are in a rainbow?', options: ['5', '7', '10'], correct: 1 },
    { text: 'Black and white are called ___ colors.', options: ['Primary', 'Secondary', 'Neutral'], correct: 2 },
  ],
  // Node 3: Basic Shapes & Patterns
  3: [
    { text: 'A shape with 3 sides is called?', options: ['Square', 'Triangle', 'Circle'], correct: 1 },
    { text: 'A shape with no corners?', options: ['Square', 'Triangle', 'Circle'], correct: 2 },
    { text: 'A regularly repeating pattern is called?', options: ['Random', 'Motif / Pattern', 'Painting'], correct: 1 },
    { text: 'Symmetrical means?', options: ['Irregular', 'Same on left and right', 'Colorful'], correct: 1 },
    { text: 'Curved lines give a feeling of?', options: ['Rigidity', 'Softness and motion', 'Sharpness'], correct: 1 },
    { text: 'A star shape has how many points?', options: ['4', '5', '6'], correct: 1 },
    { text: 'A mosaic is art made by?', options: ['Assembling small pieces into an image', 'Painting on canvas', 'Sculpting clay'], correct: 0 },
  ],
  // Node 4 (BOSS): Mixed Tools, Colors & Shapes
  4: [
    { text: 'Secondary colors are made by mixing?', options: ['Neutral', 'Primary', 'Tertiary'], correct: 1 },
    { text: 'How many primary colors are there?', options: ['2', '3', '5'], correct: 1 },
    { text: 'Texture in art relates to?', options: ['Sound', 'Surface of objects', 'Smell'], correct: 1 },
    { text: 'Straight lines give a feeling of?', options: ['Softness', 'Firmness and strength', 'Messiness'], correct: 1 },
    { text: 'A color gradient means?', options: ['Even flat color', 'Gradual color change', 'No color'], correct: 1 },
    { text: 'Origami is the art of folding?', options: ['Fabric', 'Paper', 'Metal'], correct: 1 },
    { text: 'Which is NOT an element of visual art?', options: ['Line', 'Color', 'Sound'], correct: 2 },
  ],
  // Node 5: Types of Art
  5: [
    { text: 'Paintings are made on?', options: ['Canvas', 'Ground', 'Water'], correct: 0 },
    { text: 'A sculpture is a ___ artwork.', options: ['2D', '3D', '1D'], correct: 1 },
    { text: 'A mural is a painting on a?', options: ['Paper', 'Wall', 'Fabric'], correct: 1 },
    { text: 'A collage is made by?', options: ['Carving', 'Gluing pieces of material', 'Watercolor painting'], correct: 1 },
    { text: 'A sketch is a ___ drawing.', options: ['Detailed', 'Messy', 'Rough / preliminary'], correct: 2 },
    { text: 'Photography is the art of?', options: ['Painting', 'Taking photos', 'Sculpting'], correct: 1 },
    { text: 'Batik is a fabric art from?', options: ['Japan', 'Indonesia', 'India'], correct: 1 },
  ],
  // Node 6: Composition & Art Principles
  6: [
    { text: 'Harmony in art means?', options: ['Messiness', 'Unity of elements', 'Using 1 color'], correct: 1 },
    { text: 'Contrast means?', options: ['Striking difference', 'All the same', 'Faded colors'], correct: 0 },
    { text: 'Proportion in drawing bodies means?', options: ['Balanced sizes', 'Matching colors', 'Straight lines'], correct: 0 },
    { text: 'Empty space in design is called?', options: ['Negative space', 'Black', 'Outline'], correct: 0 },
    { text: 'The main focus in a painting is called?', options: ['Background', 'Focal point', 'Frame'], correct: 1 },
    { text: 'Warm colors give a feeling of?', options: ['Cool and calm', 'Cheerful and energetic', 'Sadness'], correct: 1 },
    { text: 'Cool colors include?', options: ['Red and yellow', 'Blue and green', 'Orange and pink'], correct: 1 },
  ],
  // Node 7: Famous Artists & Works
  7: [
    { text: 'Who painted the "Mona Lisa"?', options: ['Picasso', 'Leonardo da Vinci', 'Van Gogh'], correct: 1 },
    { text: '"Starry Night" was painted by?', options: ['Monet', 'Van Gogh', 'Rembrandt'], correct: 1 },
    { text: 'Affandi is a famous painter from?', options: ['Japan', 'Indonesia', 'Italy'], correct: 1 },
    { text: 'Raden Saleh was known for which style?', options: ['Abstract', 'Romanticism', 'Pop Art'], correct: 1 },
    { text: 'Pablo Picasso is known for which movement?', options: ['Realism', 'Cubism', 'Naturalism'], correct: 1 },
    { text: 'The Statue of Liberty is in?', options: ['Paris', 'New York', 'London'], correct: 1 },
    { text: 'Shadow puppets (Wayang) is a performing art from?', options: ['Bali', 'Java', 'Sumatra'], correct: 1 },
  ],
  // Node 8 (BOSS): Mixed Floor 1
  8: [
    { text: 'The difference between 2D and 3D art?', options: ['2D is flat, 3D has volume', '2D is colored, 3D is black & white', 'No difference'], correct: 0 },
    { text: 'An example of applied/functional art?', options: ['Abstract painting', 'Ceramic vase', 'Museum sculpture'], correct: 1 },
    { text: 'An art style that depicts reality accurately?', options: ['Abstract', 'Realism', 'Cubism'], correct: 1 },
    { text: 'Tertiary colors come from mixing?', options: ['Primary + Primary', 'Primary + Secondary', 'Secondary + Secondary'], correct: 1 },
    { text: 'Impressionism focuses on?', options: ['Bold lines', 'Light and color impressions', 'Geometric shapes'], correct: 1 },
    { text: 'Installation art is artwork that?', options: ['Hangs on a wall', 'Fills a room / environment', 'Is made from paper only'], correct: 1 },
  ],
  // ================= FLOOR 2 =================
  9: [
    { text: 'The Renaissance was a rebirth of ___ culture.', options: ['Baroque', 'Classical European', 'Romanticism'], correct: 1 },
    { text: 'The Mona Lisa was painted during the?', options: ['Renaissance', 'Modern era', 'Surrealism era'], correct: 0 },
    { text: 'The cubist painter who broke faces into geometric shapes?', options: ['Monet', 'Van Gogh', 'Pablo Picasso'], correct: 2 },
    { text: 'The art movement that depicts dreams and the subconscious?', options: ['Surrealism', 'Realism', 'Naturalism'], correct: 0 },
    { text: 'Salvador Dali is famous for painting?', options: ['Sunflowers', 'Melting clocks', 'Market birds'], correct: 1 },
  ],
  10: [
    { text: 'Marble sculpture was popular in which country?', options: ['England', 'Italy (Greco-Roman)', 'Netherlands'], correct: 1 },
    { text: 'Street graffiti art emerged in which era/place?', options: ['Japan (1800s)', 'American streets (1970s)', 'Ancient Europe'], correct: 1 },
    { text: 'Pop Art pioneer famous for Campbell Soup/Marilyn Monroe?', options: ['Andy Warhol', 'Michelangelo', 'Raden Saleh'], correct: 0 },
    { text: 'The artist who famously cut off his own ear?', options: ['Affandi', 'Vincent Van Gogh', 'Picasso'], correct: 1 },
    { text: 'What is calligraphy?', options: ['The art of beautiful writing', 'The art of wood carving', 'The art of metal folding'], correct: 0 },
  ],
  11: [
    { text: 'Thick paint applied with a palette knife (impasto) is typical of?', options: ['Smooth Realism', 'Van Gogh / Expressive Impressionism', 'Photography'], correct: 1 },
    { text: 'Carving wood to make prints is called?', options: ['Woodcut', 'Digital art', 'Watercolor'], correct: 0 },
    { text: 'Shaping clay and firing it for pots is called?', options: ['Metal crafts', 'Ceramics', 'Wall art'], correct: 1 },
    { text: 'Painting on wet plaster since ancient times is called?', options: ['Mural', 'Fresco', 'Canvas'], correct: 1 },
    { text: 'Pointillism uses tiny dots that blend when seen from?', options: ['Very close', 'Squinting', 'A distance'], correct: 2 },
  ],
  12: [
    { text: 'Gamelan is a musical ensemble from?', options: ['Malaysia', 'Java and Bali', 'India'], correct: 1 },
    { text: 'Traditional Cirebon mask theater is a form of?', options: ['Modern comedy', 'Cultural dance tradition', 'Fire magic'], correct: 1 },
    { text: 'The Balinese dance with sharp eye movements?', options: ['Legong / Kecak', 'Plate Dance', 'Candle Dance'], correct: 0 },
    { text: 'Wayang Golek from West Java uses ___ puppets.', options: ['Flat 2D shadow', '3D wooden rod', 'Live actors'], correct: 1 },
    { text: 'A master keris maker in Java is called?', options: ['Priest', 'Dalang', 'Empu'], correct: 2 },
  ],
  13: [
    { text: 'CMYK is the color standard for?', options: ['Printing / Ink', 'Monitor screens', 'Street lights'], correct: 0 },
    { text: 'What does RGB stand for?', options: ['Red, Green, Blue', 'Red, Gold, Black', 'Right, Great, Best'], correct: 0 },
    { text: 'Modern illustrators draw using graphic tablets like?', options: ['Nintendo', 'Wacom / iPad', 'Macbook trackpad'], correct: 1 },
    { text: 'The art of arranging text and fonts in design is called?', options: ['Animation', 'Videography', 'Typography'], correct: 2 },
    { text: '8-bit pixel art is commonly seen in?', options: ['Museum paintings', 'Retro games (90s era like Mario)', 'Newspaper photos'], correct: 1 },
  ],
  14: [
    { text: 'Architectural artists design sketches of?', options: ['Building plans and structures', 'Poetry', 'Recipes'], correct: 0 },
    { text: "Photography from a low angle looking up is called?", options: ['Bird Eye View', 'Worm Eye View', 'Eye Level'], correct: 1 },
    { text: 'To capture light trails at night, you adjust the?', options: ['Aperture', 'ISO', 'Shutter Speed (slow)'], correct: 2 },
    { text: 'Naturalism values painting nature that looks?', options: ['Messy', 'As realistic and beautiful as a photo', 'Geometrically abstract'], correct: 1 },
    { text: 'Relief carvings in Indonesia are iconic on?', options: ['Keris daggers', 'Batik fabric', 'Temples (e.g. Borobudur)'], correct: 2 },
  ],
  15: [
    { text: 'Aesthetics is about judging things by their?', options: ['Physical strength', 'Beauty and emotional impact', 'Material price'], correct: 1 },
    { text: 'Black and white in Western art often symbolize?', options: ['Party warmth', 'Mystery / Elegance and Purity', 'Nature vitality'], correct: 1 },
    { text: 'Transparent watercolor technique is called aquarelle. The opaque opposite is?', options: ['Pointillism', 'Gouache / Plakat', 'Collage'], correct: 1 },
    { text: 'Assembling scrap materials into sculpture is called?', options: ['Assemblage art', 'Junk dealing', 'Cast sculpture'], correct: 0 },
    { text: 'Classic Disney animation on celluloid sheets is called?', options: ['Realistic animal art', 'Caricature', 'Cel Animation'], correct: 2 },
  ],
  16: [
    { text: 'Leonardo da Vinci was a painter AND inventor, making him a?', options: ['Renaissance Man', 'Prehistoric cave artist', 'Computer graphics pioneer'], correct: 0 },
    { text: 'Art installations made to decay or be destroyed are called?', options: ['Performance art', 'Ephemeral art', 'Permanent sculpture'], correct: 1 },
    { text: 'The Indonesian abstract-expressionist maestro known for wild brushstrokes?', options: ['Affandi', 'Raden Saleh', 'S. Sudjojono'], correct: 0 },
    { text: 'Purple was historically associated with?', options: ['Poverty', 'Royalty / Nobility', 'Danger'], correct: 1 },
    { text: 'Designing futuristic costumes (Cosplay) falls under?', options: ['Architecture', 'Dance art', 'Fashion & Textile applied art'], correct: 2 },
  ],
  // ================= FLOOR 3 =================
  17: [
    { text: 'Chiaroscuro (dramatic light/dark) is associated with?', options: ['Van Gogh', 'Caravaggio / Rembrandt', 'Picasso'], correct: 1 },
    { text: 'Contemporary art often contains messages criticizing?', options: ['Bird flight patterns', 'Politics, society, and modern issues', 'Ancient education'], correct: 1 },
    { text: 'Computer-generated imagery using AI algorithms is called?', options: ['Traditional painting', 'Generative / AI Art', '8-bit pixel analog'], correct: 1 },
    { text: 'In Da Vinci proportions, the eyes are positioned at?', options: ['The vertical midpoint of the head', 'The top of the forehead', 'Just above the chin'], correct: 0 },
    { text: 'Drawing nude figures to study anatomy is called?', options: ['Figure drawing / Life drawing', 'Cartoon drawing', 'Fashion sketch'], correct: 0 },
  ],
  18: [
    { text: 'Crafting gold/silver jewelry is called?', options: ['Painting', 'Monumental sculpture', 'Metal crafts / Jewelry making'], correct: 2 },
    { text: 'Carved furniture that is both beautiful AND functional is?', options: ['Fine art (display only)', 'Applied / Functional art', 'Performance furniture'], correct: 1 },
    { text: 'Arranging text and spacing for readable UI design is called?', options: ['Typography Layout / Visual Hierarchy', 'Random graffiti', 'Ancient calligraphy'], correct: 0 },
    { text: 'Chinese brush writing with thick-thin strokes is called?', options: ['Chinese Calligraphy / Shufa', 'European stained glass', 'Oil painting'], correct: 0 },
    { text: 'Three-point perspective is often used by game designers for?', options: ['Small interior rooms', 'Tall buildings and cityscapes', 'Flat flower close-ups'], correct: 1 },
  ],
  19: [
    { text: 'Dadaism was a post-war art movement that was?', options: ['Photorealistic', 'Rejecting logic with absurdist satire', 'Romantic landscape'], correct: 1 },
    { text: 'The pioneer of manga/anime who created Astro Boy?', options: ['Hayao Miyazaki', 'Osamu Tezuka', 'Junji Ito'], correct: 1 },
    { text: 'Painting with gold leaf on manuscripts is called?', options: ['Modern gold foil printing', 'Manuscript illumination', 'Pen ink drawing'], correct: 1 },
    { text: 'The expensive ancient Roman purple dye was called?', options: ['Lapis Lazuli blue', 'Tyrian Purple', 'Cadmium Yellow'], correct: 1 },
    { text: 'Jackson Pollock\'s paint-dripping style is called?', options: ['Cubism', 'Abstract Expressionism / Action Painting', 'Quiet Realism'], correct: 1 },
  ],
  20: [
    { text: 'Apple\'s simple logo follows which design philosophy?', options: ['Minimalism', 'Baroque grandeur', 'Pop Art bright colors'], correct: 0 },
    { text: 'Stop motion with clay figures (e.g. Shaun the Sheep) is?', options: ['Claymation', 'CGI 3D rendering', 'Vector flat drawing'], correct: 0 },
    { text: 'Photoshop works with pixel-based images called?', options: ['Vector graphics', 'Bitmap / Raster graphics', 'Analog watercolor'], correct: 1 },
    { text: 'Michelangelo\'s Sistine Chapel was painted using?', options: ['Dry crumbling plaster', 'Thick oil paint layers', 'Wet plaster (fresco technique)'], correct: 2 },
    { text: 'Creating fake explosions/monsters in movies uses?', options: ['Theater makeup', 'CGI / Visual Effects (VFX)', 'Audio dubbing'], correct: 1 },
  ],
  21: [
    { text: 'The giant GWK statue in Bali was created by?', options: ['Basuki Abdullah', 'I Nyoman Nuarta', 'Hendra Gunawan'], correct: 1 },
    { text: 'A Victorian-era spinning animation toy is called?', options: ['SLR Camera', 'Zoetrope', 'VR Headset'], correct: 1 },
    { text: 'The toxic white paint pigment used by old masters was made from?', options: ['Lead (Lead White)', 'Iron oxide', 'Squid ink'], correct: 0 },
    { text: 'Broadway musicals (like The Lion King) are classified as?', options: ['Audio art only', 'Visual art only', 'Performing Arts (combined)'], correct: 2 },
    { text: 'The Megamendung batik motif originates from?', options: ['Cirebon, West Java (Blue/Red)', 'Solo, Central Java (Brown)', 'Bali (Gold carving)'], correct: 0 },
  ],
  22: [
    { text: 'Transparent wet painting on paper that cannot be easily corrected?', options: ['Oil paint', 'Watercolor (Aquarelle)', 'Charcoal pencil'], correct: 1 },
    { text: 'The Golden Ratio (1:1.618) in design creates?', options: ['Messy chaotic layouts', 'Naturally beautiful harmonious composition', 'Perfectly straight grid lines'], correct: 1 },
    { text: 'Kirigami differs from origami by allowing?', options: ['Wetting the paper', 'Cutting and trimming the paper', 'Using feet instead of hands'], correct: 1 },
    { text: '"The Scream" was painted by Norwegian artist?', options: ['Edvard Munch', 'Claude Monet', 'Leonardo da Vinci'], correct: 0 },
    { text: '"Avant-garde" in art means?', options: ['Traditional conservative follower', 'Revolutionary innovative pioneer', 'Art plagiarist / copycat'], correct: 1 },
  ],
  23: [
    { text: 'Pre-production scene sketches for film are called?', options: ['Storyboard', 'Movie poster', 'Camera lens setup'], correct: 0 },
    { text: 'Knotted cord textile art is called?', options: ['Screen printing', 'Macrame', 'Glass mosaic'], correct: 1 },
    { text: 'Distant objects appearing bluish/faded in landscapes is called?', options: ['Aerial Perspective', 'Linear Perspective (3-point)', 'Isometric Perspective'], correct: 0 },
    { text: 'A smooth color transition from one hue to another is called?', options: ['Stroke / Outline', 'Gradient', 'Drop Shadow'], correct: 1 },
    { text: 'Red in fast-food logos (KFC, McDonald\'s) is designed to?', options: ['Make people sleepy', 'Stimulate appetite and urgency', 'Feel clean and sterile'], correct: 1 },
  ],
  24: [
    { text: 'Intricate silver wire jewelry craft (filigree) from Kotagede is?', options: ['Thick cast gold sculpture', 'Metal carving', 'Silver filigree wire craft'], correct: 2 },
    { text: 'Prehistoric cave paintings used pigments from?', options: ['Permanent markers', 'Earth ochre, charcoal, and blown minerals', 'Gold brushes and olive oil'], correct: 1 },
    { text: 'The marble "Pieta" sculpture was created by?', options: ['Michelangelo Buonarroti', 'Donatello', 'Raphael Sanzio'], correct: 0 },
    { text: 'Pop Art pioneer who used silkscreen printing of celebrities?', options: ['Henri Matisse (Fauvism)', 'Andy Warhol', 'Jackson Pollock'], correct: 1 },
    { text: 'A 2D painting that tricks the eye into seeing 3D is called?', options: ['Impresso-Mural', 'Trompe l\'Oeil', 'Stained Glass Mosaic'], correct: 1 },
  ],
};

// Function to get questions based on interest and nodeId
export function getInterestQuestions(interest: string, nodeId: number): InterestQuestion[] {
  let bank: QuestionBank;
  
  switch (interest) {
    case 'computer':
      bank = computerQuestions;
      break;
    case 'sport':
      bank = sportQuestions;
      break;
    case 'art':
    default:
      bank = artQuestions;
      break;
  }

  const questions = bank[nodeId];
  
  if (!questions || questions.length === 0) {
    // Fallback: return generic questions if nodeId not found
    return bank[1] || [];
  }

  // Shuffle and pick 5
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
}
