// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample601_6p0
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World! 6.0 (Sample602_6p0 (using 5.0 style))");
	    //
	    List<String> a = new List<String>();
	    a.Add("Taro");
	    a.Add("Hanako");
	    a.Add("Jiro");
	    a.Add("Kaoru");
	    a.Remove("Taro");
	    a.RemoveAt(1);
	    foreach (String s in a)
	    {
		Console.WriteLine(s);
	    }
        }
    }
}

