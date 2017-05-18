var QUIZ_LENGTH = 10;

var QUESTIONS = [
	{
		"question_text": "When was Nick Redmond born?",
		"possible_answers": [
			"January 20, 1994 @ 6:55 P.M. Arizona Time",
			"February 20, 1994 @ 6:55 P.M. Arizona Time",
			"February 20, 1994 @ 1:32 A.M. Arizona Time",
			"Febuary 22, 1994 @ 1:32 A.M. Arizona Time"
		],
		"correct_answer_index": 2
	},
	{
		"question_text": "What is the maiden name of Nick Redmond's biological mother?",
		"possible_answers": [
			"Linda Lou Diggins",
			"Linda Lou Diggs",
			"Linda Leanne Diggins",
			"Linda Leanne Diggs"
		],
		"correct_answer_index": 1
	},
	{
		"question_text": "How many U.S. states has Nick Redmond visited?",
		"possible_answers": [
			"5",
			"25",
			"39",
			"All 50"
		],
		"correct_answer_index": 1
	},
	{
		"question_text": "How many full days did Nick Redmond spend at Colorado River Regional Youth Services?",
		"possible_answers": [
			"27",
			"45",
			"62",
			"90"
		],
		"correct_answer_index": 0
	},
	{
		"question_text": "When did Nick Redmond graduate from college?",
		"possible_answers": [
			"April 30, 2016",
			"March 22, 2016",
			"March 25, 2015",
			"March 18, 2015"
		],
		"correct_answer_index": 3
	},
	{
		"question_text": "What is Nick Redmond's favorite food?",
		"possible_answers": [
			"Burgers",
			"Pizza",
			"Spaghetti",
			"All of the above"
		],
		"correct_answer_index": 3
	},
	{
		"question_text": "What is Nick Redmond's dream job?",
		"possible_answers": [
			"Software Architect",
			"Politician",
			"Public Service Employee",
			"Lawyer"
		],
		"correct_answer_index": 2
	},
	{
		"question_text": "In which Arizona cities has Nick Redmond lived?",
		"possible_answers": [
			"Phoenix, Prescott, Kingman",
			"Phoenix, Tempe, Chandler, Prescott, Kingman",
			"Phoenix, Tempe, Chandler, Prescott, Kingman, Lake Havasu City",
			"Phoenix, Tempe, Chandler, Prescott, Kingman, Bullhead City"
		],
		"correct_answer_index": 2
	},
	{
		"question_text": "In which Utah cities has Nick Redmond lived?",
		"possible_answers": [
			"South Jordan, Salt Lake City, West Point",
			"South Jordan, Salt Lake City, Orem, West Valley City, West Point",
			"South Jordan, Salt Lake City, West Valley City, West Point",
			"South Jordan, Salt Lake City, Provo, West Valley City, West Point"
		],
		"correct_answer_index": 1
	},
	{
		"question_text": "In which California cities has Nick Redmond lived?",
		"possible_answers": [
			"Escondido, Wildomar",
			"Wildomar",
			"Del Mar, Los Angeles",
			"Escondido, Los Angeles"
		],
		"correct_answer_index": 0
	},
	{
		"question_text": "What is [truly] Nick Redmond's favorite song?",
		"possible_answers": [
			"\"Let's Go\" by Trick Daddy because Nick just can't help but \"get real wit' it\", sometimes",
			"\"Footloose\" by Kenny Loggins because the song inspired Nick's passion for dancing",
			"\"Should've Been a Cowboy\" by Toby Keith because Nick can empathize with the longing for rodeos",
			"\"Dancing Queen\" by Abba because Nick's mom caught him dancing to it while playing outfield"
		],
		"correct_answer_index": 3
	},
	{
		"question_text": "Which sports has Nick Redmond played, as part of a team?",
		"possible_answers": [
			"Basketball, Football, Wrestling",
			"Baseball, Wrestling",
			"Hockey, Football, Wrestling",
			"Baseball, Football, Wrestling"
		],
		"correct_answer_index": 3
	},
	{
		"question_text": "What are Nick Redmond's favorite pastimes?",
		"possible_answers": [
			"Snowboarding, Skydiving",
			"Snowboarding, Playing Guitar, Helping Others",
			"Snowboarding, Playing Guitar, Table Tennis, Eating, Helping Others",
			"Drinking Beer, Barbeques, Making Fun of People, Watching Republican News"
		],
		"correct_answer_index": 2
	},
	{
		"question_text": "Who was Nick Redmond's first-grade teacher?",
		"possible_answers": [
			"Mrs. Jonovich",
			"Ms. Newman",
			"Mr. DeWees",
			"Mr. Tyree"
		],
		"correct_answer_index": 1
	},
	{
		"question_text": "Which one of these awards did Nick Redmond actually win?",
		"possible_answers": [
			"2nd Place, 2015 League of Legends Championship Series",
			"2nd Place, 2014 Salt Lake County Debate Championship",
			"1st Place, Yavapai County Science Fair",
			"1st Place, Mohave Regional Mental Math Competition"
		],
		"correct_answer_index": 3
	},
	{
		"question_text": "Which religions has Nick Redmond formally adopted, in the past or now?",
		"possible_answers": [
			"Baptism, Methodism, Agnosticism",
			"Baptism, Protestantism, Agnosticism",
			"Methodism, Lutheranism",
			"Catholicism, Agnosticism, Mormonism"
		],
		"correct_answer_index": 0
	},
	{
		"question_text": "Where has Nick Redmond been backpacking, before?",
		"possible_answers": [
			"Glen Canyon, Yosemite Nat'l Park",
			"Hassayampa River, Grand Canyon Nat'l Park, Yellowstone Nat'l Park",
			"Grand Canyon Nat'l Park, Arches Nat'l Park, Yellowstone Nat'l Park",
			"Grand Canyon Nat'l Park, Yosemite Nat'l Park"
		],
		"correct_answer_index": 1
	},
	{
		"question_text": "How many full-time, paid positions has Nick Redmond held?",
		"possible_answers": [
			"3",
			"4",
			"6",
			"7"
		],
		"correct_answer_index": 1
	},
	{
		"question_text": "Who is Nick Redmond's Goo?",
		"possible_answers": [
			"Dunbar",
			"Santiago",
			"Legolas",
			"Blue"
		],
		"correct_answer_index": 0
	},
	{
		"question_text": "What are the names of Nick's childhood pets?",
		"possible_answers": [
			"Sanchez, Dumbledore",
			"Beauty, Sanchez, Crystal, Umi",
			"Crystal, Umi",
			"Beauty, Crystal, Umi"
		],
		"correct_answer_index": 3
	},
	{
		"question_text": "What is Nick Redmond's favorite animal?",
		"possible_answers": [
			"Koala Bear",
			"Fire-Bellied Newt",
			"Grizzly Bear",
			"Bald Eagle"
		],
		"correct_answer_index": 0
	},
	{
		"question_text": "What score did Nick Redmond receive on the ACT?",
		"possible_answers": [
			"22",
			"30",
			"36",
			"Nick Redmond did not take the ACT"
		],
		"correct_answer_index": 1
	},
	{
		"question_text": "What score did Nick Redmond receive on the SAT?",
		"possible_answers": [
			"1080",
			"1250",
			"1600",
			"Nick Redmond did not take the SAT"
		],
		"correct_answer_index": 3
	},
	{
		"question_text": "What is Nick Redmond's favorite brand of tobacco (until he quits)?",
		"possible_answers": [
			"Marlboro Reds Short",
			"Marlboro Reds 100",
			"Camel Crush Menthol",
			"American Spirits"
		],
		"correct_answer_index": 0
	}
];
