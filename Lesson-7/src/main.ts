// Index Signatures & keyof Assertions

// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

interface transactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: transactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";

console.log(todaysTransactions[prop]);

const todaysNet = (transactions: transactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

////////////////////////////////////////////

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "J",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test)

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

// Asseertion using keyof
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// Another way
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");
logStudentKey(student, "name");

////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
