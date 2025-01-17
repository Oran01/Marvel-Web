import { Component, OnInit } from '@angular/core';
import { TriviaService } from 'server/trivia.service';
import { AuthService } from 'server/auth.service';

// Define the structure of a Question object
interface Question {
  question: string;
  option: string[];
  answer: string;
  image: string;
}

/**
 * Component for displaying and managing the Trivia quiz page.
 * Handles quiz logic, score calculation, and interaction with the trivia and authentication services.
 */
@Component({
  selector: 'app-trivia-page',
  templateUrl: './trivia-page.component.html',
  styleUrls: ['./trivia-page.component.css'],
})
export class TriviaPageComponent implements OnInit {
  questionBank: Question[] = [
    // List of questions with options, answers, and images
    {
      question: 'How many Infinity Stones are there?',
      option: ['6', '8', '3', '5'],
      answer: '6',
      image: 'assets/TriviaImg/InfinityWars.webp',
    },
    {
      question: "Captain America's shield and Bucky's arm are made of what?",
      option: ['Uru', 'Adamantium', 'Vibranium', 'Carbonadium'],
      answer: 'Vibranium',
      image: 'assets/TriviaImg/Vibranium.jpg',
    },
    {
      question:
        'What name does Natasha use when she first meets Tony Stark in Iron Man 2?',
      option: [
        'Natalia Romanova',
        'Natalia Romanoff',
        'Natalie Rushman',
        'Natasha Romanoff',
      ],
      answer: 'Natalie Rushman',
      image: 'assets/TriviaImg/blackWidow.jpg',
    },
    {
      question:
        'In which movie did Spider-Man make his first appearance in the MCU?',
      option: [
        'Captain America: Civil War',
        'Avengers: Infinity Wars',
        'Ant-Man',
        'Spider-Man: Homecoming',
      ],
      answer: 'Captain America: Civil War',
      image: 'assets/TriviaImg/peterParker.webp',
    },
    {
      question: 'Wanda and her brother Pietro are from where?',
      option: ['Kamar-Taj', 'Wakanda', 'Morag', 'Sokovia'],
      answer: 'Sokovia',
      image: 'assets/TriviaImg/wandaPietro.webp',
    },
    {
      question: 'Which movie kicked off the Marvel Cinematic Universe?',
      option: ['Iron Man', 'Captian America', 'Hulk', 'Avengers'],
      answer: 'Iron Man',
      image: 'assets/TriviaImg/ironCapHulk.jpg',
    },
    {
      question: "What is the name of Thor's Hammer?",
      option: ['Storm Breaker', 'Mjolnir', 'Tanngrisnir', 'Toothgnasher'],
      answer: 'Mjolnir',
      image: 'assets/TriviaImg/ThorsHammer.webp',
    },
    {
      question: 'What is Hulks catch phrase?',
      option: ['Hulk no like!', 'Hulk angry!', 'Hulk Smash!', 'Hulk strong!'],
      answer: 'Hulk Smash!',
      image: 'assets/TriviaImg/hulk.jpg',
    },
    {
      question: 'Where is Peter Quill from?',
      option: ['Texas', 'California', 'illinois', 'Missouri'],
      answer: 'Missouri',
      image: 'assets/TriviaImg/Starlord.webp',
    },
    {
      question:
        'In Spider-Man: No Way Home, which of these Peter Parkers is nicknamed "Peter 3"?',
      option: ['Toby Mcguire', 'Andrew Garfield', 'Nadji Jeter', 'Tom Holland'],
      answer: 'Andrew Garfield',
      image: 'assets/TriviaImg/threeSpiders.jpg',
    },
  ];

  question: string = ''; // Current question
  image: string = ''; // Image related to the current question
  options: string[] = []; // Options for the current question
  score: string = '0/0'; // Display score
  correctAnswers: number = 0; // Count of correct answers
  currentQuestionIndex: number = 0; // Index of the current question
  showQuizContainer: boolean = true; // Flag to show/hide quiz container
  showScoreboard: boolean = false; // Flag to show/hide scoreboard
  showAnswerBoard: boolean = false; // Flag to show/hide answer board
  notifications: any[] = []; // Array to store notifications
  showAnswerBank: boolean = false; // Flag to show/hide answer bank

