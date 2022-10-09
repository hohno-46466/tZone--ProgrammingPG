// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample406
{
    class Program
    {
	static void Main(string[] args)
	{
	    Console.WriteLine("Hello, World! (Sample406-6p0)");
	    //
	    Person p1, p2;
	    p1 = new Person();
	    p2 = new Person("山田太郎", 29);
	    p1.Name = "田中花子";
	    p1.Age = 18;
	    p1.ShowAgeAndName();
	    p2.ShowAgeAndName();
	}
    }
}
