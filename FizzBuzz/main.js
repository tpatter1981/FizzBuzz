/*Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.*/

for (var i = 1; i < 100; i++)
{
    if (i%3 === 0 && i%5 === 0 )
    {
        console.log( i + 'FizzBuzz');
    }
else if (i%3 === 0)
{
    console.log(i+ " Fizz");
}
else if (i%5 === 0)
{
  console.log(i+ " Buzz");

}
else
{
    console.log(i);
}
}
