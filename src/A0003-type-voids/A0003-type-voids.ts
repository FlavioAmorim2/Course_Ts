function  noReturn(...args: String[]): void{ //void make retutning undefined
  console.log(args.join(' '));
}

const person = {
  namee: 'Flavio',
  lastName: 'amorim',

  displayNamee(): void{
    console.log(this.namee + ' ' + this.lastName);
  }

}

noReturn('Flavio', 'Amorim');
person.displayNamee();

export {person}
