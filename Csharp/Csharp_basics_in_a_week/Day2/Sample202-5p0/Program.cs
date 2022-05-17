using System;

namespace Sample202_5p0
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World! 202 / 5.0");
            int a;
            int b = 3;
            int add, sub;
            double avg;
            a = 6;
            sub = a + b;
            sub = a - b;
            avg = (a + b) / 2.0;
            Console.WriteLine("{0} + {1} = {2}", a, b, add);
            Console.WriteLine("{0} - {1} = {2}", a, b, add);
            Console.WriteLine("{0} と {1} の平均値 {2}", a, b, avg);        }
    }
}
