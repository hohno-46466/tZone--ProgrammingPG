// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample405
{
    class Program
    {
	static void Main(string[] args)
	{
	    Console.WriteLine("Hello, World! (Sample405-6p0)");
	    //
	    Person2 p = new Person2();
	    p.SetAgeAndName("山田太郎", 26);
	    p.Age = 32;
	    // p.Name = ...
	    Console.WriteLine("名前：{0}  年齢：{1}", p.Name, p.Age);
	}
    }
}
