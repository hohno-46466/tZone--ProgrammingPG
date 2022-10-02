// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample403
{
    class Program
    {
	static void Main(string[] args)
	{
	    Console.WriteLine("Hello, World! (Sample403-6p0)");
	    Person p1, p2;
	    p1 = new Person();
	    p2 = new Person();
	    p1.Name = "山田太郎";
	    p1.Age = 19;
	    p2.SetAgeAndName("佐藤花子", 23);
	    p1.ShowAgeAndName();
	    Console.WriteLine("名前:{0} 年齢:{1}", p2.Name, p2.Age);
	}
    }
}
