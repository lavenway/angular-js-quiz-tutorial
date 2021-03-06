(function() {

	'use strict';
	angular
		.module('quizFramework')
		.factory('dataService', DataFactory);

		function DataFactory() {
			var dataObj = {
				JSONQuizData: JSONQuizData,
				correctAnswers: correctAnswers
			};

			return dataObj;
		}

		var correctAnswers = [1, 2, 3, 0, 2, 0, 3];

		var JSONQuizData = [
			{
				"type": "text",
				"text": "This is question 1?",
				"possibilities": [
					{
						"answer": "This is option answer A"
					},
					{
						"answer": "This is option answer B"
					},
					{
						"answer": "This is option answer C"
					},
					{
						"answer": "This is option answer D"
					}
				],
				"feedback": "This is a detailed description regarding the answer to question 1",
				"selected": null,
				"correct": null
			},
			{
				"type": "text",
				"text": "This is question 2?",
				"possibilities": [
					{
						"answer": "This is option answer A"
					},
					{
						"answer": "This is option answer B"
					},
					{
						"answer": "This is option answer C"
					},
					{
						"answer": "This is option answer D"
					}
				],
				"feedback": "This is a detailed description regarding the answer to question 2",
				"selected": null,
				"correct": null
			},
			{
				"type": "text",
				"text": "This is question 3?",
				"possibilities": [
					{
						"answer": "This is option answer A"
					},
					{
						"answer": "This is option answer B"
					},
					{
						"answer": "This is option answer C"
					},
					{
						"answer": "This is option answer D"
					}
				],
				"feedback": "This is a detailed description regarding the answer to question 3",
				"selected": null,
				"correct": null
			},
			{
				"type": "text",
				"text": "This is question 4?",
				"possibilities": [
					{
						"answer": "This is option answer A"
					},
					{
						"answer": "This is option answer B"
					},
					{
						"answer": "This is option answer C"
					},
					{
						"answer": "This is option answer D"
					}
				],
				"feedback": "This is a detailed description regarding the answer to question 4",
				"selected": null,
				"correct": null
			},
			{
				"type": "text",
				"text": "This is question 5?",
				"possibilities": [
					{
						"answer": "This is option answer A"
					},
					{
						"answer": "This is option answer B"
					},
					{
						"answer": "This is option answer C"
					},
					{
						"answer": "This is option answer D"
					}
				],
				"feedback": "This is a detailed description regarding the answer to question 5",
				"selected": null,
				"correct": null
			},
			{
				"type": "text",
				"text": "This is question 6?",
				"possibilities": [
					{
						"answer": "This is option answer A"
					},
					{
						"answer": "This is option answer B"
					},
					{
						"answer": "This is option answer C"
					},
					{
						"answer": "This is option answer D"
					}
				],
				"feedback": "This is a detailed description regarding the answer to question 6",
				"selected": null,
				"correct": null
			},
			{
				"type": "image",
				"text": "This is question 7?",
				"possibilities": [
					{
						"answer": "http://www.animalspot.net/wp-content/uploads/2012/01/Monkey-Photos.jpg"
					},
					{
						"answer": "http://www.animalspot.net/wp-content/uploads/2012/01/Monkey-Photos.jpg"
					},
					{
						"answer": "http://www.animalspot.net/wp-content/uploads/2012/01/Monkey-Photos.jpg"
					},
					{
						"answer": "http://www.animalspot.net/wp-content/uploads/2012/01/Monkey-Photos.jpg"
					}
				],
				"feedback": "This is a detailed description regarding the answer to question 7",
				"selected": null,
				"correct": null
			}
		];
		
})();