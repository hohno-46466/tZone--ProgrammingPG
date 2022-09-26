using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample401
{
    class Person
    {
	public string name = "";
	public int age = 0;
	public void ShowAgeAndName()
	{
	    Console.WriteLine("名前：{0} 年齢：{1}", name, age);
	}
	public void SetAgeAndName(string name, int age)
	{
	    this.name = name;
	    this.age = age;
	}
    }
}
	    