  constructor(
    private AuthService: AuthService, // Service for authentication
    private TriviaService: TriviaService // Service for trivia operations
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Used here to display the first question.
   */
  ngOnInit() {
    this.displayQuestion();
  }

  /**
   * Display the current question and its related data.
   */
  displayQuestion(): void {
    const currentQuestion = this.questionBank[this.currentQuestionIndex];
    this.question = currentQuestion.question;
    this.image = currentQuestion.image;
    this.options = currentQuestion.option;
  }

  /**
   * Calculate the score based on the selected option.
   * @param optionIndex - Index of the selected option
   */
  calcScore(optionIndex: number): void {
    const selectedOption = this.options[optionIndex];
    const currentQuestion = this.questionBank[this.currentQuestionIndex];

    if (
      selectedOption === currentQuestion.answer &&
      this.currentQuestionIndex < this.questionBank.length
    ) {
      this.correctAnswers += 1;
      const selectedOptionElement = document.getElementById(
        `option${optionIndex}`
      );
      if (selectedOptionElement) {
        selectedOptionElement.classList.add('correct');
      }
    } else {
      const selectedOptionElement = document.getElementById(
        `option${optionIndex}`
      );
      if (selectedOptionElement) {
        selectedOptionElement.classList.add('wrong');
      }
    }

    setTimeout(() => {
      this.nextQuestion();
    }, 300);

    this.score = `${this.correctAnswers}/${this.currentQuestionIndex + 1}`;
  }

  /**
   * Proceed to the next question or show the final score.
   */
  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questionBank.length - 1) {
      this.currentQuestionIndex += 1;
      this.displayQuestion();
      this.score = `${this.correctAnswers}/${this.currentQuestionIndex + 1}`;
    } else {
      this.showQuizContainer = false;
      this.showScoreboard = true;
      this.showAnswerBank = false;
      this.showAnswerBoard = false;
    }
  }

  /**
   * Restart the quiz, resetting all relevant fields.
   */
  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
    this.showQuizContainer = true;
    this.showScoreboard = false;
    this.showAnswerBank = false;
    this.showAnswerBoard = false;
    this.displayQuestion();

    const answerBankElement = document.getElementById('answerBank');
    if (answerBankElement) {
      answerBankElement.style.display = 'none';
    }
  }

  /**
   * Check the answers by displaying the answer bank.
   */
  checkAnswers(): void {
    const answerBankElement = document.getElementById('answerBank');
    const answersElement = document.getElementById('answers');

    if (answerBankElement && answersElement) {
      answersElement.innerHTML = ''; 

      this.questionBank.forEach((question, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${question.answer}`;
        answersElement.appendChild(listItem);
      });

      answerBankElement.style.display = 'block'; // Show the answer bank section
      this.showQuizContainer = false; // Hide the quiz container
      this.showScoreboard = false; // Hide the scoreboard
      this.showAnswerBoard = true; // Show the answer board

      this.showAnswerBank = true; // Set showAnswerBank to true
    }
  }

  /**
   * Add or update the user's score in the leaderboard.
   */
  addOrUpdateScore() {
    if (this.AuthService.isLoggedIn) {
      const userId = this.AuthService.getUserId();
  
      const existingScoreObservable = this.TriviaService.getScoreForUser(userId);
      existingScoreObservable.subscribe(
        (existingScore) => {
          if (existingScore !== null && existingScore >= 0) {
            // Prompt the user to confirm updating the score
            if (confirm('Do you want to update your score on the leaderboard?')) {
              this.TriviaService.updateScore(userId, this.correctAnswers).subscribe(
                (response) => {
                  this.showNotification('success', 'Score updated successfully!');
                  console.log('Score updated successfully:', response);
                },
                (error) => {
                  this.showNotification('error', 'Error updating score. Please try again.');
                  console.error('Error updating score:', error);
                }
              );
            }
          } else {
            // Add the new score to the leaderboard
            this.TriviaService.addScore(userId, this.correctAnswers).subscribe(
              (response) => {
                this.showNotification('success', 'Score added successfully!');
                console.log('Score added successfully:', response.message);
              },
              (error) => {
                this.showNotification('error', 'Error adding score. Please try again.');
                console.error('Error adding score:', error);
              }
            );
          }
        },
        (error) => {
          console.error('Error retrieving score:', error);
        }
      );
    } else {
      // User is not logged in
      this.showNotification('info', 'You need to log in or sign up to add/update your score.');
    }
  }
  
  /**
   * Show a notification to the user.
   * @param type - Type of the notification ('info', 'error', 'warning', 'success')
   * @param text - The notification message
   */
  showNotification(type: string, text: string) {
    const icons: Record<string, string> = {
      info: 'fas fa-info-circle',
      error: 'fas fa-times-circle',
      warning: 'fas fa-exclamation-triangle',
      success: 'fas fa-check-circle',
    };
  
    const notification = { type, text, icon: icons[type] };
    this.notifications.push(notification);
  
    setTimeout(() => {
      this.removeNotification(notification);
    }, 5000);
  }
  
  /**
   * Remove a notification from the list.
   * @param notification - The notification to be removed
   */
  removeNotification(notification: any) {
    const index = this.notifications.indexOf(notification);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }
  }
}
