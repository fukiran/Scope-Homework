//Episode 1

            const scenario = {
              murderer: 'Miss Scarlet',
              room: 'Library',
              weapon: 'Rope'
            };
            
            const declareMurderer = function() {
              return `The murderer is ${scenario.murderer}.`;
            }
            
            const verdict = declareMurderer();
            console.log(verdict);
  // This one is obvious, 'Miss Scarlet', scenario.murder -> declareMurder -> verdict -> console.log()

  // Episode 2

            const murderer = 'Professor Plum';

            const changeMurderer = function() {
            murderer = 'Mrs. Peacock';
            }

            const declareMurderer = function() {
            return `The murderer is ${murderer}.`;
            }

            changeMurderer();
            const verdict = declareMurderer();
            console.log(verdict);

// Profesor Plum, can't change const murder.

// Episode 3
            let murderer = 'Professor Plum';

            const declareMurderer = function() {
              let murderer = 'Mrs. Peacock';
              return `The murderer is ${murderer}.`;
            }

            const firstVerdict = declareMurderer();
            console.log('First Verdict: ', firstVerdict); // Mrs. Peacock

            const secondVerdict = `The murderer is ${murderer}.`;
            console.log('Second Verdict: ', secondVerdict);  // Professor Plum

// First Verdict takes value of the function declareMurderer,
// inside this function murderer was changed let murderer = 'Mrs. Peacock'.
// Second Verdict takes value of the variable murderer,
//changed value inside the function can't be seen, so murderer = 'Professor Plum'.

// Episode 4
            let suspectOne = 'Miss Scarlet';
            let suspectTwo = 'Professor Plum';
            let suspectThree = 'Mrs. Peacock';

            const declareAllSuspects = function() {
              let suspectThree = 'Colonel Mustard';
              return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
            }

            const suspects = declareAllSuspects();
            console.log(suspects);  // Miss Scarlet, Professor Plum, Colonel Mustard
            console.log(`Suspect three is ${suspectThree}.`); // Mrs. Peacock

// Calling function declareAllSuspects will give "Miss Scarlet, Professor Plum, Colonel Mustard",
// because of changes inside the function(let suspectThree = 'Colonel Mustard').
// Calling variable suspectThree from outside the function 
// will give Mrs. Peacock as a outcome.

//Episode 5
          const scenario = {
            murderer: 'Miss Scarlet',
            room: 'Kitchen',
            weapon: 'Candle Stick'
          };

          const changeWeapon = function(newWeapon) {
            scenario.weapon = newWeapon;
          }

          const declareWeapon = function() {
            return `The weapon is the ${scenario.weapon}.`;
          }

          changeWeapon('Revolver');
          const verdict = declareWeapon();
          console.log(verdict);

// Revolver, as seen above weapon was changed by changeWeapon function.

// Episode 6
          let murderer = 'Colonel Mustard';

          const changeMurderer = function() {
            murderer = 'Mr. Green';

            const plotTwist = function() {
              murderer = 'Mrs. White';
            }

            plotTwist();
          }

          const declareMurderer = function () {
            return `The murderer is ${murderer}.`;
          }

          changeMurderer();
          const verdict = declareMurderer();
          console.log(verdict);  // Mrs. White

// changeMurderer changes murderer to Mr. Green, but there is another function inside changeMurderer,
// plotTwist changes it again to Mrs. White.

// Episode 7
          let murderer = 'Professor Plum';

          const changeMurderer = function() {
            murderer = 'Mr. Green';

            const plotTwist = function() {
              let murderer = 'Colonel Mustard';

              const unexpectedOutcome = function() {
                murderer = 'Miss Scarlet';
              }

              unexpectedOutcome();
            }

            plotTwist();
          }

          const declareMurderer = function() {
            return `The murderer is ${murderer}.`;
          }

          changeMurderer();
          const verdict = declareMurderer();
          console.log(verdict);

// murderer = Mr. Green is the global variable on the highest level in this puzzle,
// that's why Mr. Green is declared as a murderer.(???)

// Episode 8
          const scenario = {
            murderer: 'Mrs. Peacock',
            room: 'Conservatory',
            weapon: 'Lead Pipe'
          };

          const changeScenario = function() {
            scenario.murderer = 'Mrs. Peacock';
            scenario.room = 'Dining Room';

            const plotTwist = function(room) {
              if (scenario.room === room) {
                scenario.murderer = 'Colonel Mustard';
              }

              const unexpectedOutcome = function(murderer) {
                if (scenario.murderer === murderer) {
                  scenario.weapon = 'Candle Stick';
                }
              }

              unexpectedOutcome('Colonel Mustard');
            }

            plotTwist('Dining Room');
          }

          const declareWeapon = function() {
            return `The weapon is ${scenario.weapon}.`
          }

          changeScenario();
          const verdict = declareWeapon();
          console.log(verdict);  // Candle Stick

// changeScenario changes room to 'Dining Room';
// plotTwist checks if room is the 'Dining Room' and because answer is yes,
// changes murderer to 'Colonel Mustard';
// unexpectedOutcome checks if murderer is 'Colonel Mustard' and because answer is yes,
// changes weapon to 'Candle Stick'.

// Episode 9
          let murderer = 'Professor Plum';

          if (murderer === 'Professor Plum') {
            let murderer = 'Mrs. Peacock';
          }

          const declareMurderer = function() {
            return `The murderer is ${murderer}.`;
          }

          const verdict = declareMurderer();
          console.log(verdict);

// The murderer is Professor Plum. Mrs. Peacock is the murderer only within 'if block' not outside.