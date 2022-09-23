using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Sample209_5p0
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, Sample209_5p0!");

	    Console.Write("1から3の整数を入力: ");
	    int num = int.Parse(Console.ReadLine());
	    if (num == 1)
	    {
		Console.WriteLine("one");
	    } else if (num == 2)
	    {
	    	Console.WriteLine("two");
	    } else if (num == 3)
	    {
	    	Console.WriteLine("thrree");
	    }
	    else
	    {
		Console.WriteLine("不適切な値です。");
	    }
        }
    }
}
