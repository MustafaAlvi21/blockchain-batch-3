class grandParent{
	constructor(gpName,gpDOB){
		this.gName = gpName
		this.gDOB = gpDOB
	}

	gpbio(){
		return "Name is: "+this.gName+" and Date of birth "+this.gDOB
	}
}

class child extends grandParent{
	constructor(G_Name, G_DBO, name,age){
		super(G_Name, G_DBO);
		this.name = name;
		this.age = age
	}
	SecondBio(){
		return "Parent Details:  "
		+this.gpbio()+
		"Personal Details:  His name is "
		+this.name+
		" "+this.gName+
		" and his age is "+this.age
	}

	test(){
		return this.gpbio()
		
	}
}


class grandChild extends child{
	constructor(grandParentDOB,name,age,gcName,gcDOB){
		super(grandParentDOB,name,age);
		this.gcName = gcName
		this.gcDOB = gcDOB
	}

	thirdBio(){
		return this.SecondBio() +
		"My name is "+this.gcName+" and DOB is" +
		this.gcDOB
	}

}

//var newBase = new base();
var newChild = new grandChild("John","1900-01-01","Mike","1930-03-09","XYZ","2011-09-30");
var newChild2 = new grandChild("John","1900-01-01","Ali","1930-03-09","Mustafa","2011-09-30");
// var newChild = new grandChild("John","1900-01-01","Mike","1930-03-09","XYZ","2011-09-30");

// console.log("His Parent Details are "+ newChild.SecondBio())
console.log("Data is: "+ newChild.thirdBio())
console.log("Data is: "+ newChild2.thirdBio())