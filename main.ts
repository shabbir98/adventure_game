#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

class User {
  protected fuel = 100;
  constructor(public name: string) {}

  fuelDecrease() {
    const fuel = this.fuel - 25;
    this.fuel = fuel;
  }

  public get _fuel(): number {
    return this.fuel;
  }
}
class Player extends User {
  constructor(name: string) {
    super(name);
  }

  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent extends User {
  constructor(name: string) {
    super(name);
  }
}

const lessFuel = (p1less: string, p1fuel: number) =>
  console.log(chalk.bold.red(`${p1less} fuel is ${p1fuel}`));

const moreFuel = (p1less: string, p1fuel: number) =>
  console.log(chalk.bold.green(`${p1less} fuel is ${p1fuel}`));

const { player } = await inquirer.prompt({
  type: 'input',
  name: 'player',
  message: 'Enter player name:',
});

const { opponent } = await inquirer.prompt({
  type: 'list',
  name: 'opponent',
  choices: ['Skeleton', 'Assassin', 'Zombie'],
  message: 'Select your Opponent',
});

const p1 = new Player(player);
const o1 = new Opponent(opponent);

do {
  switch (opponent) {
    case 'Skeleton':
      const { opt1 } = await inquirer.prompt({
        type: 'list',
        name: 'opt1',
        message: 'Select your option',
        choices: ['Attack', 'Drink Portion', 'Run for your life....'],
      });

      if (opt1 === 'Attack') {
        let num = Math.floor(Math.random() * 2);

        if (num > 0) {
          p1.fuelDecrease();
          lessFuel(p1.name, p1._fuel);
          moreFuel(o1.name, o1._fuel);

          if (p1._fuel <= 0) {
            console.log(
              chalk.bold.red.italic('You loose :(, better luck next time.')
            );
            process.exit();
          }
        } else {
          o1.fuelDecrease();
          lessFuel(o1.name, o1._fuel);
          moreFuel(p1.name, p1._fuel);
        }
        if (o1._fuel <= 0) {
          console.log(chalk.bold.green.italic("You've won!"));
          process.exit();
        }
      }

      if (opt1 === 'Drink Portion') {
        p1.fuelIncrease();
        console.log(
          chalk.bold.italic.green(
            `${p1.name}'s fuel is restored to ${p1._fuel}`
          )
        );
      }

      if (opt1 === 'Run for your life....') {
        console.log(
          chalk.bold.red.italic('You loose :(, better luck next time.')
        );
        process.exit();
      }
      break;

    case 'Assassin':
      const { opt } = await inquirer.prompt({
        type: 'list',
        name: 'opt',
        message: 'Select your option',
        choices: ['Attack', 'Drink Portion', 'Run for your life....'],
      });

      if (opt === 'Attack') {
        let num = Math.floor(Math.random() * 2);

        if (num > 0) {
          p1.fuelDecrease();
          lessFuel(p1.name, p1._fuel);
          moreFuel(o1.name, o1._fuel);

          if (p1._fuel <= 0) {
            console.log(
              chalk.bold.red.italic('You loose :(, better luck next time.')
            );
            process.exit();
          }
        } else {
          o1.fuelDecrease();
          lessFuel(o1.name, o1._fuel);
          moreFuel(p1.name, p1._fuel);
        }
        if (o1._fuel <= 0) {
          console.log(chalk.bold.green.italic("You've won!"));
          process.exit();
        }
      }

      if (opt === 'Drink Portion') {
        p1.fuelIncrease();
        console.log(
          chalk.bold.italic.green(
            `${p1.name}'s fuel is restored to ${p1._fuel}`
          )
        );
      }

      if (opt === 'Run for your life....') {
        console.log(
          chalk.bold.red.italic('You loose :(, better luck next time.')
        );
        process.exit();
      }
      break;

    case 'Zombie':
      const { opt2 } = await inquirer.prompt({
        type: 'list',
        name: 'opt2',
        message: 'Select your option',
        choices: ['Attack', 'Drink Portion', 'Run for your life....'],
      });

      if (opt2 === 'Attack') {
        let num = Math.floor(Math.random() * 2);

        if (num > 0) {
          p1.fuelDecrease();
          lessFuel(p1.name, p1._fuel);
          moreFuel(o1.name, o1._fuel);

          if (p1._fuel <= 0) {
            console.log(
              chalk.bold.red.italic('You loose :(, better luck next time.')
            );
            process.exit();
          }
        } else {
          o1.fuelDecrease();
          lessFuel(o1.name, o1._fuel);
          moreFuel(p1.name, p1._fuel);
        }
        if (o1._fuel <= 0) {
          console.log(chalk.bold.green.italic("You've won!"));
          process.exit();
        }
      }

      if (opt2 === 'Drink Portion') {
        p1.fuelIncrease();
        console.log(
          chalk.bold.italic.green(
            `${p1.name}'s fuel is restored to ${p1._fuel}`
          )
        );
      }

      if (opt2 === 'Run for your life....') {
        console.log(
          chalk.bold.red.italic('You loose :(, better luck next time.')
        );
        process.exit();
      }
      break;
  }
} while (true);
