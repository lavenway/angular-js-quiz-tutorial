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
				type: 'text', //Could be text or image in this quiz
				text: 'This is question 1?',
				possibilities: [
					{
						answer: 'This is option answer A'
					},
					{
						answer: 'This is option answer B'
					},
					{
						answer: 'This is option answer C'
					},
					{
						answer: 'This is option answer D'
					}
				],
				selected: null,
				correct: null
			},
			{
				type: 'text',
				text: 'This is question 2?',
				possibilities: [
					{
						answer: 'This is option answer A'
					},
					{
						answer: 'This is option answer B'
					},
					{
						answer: 'This is option answer C'
					},
					{
						answer: 'This is option answer D'
					}
				],
				selected: null,
				correct: null
			},
			{
				type: 'text',
				text: 'This is question 3?',
				possibilities: [
					{
						answer: 'This is option answer A'
					},
					{
						answer: 'This is option answer B'
					},
					{
						answer: 'This is option answer C'
					},
					{
						answer: 'This is option answer D'
					}
				],
				selected: null,
				correct: null
			},
			{
				type: 'text',
				text: 'This is question 4?',
				possibilities: [
					{
						answer: 'This is option answer A'
					},
					{
						answer: 'This is option answer B'
					},
					{
						answer: 'This is option answer C'
					},
					{
						answer: 'This is option answer D'
					}
				],
				selected: null,
				correct: null
			},
			{
				type: 'text',
				text: 'This is question 5?',
				possibilities: [
					{
						answer: 'This is option answer A'
					},
					{
						answer: 'This is option answer B'
					},
					{
						answer: 'This is option answer C'
					},
					{
						answer: 'This is option answer D'
					}
				],
				selected: null,
				correct: null
			},
			{
				type: 'text',
				text: 'This is question 6?',
				possibilities: [
					{
						answer: 'This is option answer A'
					},
					{
						answer: 'This is option answer B'
					},
					{
						answer: 'This is option answer C'
					},
					{
						answer: 'This is option answer D'
					}
				],
				selected: null,
				correct: null
			},
			{
				type: 'image',
				text: 'This is question 7?',
				possibilities: [
					{
						answer: 'This is option answer A'
					},
					{
						answer: 'This is option answer B'
					},
					{
						answer: 'This is option answer C'
					},
					{
						answer: 'This is option answer D'
					}
				],
				selected: null,
				correct: null
			}
		];
		
})();